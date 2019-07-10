import React from 'react';
import './ErrorBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
  
export default function ErrorBar(props) {
  const closeIconStyles = {
    fontSize: '1.7rem',
    margin: '.5rem',
    cursor: 'pointer',
    marginRight: '30px' 
  }

  return (
    <div className='error-bar'>
      { props.appError }
      <FontAwesomeIcon 
        icon={faWindowClose} 
        id='error-bar-btn'
        style={closeIconStyles}
        onClick={props.clearError}
    />
    </div>
  )
}
