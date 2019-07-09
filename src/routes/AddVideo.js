import React, { Component } from 'react'
import AddVideos from '../components/AddVideo/AddVideo';
import VideoStorage from '../services/video-storage'

export default class AddVid extends Component {
  state={
    title: "",
    tags: '',
    video_length: "",
    youtube_name: "",
    error: null,
  }
  
  errorHandler = err => {
    this.setState({error: err.message})
    setTimeout(()=>this.setState({error: null}), 3000)
  }

  handleSubmit = e =>{
    e.preventDefault();
    const validatedTime = checkTime(this.state.video_length)
    if (validatedTime.message){
      this.errorHandler(validatedTime)
      return
    }
    const video = {
      title: this.state.title,
      video_length: validatedTime.formattedTime,
      youtube_name: this.state.youtube_name,
      tags: tagStringToArray(this.state.tags),
    }
    const isError = errorCheck(video);
    if (isError.status === true){
      this.errorHandler(isError)
      return
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

const checkTime = timeStr => {
  const strLength = timeStr.length;
  const allowedFormat = /^\d{2}:\d{2}(:\d{2})?$/;
  const isLegit = allowedFormat.test(timeStr)
  if(!isLegit){
    return { message: 'Invalid format. Please enter time in the format hh:mm:ss or mm:ss'
    }
  }
  const problem = { message: ''}
  let hrs;
  const secs = timeStr.substr(strLength - 2);
  const mins = timeStr.substr(strLength - 5, 2);
  if (timeStr.length > 5){
    hrs = timeStr.substr(0, 2);
    if (hrs > 12){
      problem.message = 'YouTube videos cannot be longer than 12 hours'
      return problem;
    } else if (Number(hrs) === 12){
      if (mins !== '00' || secs !== '00'){
      problem.message = 'YouTube videos cannot be longer than 12 hours';
      return problem;
      }
    } 
  } else if(Number(mins) > 59 || Number(secs) > 59){
    problem.message = 'Invalid time format.'
    return problem;
  }
  let google_hours, google_mins, google_secs
  if(hrs){
    google_hours = hrs === '00' ? null : hrs[0] === '0' ? hrs[1] : hrs;
  }
  google_mins = mins === '00' ? null : mins[0] === '0' ? mins[1] : mins;
  google_secs = secs === '00' ? null : secs[0] === '0' ? secs[1] : secs;

  return {formattedTime: `PT${google_hours ? google_hours +'H' : ''}${google_mins ? google_mins +'M' : ''}${google_secs ? google_secs +'S' : ''}`}
}