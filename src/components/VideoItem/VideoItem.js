import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './VideoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import VideoStorage from '../../services/video-storage';
import DeleteVideoModal from '../../components/DeleteVideoModal/DeleteVideoModal'
import VideoModalForm from '../VideoModalForm/VideoModalForm'

class VideoItem extends Component {
  static defaultProps = {
    video: {
      active_thumbnail_url: 'https://picsum.photos/',
      title: '',
      tags: [],
      is_active: false,
      preview_count: 0,
      video_length: '00:00',
      youtube_display_name: '',
      youtube_url: '',
      updated_at: '',
      created_at: ''
    }
  }

  state = {
    editModalIsOpen: false,
    deleteModalIsOpen: false,
  }

  closeEditModal = () => {
    this.setState({editModalIsOpen: false})
  }

  openEditModal = () => {
    this.setState({editModalIsOpen: true})
  }

  closeDeleteModal = () => {
    this.setState({deleteModalIsOpen: false})
  }

  openDeleteModal = () => {
    this.setState({deleteModalIsOpen: true})
  }

  handleDelete = () => {
    this.setState({deleteModalIsOpen: false})
    this.props.deleteVideo(this.props.video.id)
  }

  redirectToPreviewsOrCreator = () => {
    const {video, history} = this.props
    VideoStorage.saveKey('laconic_current_video', video)
    if (video.preview_count > 0) {
      history.push(`/videos/${video.id}/previews`)
    } else {
      history.push('/creator')
    }
  }

  render() {
    const {video} = this.props
    return (
      <div className='video-item'>
        <div className="image-section">
        
        <button className="edit-video-btn" onClick={this.openEditModal}>
          <FontAwesomeIcon className="f-icon" icon={faPencilAlt} />
        </button>
        <button className="delete-video-btn" onClick={this.openDeleteModal}>
          <FontAwesomeIcon className="f-icon" icon={faTrashAlt} />
        </button>
  
        <VideoModalForm
          video={video}
          isOpen={this.state.editModalIsOpen}
          onRequestClose={this.closeEditModal}
          action='edit'
          getVideoList={this.props.getVideoList}
        />
        <DeleteVideoModal
          video={video}
          handleDelete={this.handleDelete}
          isOpen={this.state.deleteModalIsOpen}
          onRequestClose={this.closeDeleteModal}
        />
  
        <input type="image" src={video.active_thumbnail_url || 'https://picsum.photos/300/200'} alt={`Thumbnail of ${video.title}`} onClick={this.redirectToPreviewsOrCreator}/>
        </div>
        <h2>{video.title}</h2>
        <p>{`Previews: ${video.preview_count}`}</p>
      </div>
    )
  }
}

export default withRouter(VideoItem)


