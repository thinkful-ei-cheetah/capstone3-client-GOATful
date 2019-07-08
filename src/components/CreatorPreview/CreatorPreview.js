import React, {Component} from 'react'
import './CreatorPreview.css'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import YoutubeApiService from '../../services/youtube-api'
import mockData from '../../Utils/mock-youtube-data'
  
export default class CreatorPreview extends Component {
  state = {
    userPreview: {},
    youtubeSearchResults: mockData || [],
    userVideo: {}
  }

  async componentDidMount() {
    const video = JSON.parse(window.localStorage.getItem('public_user_video'))
    const results = await YoutubeApiService.search(video.tags)
    console.log(results)
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