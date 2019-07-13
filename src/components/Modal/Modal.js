import React, {Component} from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
  
const closeBtnStyles = {
  fontSize: '1.7rem',
  margin: '.5rem',
  cursor: 'pointer',
}

export default class Modal extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div className='modal-wrapper'>
          <div className='modal'>
            <div className='modal-close-btn'>
              <FontAwesomeIcon 
                icon={faWindowClose} 
                className='close-btn' 
                style={closeBtnStyles}
                onClick={this.props.closeModal}
              />
            </div>
            <div className='modal-contents'>
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }
    return <></>
  }
}
  