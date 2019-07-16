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
    addError: null,
  }


  cssRouteClasses = {
    form: 'add-video-form-route',
    instructions: 'add-video-form-instructions',
    flex: 'flex-form-route',
    directionsBox: 'directions-route',
    inputBox: 'inputs-route',
    labelBox: 'label-route'
  }
  
  errorHandler = err => {
    this.setState({addError: err.error})
    console.log('here')
    setTimeout(()=>this.setState({addError: null}), 3000)
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
      <section className="add-video-container">
        <h2 className= "provide-info-text">Please provide information on your video below</h2>
        <AddVideos 
          cssRouteProps = {this.cssRouteClasses}
          fields={this.state} 
          handleFields={this.handleFields}
          handleSubmit={this.handleSubmit}/>
      </section>
    );
  }
}
