import React from 'react';
import PreviewItem from '../PreviewItem/PreviewItem'
import './PreviewControls.css'

const PreviewControls = ({ prevList, selected, previewClick , editClick, delClick}) => {

  let renderPreviews = () => {
    return prevList.map(preview => {
      if (preview.id !== selected.id) {
        return (
          <PreviewItem
            key={preview.id}
            preview={preview}
            previewClick={previewClick}
          />
        )
      } else {
        return (
          <PreviewItem
            key={preview.id}
            preview={preview}
            editClick={editClick}
            delClick={delClick}
          />
        )
      }
    })
  }

  return (
    <div className="preview-controls-container">
      <h2 className="preview-title">Previews</h2>
      <ul className="preview-tiles">
        {(!selected) ? false : renderPreviews()}
      </ul>
      {/* <Link to='/creator' className="add-new">
      </Link> */}
    </div>
  )
}
export default PreviewControls;