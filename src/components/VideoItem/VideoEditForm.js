import React from 'react'
import './VideoEditForm.css'
export default function VideoEditForm({video, handleForm, values}) {

  

  return (
    <div className="edit-videos-container">
      <div className="inputs-edit">
        <label className="edit-label" htmlFor="edit-video-title">Title:</label>
        <input className="edit-video-input" type="text" id="edit-video-title" name="title"  value={values.title} onChange={handleForm} required/>

        <label className="edit-label" htmlFor="edit-video-tags">Tags:</label>
        <input className="edit-video-input" type="text" id="edit-video-tags" name="tags" value={values.tags} onChange={handleForm} required />

        <label className="edit-label" htmlFor="edit-video-length">Video Length:</label>
        <input className="edit-video-input" name="video_length" type="text" id="edit-video-length" value={values.video_length} onChange={handleForm} required/>

        <label className="edit-label" htmlFor="edit-video-youtube-name">YouTube Name:</label>
        <input className="edit-video-input" type="text" id="edit-video-youtube-name"  name="youtube_display_name" value={values.youtube_display_name} onChange={handleForm} required/>
      </div>
      <div className = "edit-btn-container">
        <button type="submit">Confirm</button>
      </div>
    </div>
  )
}
