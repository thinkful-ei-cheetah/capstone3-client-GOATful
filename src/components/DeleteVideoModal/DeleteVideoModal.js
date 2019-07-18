import React, { Component } from 'react'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import './DeleteVideoModal.css'

const modalStyles = {
  content : {
    maxWidth              : '40%',
    width                 : '300px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Fix for React Modal testing
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default class DeleteVideoModal extends Component {
  static defaultProps = {
    video: {},
    isOpen: false,
    onRequestClose: () => {},
    handleDelete: () => {}
  }
  
  renderPreviewCount = (video) => {
    if (video.preview_count > 0) {
      return video.preview_count === 1 ? `1 preview will also be deleted.` : `${video.preview_count} previews will also be deleted.`
    }
    return <p className='blank-space-delete'></p>
  }

  render() {
    const {video} = this.props
    return (
      <Modal className="delete-video-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={modalStyles}
        contentLabel={'Delete Video'}
        closeTimeoutMS={200}
      >
        <h2 className="delete-video-header">Are you sure?</h2>
        <p>Delete {video.title}?</p>
        <p>{this.renderPreviewCount(video)}</p>
        
        <span className='close-modal-btn' onClick={this.props.onRequestClose}>
          <FontAwesomeIcon 
            icon={faWindowClose} 
          />
        </span>
        <div className= "delete-button-controls">
          <button className="cancel-btn" onClick={this.props.onRequestClose}>Cancel</button>
          <button className="confirm-btn" onClick={this.props.handleDelete}>Delete</button>
        </div>
      </Modal>
    )
  }
}
