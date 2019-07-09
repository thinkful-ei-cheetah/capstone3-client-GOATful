import React, {Component} from 'react'
import './CreatorPreview.css'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
// import YoutubeApiService from '../../services/youtube-api'
import mockYoutubeData from '../../Utils/mock-youtube-date'
import { shuffle } from '../../Utils/Utils'
  
export default class CreatorPreview extends Component {
  state = {
    userPreview: {},
    youtubeSearchResults: [],
    userVideo: {},
    videos: []
  }

  async componentDidMount() {
    const video = JSON.parse(window.localStorage.getItem('public_user_video'))
    // const results = await YoutubeApiService.search(video.tags)
    const results = mockYoutubeData

    this.props.userPreview.youtube_display_name = video.youtube_display_name
    this.props.userPreview.video_length = video.video_length
    
    this.setState({
      userPreview: this.props.userPreview,
      youtubeSearchResults: [...results],
      userVideo: {...video},
      videos: [this.props.userPreview, ...results]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userPreview !== prevProps.userPreview) {
      const video = this.state.userVideo
      this.props.userPreview.youtube_display_name = video.youtube_display_name
      this.props.userPreview.video_length = video.video_length

      this.setState({
        userPreview: this.props.userPreview,
        videos: [this.props.userPreview, ...this.state.youtubeSearchResults]
      })
    }
  }

  renderPreviews = () => {
    return this.state.videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i}/>
    })
  }

  renderShuffledPreviews = () => {
    this.setState({
      videos: [...shuffle(this.state.videos)]
    })
  }

  render() {
    return (
      <div className='creator-preview'>
        <h2>How Your Video Will Look</h2>
        <div className='preview-controls'>
        <select>
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
        </select>
        <button className='button' onClick={this.renderShuffledPreviews}>Randomize</button>
        </div>
        
        {this.renderPreviews()}
      </div>
    )
  }
}