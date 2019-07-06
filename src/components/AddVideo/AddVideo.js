import React, { useState } from 'react'
import './AddVideo.css'

export default function AddVideo({fields, handleFields, handleSubmit}) {
 const [view, setView] = useState("Let's go!")
   
 
  const titleInstructions = <p>Enter a title that you can reference later to look up its previews.</p>
 
  const tagsInstructions = <p>Enter up to three tags, that are comma separated.<br/><br/>For eg: sports, soccer, liverpool</p>
  const videoInstructions = <p>Enter a duration in the format mm:ss.<br/><br/> For eg: 04:20</p>
  const handleInstructions = <p>Enter your YouTube channel name.<br/><br/> For eg: Liverpool FC</p>


  return (
    <form className="add-video-form" onSubmit={handleSubmit}>
      <div className="flex-form">
      <div className="inputs">
        <label className="add-label" htmlFor="add-video-title">Title:</label>
        <input className="add-video-input" type="text" id="add-video-title" name="title" value={fields.title} onChange={handleFields} required onFocus={()=>setView(titleInstructions)}/>

        <label className="add-label" htmlFor="add-video-tags">Tags:</label>
        <input className="add-video-input" type="text" id="add-video-tags" name="tags" value={fields.tags} onChange={handleFields} required onFocus={()=>setView(tagsInstructions)}/>

        <label className="add-label" htmlFor="add-video-length">Video Length:</label>
        <input className="add-video-input" name="video_length" type="text" id="add-video-length" value={fields.videoLength} onChange={handleFields} required onFocus={()=>setView(videoInstructions)}/>

        <label className="add-label" htmlFor="add-video-youtube-name">YouTube Name:</label>
        <input className="add-video-input" type="text" id="add-video-youtube-name"  name="youtube_name" value={fields.youtube_name} onChange={handleFields} required onFocus={()=>setView(handleInstructions)}/>
      </div>
      <div className = "directions">
        <h4>Instructions</h4>
        <div className="instructions-text">{view}</div>
      </div>
      </div>
      <button>Create!</button>
    </form>
  )
}
