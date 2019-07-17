import React from 'react';
import PreviewItem from '../PreviewItem/PreviewItem'
import './PreviewControls.css'

export default function PreviewControls({ prevList, selected, previewClick , editClick, delClick}) {
  let renderPreviews = () => {
    return prevList.map(preview => {
      console.log(preview.id)
      console.log(selected.id)
      if (preview.id !== selected.id) { 
      
        return (
          <PreviewItem
            key={preview.id}
            preview={preview}
            previewClick={previewClick}
          />
        )
      } else {
      console.log("i am elsed")
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
<<<<<<< HEAD
    // e.preventDefault();
    // window.scrollTo(0, 0);
=======
>>>>>>> 9003bed0344b0aaaae6c8ebd3b255ea6dbdd4ba3
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
<<<<<<< HEAD
    </div>
=======
>>>>>>> 9003bed0344b0aaaae6c8ebd3b255ea6dbdd4ba3
  )
}

PreviewControls.defaultProps = {
  prevList: [],
  selected: {},
  previewClick: () => {},
  editClick: () => {},
  deleteClick: () => {}
}