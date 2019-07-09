import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import VideoService from '../services/video-api';

export default class Videos extends Component {

  state = {
    videos: [],
    current: [0, 3], //index of selected videos
  }

  modifyVideo = (id, updates) => {
    const {videos} = this.state;
    const video = videos.find(video => video.id === id);
    console.log(video)
    this.setState({...videos})
  }

  async componentDidMount() {
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  renderVideos(){
    const { videos } = this.state;
    //slice out videos that are needed from state
    const videoList = videos.slice(this.state.current[0], this.state.current[1] + 1)
    return videoList.map(video => <VideoItem modifyVideo={this.modifyVideo} video={video} key={video.id}/>)
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
    console.log(this.state.videos)
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