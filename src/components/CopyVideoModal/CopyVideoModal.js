import React, {Component} from 'react';
import Modal from 'react-modal';
import './CopyVideoModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import PreviewsApi from '../../services/previews-api';


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
  
export default class CopyVideoModal extends Component {
  static defaultProps = {
    video: {},
    isOpen: false,
    onRequestClose: () => {}
  }

  state = {
    activePreview: {tags: []},
    error: null
  }

  getActivePreview = async () => {
    const { video } = this.props
    try {
      const activePreview = await PreviewsApi.getActivePreview(video.id)
      activePreview.youtube_display_name = video.youtube_display_name
      activePreview.tags = video.tags
      this.setState({activePreview})
    } catch(err) {
      this.setState({error: err.message})
    }
  }

  renderCopyableFields = (activePreview) => {
    if (this.state.error) {
      return (
        <div className='error'>
          An error occurred while fetching your currently active video. <p>The server responded with: {this.state.error}</p>
        </div>
      )
    } else {
      return (
        <>
          <h2 className="add-video-header">Your Current Active Video</h2>
          <div className='copy-video-modal'>
            <div className='field-group'>
              <h3>Title</h3>
              <div className='copy-wrapper'>
                <div className='copy-field'>{activePreview.title}</div>
                <CopyToClipboard text={activePreview.title}>
                  <FontAwesomeIcon className="f-icon" icon={faCopy} />
                </CopyToClipboard>
              </div>
            </div>
            <div className='field-group'>
              <h3>Description</h3>
              <div className='copy-wrapper'>
                <div className='copy-field'>{activePreview.description}</div>
                <CopyToClipboard text={activePreview.description}>
                  <FontAwesomeIcon className="f-icon" icon={faCopy} />
                </CopyToClipboard>
              </div>
            </div>
            <div className='field-group'>
              <h3>Youtube Display Name</h3>
              <div className='copy-wrapper'>
                <div className='copy-field'>{activePreview.youtube_display_name}</div>
                <CopyToClipboard text={activePreview.youtube_display_name}>
                  <FontAwesomeIcon className="f-icon" icon={faCopy} />
                </CopyToClipboard>
              </div>
            </div>
            <div className='field-group'>
              <h3>Tags</h3>
              <div className='copy-wrapper'>
                <div className='copy-field'>{activePreview.tags.join(', ')}</div>
                <CopyToClipboard text={activePreview.tags.join(', ')}>
                  <FontAwesomeIcon className="f-icon" icon={faCopy} />
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  render() {
    const { activePreview } = this.state
    
    return (
      <Modal
        isOpen={this.props.isOpen}
        onAfterOpen={this.getActivePreview}
        onRequestClose={this.props.onRequestClose}
        style={modalStyles}
        contentLabel={'Copy Video Data'}
        closeTimeoutMS={200}
      >
        {this.renderCopyableFields(activePreview)}
        <span className='close-modal-btn' onClick={this.props.onRequestClose}>
          <FontAwesomeIcon icon={faWindowClose}/>
        </span>
      </Modal>
    )
  }
}
  