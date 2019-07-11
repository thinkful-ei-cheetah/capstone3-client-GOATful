import React, { Component } from 'react'
import AddVideos from '../components/AddVideo/AddVideo';
import VideoStorage from '../services/video-storage';
import {errorCheckNewVideo, tagStringToArray, checkTime} from '../Utils/Utils'

export default class AddVid extends Component {
  state={
    title: "",
    tags: '',
    video_length: "",
    youtube_display_name: "",
    error: null,
  }
  
  errorHandler = err => {
    this.setState({error: err.error})
    setTimeout(()=>this.setState({error: null}), 3000)
  }

  handleSubmit = e =>{
    e.preventDefault();
    const checkedTime =checkTime(this.state.video_length)
    if (checkedTime.error){
      this.errorHandler(checkedTime)
      return;
    }
    const video = {
      title: this.state.title,
      video_length: checkedTime.googleTimeString,
      youtube_display_name: this.state.youtube_display_name,
      tags: tagStringToArray(this.state.tags),
    }
    const isError = errorCheckNewVideo(video);
    if (isError.status === true){
      this.errorHandler(isError)
      return
    }
    VideoStorage.saveVideo(video)
    this.props.history.push('/creator')
  }
  
  handleFields = e => {
    let { value, name } = e.target;
      this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <section>
        <h2>Please provide information on your video below</h2>
        <AddVideos 
          fields={this.state} 
          handleFields={this.handleFields}
          handleSubmit={this.handleSubmit}/>
      </section>
    );
  }
}
