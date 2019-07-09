import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import VideoService from '../services/video-api';

export default class Videos extends Component {

  state = {
    videos: [],
    current: [0, 3], //index of selected videos
  }

  async componentDidMount() {
    const videos = await VideoService.getVideos();
    this.setState({ videos })
  }

  renderVideos(){
    const { videos } = this.state;
    //slice out vides that are needed from state
    const videoList = videos.slice(this.state.current[0], this.state.current[1] + 1)
    return videoList.map(video => <VideoItem video={video} key={video.id}/>)
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