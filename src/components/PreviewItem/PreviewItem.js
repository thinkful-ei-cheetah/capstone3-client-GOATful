import React from 'react'
import {Link} from 'react-router-dom';
import './PreviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function PreviewItem({ activePrev, setActive, preview, previewClick, editClick, delClick  }) {
  if (previewClick) {
    return (
      <div
        className="preview-tile" 
        key={preview.id}>
        <a
          className='preview-btn'
          onClick={previewClick}
          id={preview.id}
          href='#preview'
        >
          <img
            className="preview-tile-image"
            id={preview.id}
            src={preview.thumbnail_url}
            alt="preview thumbnail"
          />
        </a>
      </div>
    )
  } else {
    let activeButton = <button className="set-active-btn" onClick={setActive}>Set Active</button>
    if(activePrev){
      if(activePrev.id === preview.id){
        activeButton = <div className="active-indicator" ><div className='indicator-text'>Active</div></div>;
      }
    }
    return (
      <div 
        className="preview-tile selection-card" 
        key={preview.id}>
          <img 
            src={preview.thumbnail_url} 
            alt="preview thumbnail"
            className="preview-thumbnail preview-tile-image" />
          <div className="selected-buttons">
          {activeButton}
          <Link to="/creator?edit=true" className="edit-link preview-svg" onClick={editClick} >
              <FontAwesomeIcon className="pencil-f-icon preview-svg" icon={faPencilAlt} />
          </Link>
          <FontAwesomeIcon className="f-icon delete-preview-btn preview-svg" icon={faTrashAlt} onClick={delClick}/>
          
        </div>
      </div>
    )
  }
}

PreviewItem.defaultProps = {
  preview: {
    id: 0,
    thumbnail_url: ''
  },
  editClick: () => {}
}

