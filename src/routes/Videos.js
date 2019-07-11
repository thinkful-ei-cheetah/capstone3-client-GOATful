import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import VideoService from '../services/video-api';
import AddVideos from '../components/AddVideo/AddVideo';
import VideoStorage from '../services/video-storage';

import { checkTime, tagStringToArray, errorCheckNewVideo } from '../Utils/Utils'

export default class Videos extends Component {

  state = {
    videos: [],
    current: [0, 3], //index of selected videos
    videoEditError: null,
    title: '',
    tags: '',
    video_length: '',
    youtube_display_name: '',
    addError: ''
  }

  errorHandler = err => {
    this.setState({videoEditError: err.error || err.message})
    setTimeout(()=>this.setState({videoEditError: null}), 3000)
  }

  addErrorHandler = err => {
    this.setState({addError: err.error || err.message})
    setTimeout(()=>this.setState({addError: null}), 3000)
  }

  async componentDidMount() {
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  async updateSelectedVideo(id, updates) {
    await VideoService.patchVideo(id, updates)
    
    try{
      const videos = await VideoService.getVideos();
      this.setState({ videos })
    } catch(e){ 
      this.errorHandler(e)
    }
  } 

  handleFormSubmission = async (id, values) => {
    const checkedTime = checkTime(values.video_length);
    if (checkedTime.error){
      this.errorHandler(checkedTime)
      return;
    }

    const updateVideo = {
      title: values.title,
      video_length: checkedTime.googleTimeString,
      youtube_display_name: values.youtube_display_name,
      tags: tagStringToArray(values.tags),
    }
    const isError = errorCheckNewVideo(updateVideo);
    if (isError.status === true){
      this.errorHandler(isError)
      return
    }
    this.updateSelectedVideo(id, updateVideo);
  }



  renderVideos() {
    const { videos } = this.state;
    //slice out videos that are needed from state
    const videoList = videos.slice(this.state.current[0], this.state.current[1] + 1)
    return videoList.map(video => <VideoItem
      handleFormSubmission={this.handleFormSubmission}
      video={video}
      key={video.id}
      formError = {this.state.videoEditError}
      />)
  }
  //show next four
  showNextFourVideos = e => {
    if (this.state.current === 0) { return }
    this.setState({
      current: [this.state.current[0] + 4, this.state.current[1] + 4]
    })
  }

  showLastFourVideos = e => {
      e.preventDefault()
      this.setState({
        current: [this.state.current[0] - 4, this.state.current[1] - 4]
      })
  }

  errorCheckNewVideo = (video) => {
    for (let key in video) {
      if (key === 'tags') {
        if (video[key][0].trim() === "") {
          return { status: true, message: 'Invalid tags' }
        }
      } else {
        if (video[key].trim() === "") {
          return { status: true, message: `${key} is required` }
        }
      }
    }
    return { status: false }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const values = {
      title: this.state.title,
      video_length: this.state.video_length,
      youtube_display_name: this.state.youtube_display_name,
      tags: this.state.tags,
  
    }
    const checkedTime = checkTime(values.video_length);
    if (checkedTime.error){
      this.addErrorHandler(checkedTime)
      return;
    }
    const newVideo = {
      title: values.title,
      video_length: checkedTime.googleTimeString,
      youtube_display_name: values.youtube_display_name,
      tags: tagStringToArray(values.tags),
    }
    const isError = errorCheckNewVideo(newVideo);
    console.log(isError)
    if (isError.status === true){
      this.addErrorHandler(isError)
      return
    }
    try{
      await VideoService.postVideo(newVideo);
      VideoStorage.saveKey('laconic_current_video', newVideo)
      this.props.history.push('/creator')
    }catch(e){
      this.addErrorHandler(e)
    }
    
  }



  handleFields = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <section className='videos-page'>
        <div>
          <AddVideos
            fields={this.state}
            handleFields={this.handleFields}
            handleSubmit={this.handleSubmit} />
        </div>
        <div className="btn-container">

          <button type="button" disabled={!this.state.current[0]} onClick={this.showLastFourVideos}>Previous</button>
          <button type="button" onClick={this.showNextFourVideos}>Next</button>
        </div>
        <div className='my-videos-container'>
          {this.state.videos.length ? this.renderVideos() : ''}
        </div>
      </section>
    );
  }
}