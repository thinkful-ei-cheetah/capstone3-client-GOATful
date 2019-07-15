import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import Loader from '../components/Loader/Loader'
import AddVideoModal from '../components/AddVideoModal/AddVideoModal'
import VideoService from '../services/video-api';
import VideoStorage from '../services/video-storage';
import FAB from '../components/FAB/FAB'
import { withAppContext } from '../contexts/AppContext'

import { checkTime, tagStringToArray, errorCheckNewVideo } from '../Utils/Utils'

class Videos extends Component {

  state = {
    videos: [],
    isLoading: true,
    videoEditError: null,
    title: '',
    tags: '',
    video_length: '',
    youtube_display_name: '',
    addError: '',
    modalIsOpen: false,
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
    try {
      const videos = await VideoService.getVideos();
      this.setState({ videos, isLoading: false })
    } catch(err) {
      this.setState({ isLoading: false }, this.props.appContext.setAppError(err.message))
    }
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

  deleteVideo = async videoId => {
    try{
      this.setState({isLoading: true })

      await VideoService.deleteVideo(videoId)
      const videos = await VideoService.getVideos();
      this.setState({ videos, isLoading: false })
    } catch(err){ 
      this.setState({ isLoading: false }, this.props.appContext.setAppError(err.message))
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})  
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  renderVideos() {
    const { videos } = this.state;
    return videos.map(video => <VideoItem
      handleFormSubmission={this.handleFormSubmission}
      deleteVideo={this.deleteVideo}
      video={video}
      key={video.id}
      formError = {this.state.videoEditError}
      />)
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
    if (isError.status === true){
      this.addErrorHandler(isError)
      return
    }
    try {
     const createdVideo = await VideoService.postVideo(newVideo);
      VideoStorage.saveKey('laconic_current_video', createdVideo)
      this.props.history.push('/creator')
    } catch(e){
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
        <Loader isLoading={this.state.isLoading} />
        <FAB onClick={this.openModal}/>
        <AddVideoModal 
          fields={this.state}
          handleFields={this.handleFields}
          handleSubmit={this.handleSubmit}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        />
        <div className='my-videos-container'>
          {this.state.videos.length ? this.renderVideos() : ''}
        </div>
      </section>
    );
  }
}

export default withAppContext(Videos)