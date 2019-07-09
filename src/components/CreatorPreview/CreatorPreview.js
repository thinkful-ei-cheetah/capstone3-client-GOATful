import React, {Component} from 'react'
import './CreatorPreview.css'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import DesktopViewPage from '../DesktopViewPage/DesktopViewPage'
import MobileViewPage from '../MobileViewPage/MobileViewPage'
// import YoutubeApiService from '../../services/youtube-api'
import mockYoutubeData from '../../Utils/mock-youtube-date'
import { shuffle } from '../../Utils/Utils'
  
export default class CreatorPreview extends Component {
  state = {
    userPreview: {},
    youtubeSearchResults: [],
    userVideo: {},
    videos: [],
    isDesktopView: true
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

  handleViewChange = ev => {
    // Get option value from select menu
    let index = ev.nativeEvent.target.selectedIndex
    // If value is mobile, change isDesktopView to false -> mobile view
    let desktopOrMobile = ev.nativeEvent.target[index].text === 'Desktop' ? true : false
    this.setState({ isDesktopView: desktopOrMobile })
  }

  render() {
    const { isDesktopView, videos } = this.state
    return (
      <div className='creator-preview'>
        <h2>How Your Video Will Look</h2>
        <div className='preview-controls'>
        <select onChange={ev => this.handleViewChange(ev)}>
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
        </select>
        <button className='button' onClick={this.renderShuffledPreviews}>Randomize</button>
        </div>
        {isDesktopView ? <DesktopViewPage videos={videos}/> : <MobileViewPage videos={videos} />}
      </div>
    )
  }
}