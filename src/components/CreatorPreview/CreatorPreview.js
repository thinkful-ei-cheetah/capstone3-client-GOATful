import React, {Component} from 'react'
import './CreatorPreview.css'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import DesktopViewPage from '../DesktopViewPage/DesktopViewPage'
import MobileViewPage from '../MobileViewPage/MobileViewPage'
import YoutubeApiService from '../../services/youtube-api'
import mockYoutubeData from '../../Utils/mock-youtube-date'
import { shuffle } from '../../Utils/Utils'
import VideoStorage from '../../services/video-storage'
import { withUserContext } from '../../contexts/UserContext';
import { withAppContext } from '../../contexts/AppContext';
import VideoApi from '../../services/video-api';
  
class CreatorPreview extends Component {
  state = {
    userPreview: {},
    youtubeSearchResults: [],
    userVideo: {},
    videos: [],
    isDesktopView: true
  }

  async componentDidMount() {
    let video;
    if (this.props.userContext.user.id) {
      video = VideoStorage.getVideo('laconic_current_video')
    } else {
      video = VideoStorage.getVideo('public_user_video')
    }
    
    let youtubeSearchResults;
    try {
      youtubeSearchResults = video.id ? await VideoApi.getYoutubeSearchResults(video.id) : []
      if (!youtubeSearchResults.length) {
        youtubeSearchResults = await YoutubeApiService.search(video.tags)
        if (video.id) await VideoApi.postYoutubeSearchResults(video.id, youtubeSearchResults)
      }
    } catch(err) {
      youtubeSearchResults = mockYoutubeData
    }
      
    this.props.userPreview.youtube_display_name = video.youtube_display_name
    this.props.userPreview.video_length = video.video_length
    
    this.setState({
      userPreview: this.props.userPreview,
      youtubeSearchResults: [...youtubeSearchResults],
      userVideo: {...video},
      videos: [this.props.userPreview, ...youtubeSearchResults]
    }, this.props.setLoading(false))
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
    // check to see if browser is mobile (only mobile browsers have window.orientation)
    function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    // If value is mobile, change isDesktopView to false -> mobile view
    let desktopOrMobile
    if (ev.nativeEvent.target[index].text === 'Desktop' && isMobileDevice() === false) {
      desktopOrMobile = true
    } else {
      desktopOrMobile = false
    }
    this.setState({ isDesktopView: desktopOrMobile })
  }

  render() {
    const { isDesktopView, videos } = this.state
    return (
      <div className='creator-preview' id='creator-preview'>
        <h2>How Your Video Will Look</h2>
        <div className='preview-controls'>
          <select className="device-selector" onChange={ev => this.handleViewChange(ev)}>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </select>
          <button className='randomize button' onClick={this.renderShuffledPreviews}>Randomize</button>
        </div>
        {isDesktopView ? <DesktopViewPage videos={videos}/> : <MobileViewPage videos={videos} />}
      </div>
    )
  }
}

export default withUserContext(withAppContext(CreatorPreview))