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
    console.log(window.mobileCheck)
    // Get option value from select menu
    let index = ev.nativeEvent.target.selectedIndex
    // check to see if browser is mobile 
    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    // If value is mobile, change isDesktopView to false -> mobile view
    let desktopOrMobile
    if (ev.nativeEvent.target[index].text === 'Desktop' && window.mobilecheck === false) {
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