import React from 'react'
import {Link} from 'react-router-dom';
import './PreviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default function PreviewItem({ preview, previewClick, editClick  }) {
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
          <Link to="/creator?edit=true" className="edit-link" onClick={editClick} >
            <FontAwesomeIcon className="pencil-f-icon" icon={faPencilAlt} />
          </Link>
          <button className="set-active-btn">
            Set Active
          </button>
      </li>
    )
  }
}

