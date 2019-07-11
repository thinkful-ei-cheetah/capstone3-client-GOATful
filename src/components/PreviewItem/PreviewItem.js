import React from 'react'
import './PreviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default function PreviewItem({ preview, previewClick }) {
  if (previewClick) 
    return (
      <li
        className="preview-tile" 
        key={preview.id}>
        <a
          className='preview-btn'
          onClick={previewClick}
          id={preview.id}
        >
          <img
            id={preview.id}
            src={preview.thumbnail_url}
            alt="preview thumbnail"
          />
        </a>
      </li>
    )
  else {
    return (
      <li 
        className="preview-tile selection-card" 
        key={preview.id}>

        
          <img 
            src={preview.thumbnail_url} 
            alt="preview thumbnail"
            className="preview-thumbnail" />
          <button className="set-active-btn">
            Set Active
          </button>
          <button className="set-active-btn">
          <FontAwesomeIcon className="f-icon" icon={faPencilAlt} />
          </button>
      </li>
    )
  }
}

