import React, { Component } from 'react'

import YoutubeSearchResult from '../../components/YoutubeSearchResult/YoutubeSearchResult'
import YoutubeApiService from '../../services/youtube-api'
import VideoStorage from '../../services/video-storage'
import PreviewControls from '../../components/PreviewControls/PreviewControls'

import MockYoutubeData from '../../Utils/mock-youtube-data'
import pAPI from '../../services/previews-api'

import { shuffle } from '../../Utils/Utils'
import './Preview.css'

export default class Previews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: {},
      vidPreviews: [],
      selectedPrev: null,
      youtubeSearchResults: [],
    }
    this.BASE_URL = 'http://localhost:8000/api'
    this.vidId = this.props.match.params.vidId;
    //? BASE_URL/videos/vidId/previews
  }


  async componentDidMount() {


    // let prevObj = {
    //   video: {
    //     title : 'testVideo', 
    //     active_thumbnail_url: 'https://cf.ltkcdn.net/exercise/images/std/201862-675x450-pushups.jpg' , 
    //     preview_count: 2, 
    //     video_length: '10:01', 
    //     youtube_display_name: 'test user' , 
    //     youtube_url: 'https://www.youtube.com/watch?v=LYpE-heDZgE', 
    //     tags:  ['fitness', 'push-ups', 'exercise'], 
    //     user_id: 1,
    //   }, 
    //   previews: [
    //     {
    //       id: 1,
    //       // created_at: ,
    //       // updated_at: ,
    //       thumbnail_url: 'https://ak5.picdn.net/shutterstock/videos/14428615/thumb/4.jpg',
    //       video_id: 1,
    //       is_active: true,
    //       title: "test 1 (active start)",
    //       description: "Follow our simple workout plan to get in the best shape of your life!"
    //     },
    //     {
    //       id: 2,
    //       // created_at: ,
    //       // updated_at: ,
    //       thumbnail_url: 'http://dream-gym.net/wp-content/uploads/2018/07/459880391.jpg',
    //       video_id: 1,
    //       is_active: false,
    //       title: 'test 2 (inactive start)',
    //       description: "Tired of failing results? Not looking for another fad? Try our push-up program!"
    //     },
    //   ]
    // }

    //? 
    //? grab and set new public_user_video
    //? const prevObj = await axios.get(`${this.BASE_URL}/videos/${this.vidId}/previews`)

    const prevObj = await pAPI.getPreviews(this.vidId)

    console.log(prevObj)

    VideoStorage.saveKey('laconic_current_video', prevObj.video);
    //?----------------------
    const video = JSON.parse(window.localStorage.getItem('laconic_current_video'))
    console.log(video)

    // const results = await pAPI.getPreviews(this.vidId)
    // console.log(results)
    // ? const results = 
    // console.log(results)

    let findSelect = () => {
      let select = null
      if (this.state.selectedPrev !== null) {
        select = this.state.selectedPrev
      } else {
        let temp = prevObj.previews.find(preview => {
          return preview.is_active === true
        })
        if (temp !== undefined) {
          select = temp
        } else {
          select = prevObj.previews[0]
        }
        return select
      }
    }

    let selected = findSelect()

    console.log(selected)
    console.log(prevObj.video)
    console.log([...prevObj.previews])
    this.setState({
      video: prevObj.video,
      vidPreviews: [...prevObj.previews],
      selectedPrev: selected,
      youtubeSearchResults: [...MockYoutubeData]
      //  ? will be in production youtubeSearchResults: [...results],
    })
    console.log(this.state)
  }


  renderPreviews = () => {
    const { selectedPrev, youtubeSearchResults, video } = this.state


    video.title = selectedPrev.title
    video.thumbnail_url = selectedPrev.thumbnail_url

    const videos = [video, ...youtubeSearchResults]
    //? shuffle(videos) goes here
    shuffle(videos)
    return videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i} />
    })
  }

  previewClick = (e) => {
    console.log(e.target.id)

    let selected = this.state.vidPreviews.find(preview => {
      return preview.id == e.target.id
    })


    console.log(selected)
    this.setState({
      selectedPrev: selected
    })
  }

  render() {
    console.log(this.state.selectedPrev)
    return (
      <section>
        <h1>
          vidId: {this.vidId}
        </h1>
        <div className="previewControls">
          <PreviewControls
            prevList={this.state.vidPreviews}
            displayId={this.state.selectedPrev}
            previewClick={this.previewClick}
          />
        </div>
        {(this.state.selectedPrev === null) ? false : this.renderPreviews()}
      </section>
    );
  }
}
