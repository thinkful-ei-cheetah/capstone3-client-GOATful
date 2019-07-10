import React from 'react'
import './PreviewItem.css'

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
        className="preview-tile" 
        key={preview.id}>
        <img 
          src={preview.thumbnail_url} 
          alt="preview thumbnail"
          className="preview-thumbnail" />
        <button className="set-active-btn">
          Set Active
        </button>
      </li>
    )
  }
}

