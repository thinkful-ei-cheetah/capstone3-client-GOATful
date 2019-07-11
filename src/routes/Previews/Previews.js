import React, { Component } from 'react'

import YoutubeSearchResult from '../../components/YoutubeSearchResult/YoutubeSearchResult'
// import YoutubeApiService from '../../services/youtube-api'
import VideoStorage from '../../services/video-storage'
import PreviewControls from '../../components/PreviewControls/PreviewControls'

import MockYoutubeData from '../../Utils/mock-youtube-date'
import pAPI from '../../services/previews-api'

import { shuffle } from '../../Utils/Utils'
import './Previews.css'

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
    this.vidId = this.props.match.params.video_id;
  }


  async componentDidMount() {

    const prevObj = await pAPI.getPreviews(this.vidId)
    console.log(prevObj)

    VideoStorage.saveKey('laconic_current_video', prevObj.video);

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

        // const results = await YoutubeApiService.search(video.tags)
        const results = MockYoutubeData

    this.setState({
      video: prevObj.video,
      vidPreviews: [...prevObj.previews],
      selectedPrev: selected,
      youtubeSearchResults: [...results]
    })
    console.log(this.state)
  }


  renderPreviews = () => {
    const { selectedPrev, youtubeSearchResults, video } = this.state
    video.title = selectedPrev.title
    video.thumbnail_url = selectedPrev.thumbnail_url
    video.description = selectedPrev.description

    const videos = [video, ...youtubeSearchResults]
    // shuffle(videos)
    
    return videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i} />
    })
  }

  previewClick = (e) => {
    let selected = this.state.vidPreviews.find(preview => {
      return preview.id === parseInt(e.target.id)
    })
    this.setState({
      selectedPrev: selected
    })
  }

  render() {
    console.log(this.state.selectedPrev)
    return (
      <section className="previews-page">
        {/* <h1>
          vidId: {this.vidId}
        </h1> */}
        <PreviewControls
          prevList={this.state.vidPreviews}
          selected={this.state.selectedPrev}
          previewClick={this.previewClick}
        />
        <div className="previews-display-section">
         {(this.state.selectedPrev === null) ? false : this.renderPreviews()}
        </div>
      </section>
    );
  }
}
