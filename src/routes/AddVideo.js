import React, { Component } from 'react'
import AddVideos from '../components/AddVideo/AddVideo';
import VideoStorage from '../services/video-storage'

export default class AddVid extends Component {
  state={
    title: "",
    tags: '',
    video_length: "",
    youtube_display_name: "",
    error: null,
  }
  
  errorHandler = err => {
    this.setState({error: err.message})
    setTimeout(()=>this.setState({error: null}), 3000)
  }

  handleSubmit = e =>{
    e.preventDefault();
    const video = {
      title: this.state.title,
      video_length: this.state.video_length,
      youtube_display_name: this.state.youtube_display_name,
      tags: tagStringToArray(this.state.tags),
    }
    const isError = errorCheck(video);
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

const  tagStringToArray = str => {
  const tagsArr = str.split(', ').filter(Boolean);
  if (tagsArr.length > 3){
    tagsArr.length = 3;
    return tagsArr
  }
  return tagsArr;
}

const errorCheck = (video) =>{
  for (let key in video){
    if (key === 'tags'){
      if (video[key][0].trim() === ""){
        return {status: true, message: 'Invalid tags'}
      } 
    } else{
      if (video[key].trim() === ""){
        return {status: true, message: `Invalid ${key}`}
      }
    }
  } 
  return {status: false}
}