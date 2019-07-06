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
    //not sure why validation below didnt work
    // if(name === 'tags'){
    //   value = checkTags(value);
    //   }
    
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
    //redirect to creator page
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

const checkTags = value => {
  let commaCount = 0;
  let newValue;

  const lastChar = value.substr(value.length - 1);
      if (lastChar === " "){
        console.log(lastChar)
        const secondLast = value.substr(value.length - 2, value.length - 1);
        console.log(value)
        if (secondLast !== ','){
        
          newValue =  value.slice(0, value.length - 1) + ', '
        }
      }
      console.log(newValue)
      for(let char in value){
        if (char === ','){
          commaCount++
        }
        if(commaCount > 2)
        return value.slice(0, value.length - 1)
      }
      return newValue;
}