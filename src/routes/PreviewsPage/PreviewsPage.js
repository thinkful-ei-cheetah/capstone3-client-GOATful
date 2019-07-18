import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import VideoStorage from '../../services/video-storage'
import PreviewControls from '../../components/PreviewControls/PreviewControls'
import PreviewsApi from '../../services/previews-api'
import './PreviewsPage.css'
import { withAppContext } from '../../contexts/AppContext';
import CreatorPreview from '../../components/CreatorPreview/CreatorPreview'
import FAB from '../../components/FAB/FAB'
import YoutubeApiService from '../../services/youtube-api'
import mockYoutubeData from '../../Utils/mock-youtube-date'
import VideoApi from '../../services/video-api'

class Previews extends Component {
  static defaultProps = {
    match: {
      params: {
        video_id: 0
      }
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      video: {},
      vidPreviews: [],
      activePrev:{},
      selectedPrev: null,
      userPreview: {},
      youtubeSearchResults: [],
      isLoading: true,
      isAdd:false,
    }
    this.vidId = Number(this.props.match.params.video_id);
  }

  findSelect = (prevObj) => {
    let select = false
    let active = this.findActive(prevObj)
    if (active !== false) {
      select = active
    } else {
      select = prevObj.previews[0]
    }
    return select
  }

  findActive = (prevObj) => {
    let active = false;
    let temp = prevObj.previews.find(preview => {
      return preview.is_active === true
    })
    if (temp !== undefined) {
      active = temp
    } else {
      active = false
    }
    return active
  }

  async componentDidMount() {
    try {
      const prevObj = await PreviewsApi.getPreviews(this.vidId)
      VideoStorage.saveKey('laconic_current_video', prevObj.video);
      let activePreview = this.findActive(prevObj);
      let selected = this.findSelect(prevObj);
      let previews = [...prevObj.previews]
      if(activePreview){
        let activeIndex = previews.findIndex((prev) => {
          return prev.is_active;
        })
        let activePreview = previews[activeIndex]
        previews[activeIndex] = previews[0]
        previews[0] = activePreview
      }

      let youtubeSearchResults;
      try {
        youtubeSearchResults = await VideoApi.getYoutubeSearchResults(this.vidId)
        if (!youtubeSearchResults.length) {
          youtubeSearchResults = await YoutubeApiService.search(prevObj.video.tags)
          await VideoApi.postYoutubeSearchResults(this.vidId, youtubeSearchResults)
        }
      } catch(err) {
        youtubeSearchResults = mockYoutubeData
      }
      this.setState({
        video: prevObj.video,
        vidPreviews: previews,
        activePrev: activePreview,
        selectedPrev: selected,
        youtubeSearchResults: youtubeSearchResults,
        isLoading: false
      })
    } catch(err) {
      this.setState({isLoading: false}, this.props.appContext.setAppError(`An error occurred while trying to load your video previews, the server responded with: ${err.message}`))
    }
  }

  renderPreviews = () => {
    const { selectedPrev, video } = this.state
    video.title = selectedPrev.title
    video.thumbnail_url = selectedPrev.thumbnail_url
    video.description = selectedPrev.description

    return <CreatorPreview userPreview={{ ...video }} setLoading={() => {}}/>
  }

  previewClick = (e) => {
    e.preventDefault();
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
    this.setState({isLoading: true})
    try {
      await PreviewsApi.deletePreview(parseInt(this.vidId), this.state.selectedPrev.id)
      const updatedPreviews = await PreviewsApi.getPreviews(this.vidId)
      if (updatedPreviews.previews.length === 0) {
        this.props.history.push('/creator')
      } else {
        const selected = this.findSelect(updatedPreviews)
        this.setState({
          selectedPrev: selected,
          vidPreviews: updatedPreviews.previews,
          isLoading: false
        })
      }
    } catch (error) {
      this.setState({isLoading: false}, this.props.appContext.setAppError(`An error occurred while trying to delete your video preview - the server responded with: ${error.message}`))
    }
  }

  handleFab = () => {
    this.setState({
      isAdd: true
    })
  }

  handleTouchStart = () => {
    document.body.style.overflow = 'auto';
  }

  handleSetActive = async () => {
    let preview = {...this.state.selectedPrev};
    preview.is_active = true;
    preview.changeActive = true;
    await PreviewsApi.patchPreview(this.vidId, preview)

    this.setState({
      activePrev: {...preview}
    })
  }

  render() {
    return (
      <section className="previews-page page">
        <FAB onClick={this.handleFab} />
        <PreviewControls
          prevList={this.state.vidPreviews}
          selected={this.state.selectedPrev}
          activePrev={this.state.activePrev}
          previewClick={this.previewClick}
          editClick={this.editClick}
          delClick={this.delClick}
          setActive={this.handleSetActive}
        />
        <div className="previews-display-section" onTouchStart={this.handleTouchStart}>
          {(this.state.selectedPrev === null) ? false : this.renderPreviews()}
        </div>
        {(this.state.isAdd)? <Redirect to='/creator' />: false}
      </section>
    );
  }
}

export default withAppContext(Previews)