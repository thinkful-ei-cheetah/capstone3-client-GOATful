import React, { Component } from 'react'
import Modal from 'react-modal';
import AddVideoForm from '../AddVideoForm/AddVideoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import VideoStorage from '../../services/video-storage';
import VideoService from '../../services/video-api';
import '../ModalStyling/ModalStyling.css'
import { 
  checkTime,
  tagStringToArray,
  errorCheckNewVideo,
  formatDuration
} from '../../Utils/Utils'

//Allow modal overlay to cover fab button
Modal.defaultStyles.overlay.zIndex = '2';

// Fix for React Modal testing

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default class VideoModalForm extends Component {
  state = {
    title: this.setTitle(),
    tags: this.setTags(),
    video_length: this.setVideoLength(),
    youtube_display_name: this.setYoutubeDisplayName(),
    addError: '',
  }

  setTitle() {
    if (this.props.action === 'edit') return this.props.video.title
    return ''
  }

  setTags() {
    if (this.props.action === 'edit') return this.props.video.tags
    return ''
  }

  setVideoLength() {
    if (this.props.action === 'edit') return formatDuration(this.props.video.video_length)
    return ''
  }

  setYoutubeDisplayName() {
    if (this.props.action === 'edit') return this.props.video.youtube_display_name
    return ''
  }

  handleFields = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {title, video_length, youtube_display_name, tags} = this.state
    
    const checkedTime = checkTime(video_length);
    if (checkedTime.error){
      this.addErrorHandler(checkedTime)
      return;
    }

    const video = {
      title,
      youtube_display_name,
      video_length: checkedTime.googleTimeString,
      tags: Array.isArray(tags) ? tags : tagStringToArray(tags),
    }

    const isError = errorCheckNewVideo(video);
    if (isError.status === true){
      this.addErrorHandler(isError)
      return
    }
    try {
      if (this.props.action === 'new') {
        const createdVideo = await VideoService.postVideo(video);
        VideoStorage.saveKey('laconic_current_video', createdVideo)
        this.props.history.push('/creator')
      } else {
        await VideoService.patchVideo(this.props.video.id, video)
        this.props.getVideoList(true)
      }
    } catch(e){
      this.addErrorHandler(e)
    }
  }

  addErrorHandler(err) {
    this.setState({addError: err.error || err.message})
  }

  renderFormTitle = () => {
    if (this.props.action === 'edit') return 'Edit Video Project'
    return 'Add Video Project'
  }

  render() {
    return (
      <Modal className="Modal"
      isOpen={this.props.isOpen}
      onRequestClose={this.props.onRequestClose}
      // style={modalStyles}
      contentLabel={'Video Modal Form'}
      closeTimeoutMS={200}
        >
          <h2 className="add-video-header">{this.renderFormTitle()}</h2>
          <span className='close-modal-btn' onClick={this.props.onRequestClose}>
            <FontAwesomeIcon 
              icon={faWindowClose}
            />
          </span>
          <AddVideoForm
            fields={{...this.state}}
            handleFields={this.handleFields}
            handleSubmit={this.handleSubmit}
            action={this.props.action}
          />
      </Modal>
    )
  }
}
