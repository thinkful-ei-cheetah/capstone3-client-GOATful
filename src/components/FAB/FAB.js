import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FAB.css'

export default function FAB(props) {
  return (
    <button className='fab' onClick={props.onClick}>
      <FontAwesomeIcon 
        icon={faPlus} 
        className='fab-icon'
        onClick={props.onClick}
      />
    </button>
  )
}
