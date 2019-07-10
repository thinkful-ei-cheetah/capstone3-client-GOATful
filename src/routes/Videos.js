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
    title: '',
    tags: '',
    video_length: '',
    youtube_display_name: '',
  }


  async componentDidMount() {
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  async updateSelectedVideo(id, updates) {
    await VideoService.patchVideo(id, updates)
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  handleFormSubmission = (id, values) => {
    const checkedTime = checkTime(values.video_length);
    if (checkedTime.message) {
      // this.errorHandler(checkedTime)
      // return;
    }
    const updateVideo = {
      title: values.title,
      video_length: checkedTime.formattedTime,
      youtube_display_name: values.youtube_display_name,
      tags: tagStringToArray(values.tags),
    }
    const isError = errorCheckNewVideo(updateVideo);
    if (isError.status === true) {
      // this.errorHandler(isError)
      // return
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
    // if(this.state.current === 0) { return }
    this.setState({
      current: [this.state.current[0] - 4, this.state.current[1] - 4]
    })
  }



  tagStringToArray = str => {
    const tagsArr = str.split(', ').filter(Boolean).slice(0, 3);
    return tagsArr;
  }

  errorCheck = (video) => {
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
  errorHandler = err => {
    this.setState({ error: err.message })
    setTimeout(() => this.setState({ error: null }), 3000)
  }

  handleSubmit = e => {
    e.preventDefault();
    const video = {
      title: this.state.title,
      video_length: this.state.video_length,
      youtube_display_name: this.state.youtube_display_name,
      tags: this.tagStringToArray(this.state.tags),
      // ? will be changed when utils is updated
    }
    const isError = this.errorCheck(video);
    if (isError.status === true) {
      this.errorHandler(isError)
      return
    }
    VideoStorage.saveKey('laconic_current_video', video)
    this.props.history.push('/creator')
    VideoService.postVideo(video);
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