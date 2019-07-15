import React, { Component } from 'react'
import Modal from 'react-modal';
import AddVideos from '../AddVideo/AddVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const modalStyles = {
  content : {
    maxWidth              : '80%',
    width                 : '350px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

export class AddVideoModal extends Component {
  render() {
    return (
      <Modal
      isOpen={this.props.isOpen}
      onRequestClose={this.props.onRequestClose}
      style={modalStyles}
      contentLabel={'Add New Video Form'}
      closeTimeoutMS={200}
        >
          <h2 className="add-video-header">Add New Video Project</h2>
          <span className='close-modal-btn' onClick={this.props.onRequestClose}>
            <FontAwesomeIcon 
              icon={faWindowClose}
            />
          </span>
          <AddVideos
            fields={this.props.fields}
            handleFields={this.props.handleFields}
            handleSubmit={this.props.handleSubmit}
          />
      </Modal>
    )
  }
}

export default AddVideoModal
