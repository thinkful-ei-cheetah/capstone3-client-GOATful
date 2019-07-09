import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import './Icon.css'

export default function Icon(props) {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={props.icon} className="fa-icon" />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  )
}
