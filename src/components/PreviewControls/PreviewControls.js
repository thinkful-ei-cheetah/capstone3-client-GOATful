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

  let horizontalScroll = (e) => {
    // e.preventDefault();
    // window.scrollTo(0, 0);
    const left = document.getElementById('hScroll')
    left.scrollLeft += e.deltaY
    
    }

  let handleMouseIn = (e) => {
    document.body.style.overflow = 'hidden';
  }

  let handleMouseOut = (e) => {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="preview-controls-container">
      <h2 className="preview-title">Previews</h2>
      <div 
      className="preview-tiles" 
      id="hScroll" 
      onWheel={(e) => horizontalScroll(e)}
      onMouseEnter={(e)=> handleMouseIn(e)}
      onMouseLeave={(e)=> handleMouseOut(e)}
      >
        
        {(!selected) ? false : renderPreviews()}
      </div>
      {/* <Link to='/creator' className="add-new">
      </Link> */}
    </div>
  )
}
export default PreviewControls;