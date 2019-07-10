import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import VideoService from '../services/video-api';
import {checkTime, tagStringToArray, errorCheckNewVideo } from '../Utils/Utils'

export default class Videos extends Component {

  state = {
    videos: [],
    current: [0, 3], //index of selected videos
  }


  async componentDidMount() {
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  async updateSelectedVideo (id, updates) {
    await VideoService.patchVideo(id, updates)   
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  handleFormSubmission = (id, values) => {
    const checkedTime = checkTime(values.video_length);
    if (checkedTime.message){
      this.errorHandler(checkedTime)
      return;
    }
    const updateVideo = {
      title: values.title,
      video_length: checkedTime.formattedTime,
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

  

  renderVideos(){
    const { videos } = this.state;
    //slice out videos that are needed from state
    const videoList = videos.slice(this.state.current[0], this.state.current[1] + 1)
    return videoList.map(video => <VideoItem 
      handleFormSubmission ={this.handleFormSubmission}
      video={video} 
      key={video.id}
      />)
  }
  //show next four
  showNextFourVideos = e => {
      if(this.state.current === 0) { return }
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

  render() {
    return (
      <section className='videos-page'>
        <div className="btn-container">
      
          <button type="button" disabled={!this.state.current[0]} onClick ={this.showLastFourVideos}>Previous</button>
          <button type="button" onClick ={this.showNextFourVideos}>Next</button>
        </div>
        <div className='my-videos-container'>
        {this.state.videos.length ? this.renderVideos() : ''}
        </div>
      </section>
    );
  }
}