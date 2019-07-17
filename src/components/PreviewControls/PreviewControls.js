import React from 'react';
import PreviewItem from '../PreviewItem/PreviewItem'
import './PreviewControls.css'

export default function PreviewControls({ prevList, selected, previewClick , editClick, delClick}) {
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
<<<<<<< HEAD
      <h2 className="preview-title">Previews</h2>
      <div 
      className="preview-tiles" 
      id="hScroll" 
      onWheel={(e) => horizontalScroll(e)}
      onMouseEnter={(e)=> handleMouseIn(e)}
      onMouseLeave={(e)=> handleMouseOut(e)}
      >
        
=======
      <h2 className="preview-title">Created Previews</h2>
      <ul className="preview-tiles">
>>>>>>> a808723e447cc1cae8a9ec3d5f3a51813b08053f
        {(!selected) ? false : renderPreviews()}
      </div>
      {/* <Link to='/creator' className="add-new">
      </Link> */}
    </div>
  )
}

PreviewControls.defaultProps = {
  prevList: [],
  selected: {},
  previewClick: () => {},
  editClick: () => {},
  deleteClick: () => {}
}