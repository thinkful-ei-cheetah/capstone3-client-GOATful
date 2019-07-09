import React, { Component } from 'react'
import axios from 'axios'
import VideoItem from '../components/VideoItem/VideoItem'
import './Videos.css'
import VideoApi from '../services/video-preview-api'

export default class Videos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      current: null
    }
    this.BASE_URL = 'http://localhost:8000/api'
  }
  async componentDidMount() {
    const videos = await axios.get(`${this.BASE_URL}/videos`)
    this.setState({ videos: videos.data })
    const data = await VideoApi.getVideos()
    console.log(data)
  }

  

  renderVideos(){
    const { videos } = this.state
    if(videos) {
        let videoList = [];
        for (let i = 0; i < 4; i++) {
            videoList.push(videos[this.state.current+i])
        }
        return videoList.map((video, idx) => {
          return (
            <VideoItem video={video} key={idx}/>
          )
      })
    }
  }
  nextVideo() {
    const { videos } = this.state
    if (videos[this.state.current+3]) {
        this.setState({
            current:this.state.current + 1
        })
    }
  }

  previousVideo(){
    const { videos } = this.state
    if (videos[this.state.current - 1]) {
        this.setState({
            current: this.state.current - 1
        })
    }
  }

  render() {

    return (
      <section className='videos-page'>
        <div className="btn-container">
          <button type="button" onClick ={(ev) => {
              ev.preventDefault()
              this.previousVideo()
          }}>Previous</button>
          <button type="button" onClick ={(ev) => {
              ev.preventDefault()
              this.nextVideo()
          }}>Next</button>
        </div>
        <div className='my-videos-container'>
        {this.renderVideos()}
        </div>
      </section>
    );
  }
}