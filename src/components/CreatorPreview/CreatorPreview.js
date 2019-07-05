import React, {Component} from 'react'
import './CreatorPreview.css'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import YoutubeApiService from '../../services/youtube-api'
  
export default class CreatorPreview extends Component {
  state = {
    userPreview: {},
    youtubeSearchResults: [],
    userVideo: {}
  }

  async componentDidMount() {
    const video = JSON.parse(window.localStorage.getItem('public_user_video'))
    const results = await YoutubeApiService.search(video.tags)
    this.setState({
      userPreview: this.props.userPreview,
      youtubeSearchResults: [...results],
      userVideo: {...video}
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userPreview !== prevProps.userPreview) {
      this.setState({
        userPreview: this.props.userPreview
      })
    }
  }

  renderPreviews = () => {
    const {userPreview, youtubeSearchResults, userVideo} = this.state
    userPreview.youtube_display_name = userVideo.youtube_display_name
    userPreview.video_length = userVideo.video_length
    const videos = [userPreview, ...youtubeSearchResults]
    return videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i}/>
    })
  }

  render() {
    return (
      <div className='creator-preview'>
        <h2>How Your Video Will Look</h2>
        <div className='preview-controls'>
        <select>
          <option value="desktop">Desktop</option>
          <option value="iphone">iPhone</option>
          <option value="android">Android</option>
        </select>
        <button className='button'>Randomize</button>
        </div>
        
        {this.renderPreviews()}
      </div>
    )
  }
}
  
// const videoData = {
//   title: 'My first test video',
//   tags: ['coding', 'interview', 'algorithm'],
//   youtube_display_name: 'Byte By Byte',
//   video_length: '8:56'
// }
// window.localStorage.setItem('public_user_video', JSON.stringify(videoData))