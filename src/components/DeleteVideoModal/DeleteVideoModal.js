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
Modal.setAppElement('#root')

export default class DeleteVideoModal extends Component {
  render() {
    return (
      <Modal
      isOpen={this.props.isOpen}
      onRequestClose={this.props.onRequestClose}
      style={modalStyles}
      contentLabel={'Delete Video'}
      closeTimeoutMS={200}
        >
          <h2 className="add-video-header">Are you sure?</h2>
          <p>Delete {this.props.fields.title}?</p>

          <p>{this.props.previewCount ? 
            this.props.previewCount === 1 ? `1 preview will also be deleted.` : `${this.props.previewCount} previews will also be deleted.` : '' }</p>
         
         <span className='close-modal-btn' onClick={this.props.onRequestClose}>
            <FontAwesomeIcon 
              icon={faWindowClose}
            />
          </span>
          <div className= "button-controls">
            <button className="cancel" onClick={this.props.onRequestClose}>Cancel</button>
            <button className="confirm" onClick={this.props.handleConfirm}>Delete</button>
          </div>
      </Modal>
    )
  }
}
