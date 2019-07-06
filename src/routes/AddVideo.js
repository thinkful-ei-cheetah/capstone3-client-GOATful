import React, { Component } from 'react'
import AddVideos from '../components/AddVideo/AddVideo';
import VideoStorage from '../services/video-storage'

export default class AddVid extends Component {
  state={
    title: "",
    video_length: "",
    youtube_name: "",
    tags: ""
  }

  handleFields = e => {
    let { value, name } = e.target;
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    const video = {
      title: this.state.title,
      video_length: this.state.video_length,
      youtube_name: this.state.youtube_name,
      tags: this.state.tags
    }
    VideoStorage.saveVideo(video)
    this.props.history.push('/creator')
  }

  render() {
    console.log(this.props)
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

