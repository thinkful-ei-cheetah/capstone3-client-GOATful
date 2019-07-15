import React, { Component } from 'react'
import YoutubeSearchResult from '../../components/YoutubeSearchResult/YoutubeSearchResult'
import VideoStorage from '../../services/video-storage'
import PreviewControls from '../../components/PreviewControls/PreviewControls'
import MockYoutubeData from '../../Utils/mock-youtube-date'
import pAPI from '../../services/previews-api'
import './Previews.css'
import YoutubeApi from '../../services/youtube-api'
export default class Previews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: {},
      vidPreviews: [],
      selectedPrev: null,
      youtubeSearchResults: [],
    }
    this.vidId = this.props.match.params.video_id;
  }

  findSelect = (prevObj) => {
    let select = null
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
  async componentDidMount() {
    const prevObj = await pAPI.getPreviews(this.vidId)
    VideoStorage.saveKey('laconic_current_video', prevObj.video);
    let selected = this.findSelect(prevObj)
    // const results = await YoutubeApi.search(prevObj.video.tags)
    const results = MockYoutubeData

    this.setState({
      video: prevObj.video,
      vidPreviews: [...prevObj.previews],
      selectedPrev: selected,
      youtubeSearchResults: [...results]
    })

  }


  renderPreviews = () => {
    console.log(this.state)
    const { selectedPrev, youtubeSearchResults, video } = this.state
    video.title = selectedPrev.title
    video.thumbnail_url = selectedPrev.thumbnail_url
    video.description = selectedPrev.description

    const videos = [video, ...youtubeSearchResults]

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

  editClick = (e) => {
    VideoStorage.saveKey('laconic_current_preview', { ...this.state.selectedPrev })
  }

  delClick = async () => {
    console.log(this.props)
    try {
      await pAPI.deletePreview(parseInt(this.vidId), this.state.selectedPrev.id)
      const updatedPreviews = await pAPI.getPreviews(this.vidId)
      if (updatedPreviews.previews.length === 0) {
        this.props.history.push('/creator')
      } else {
        const selected = this.findSelect(updatedPreviews)
        console.log(selected)
        this.setState({
          selectedPrev: selected,
          vidPreviews: updatedPreviews.previews,

        })
      }
    } catch (error) {
      console.log(error)
    }
  }




  render() {
    return (
      <section className="previews-page">
        <PreviewControls
          prevList={this.state.vidPreviews}
          selected={this.state.selectedPrev}
          previewClick={this.previewClick}
          editClick={this.editClick}
          delClick={this.delClick}
        />
        <div className="previews-display-section">
          {(this.state.selectedPrev === null) ? false : this.renderPreviews()}
        </div>
      </section>
    );
  }
}
