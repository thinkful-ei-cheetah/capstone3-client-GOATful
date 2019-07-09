import React from 'react'
import './VideoEditForm.css'
export default function VideoEditForm({fields, handleFields}) {
  return (
    <div>
      <div className="inputs">
        <label className="edit-label" htmlFor="edit-video-title">Title:</label>
        <input className="edit-video-input" type="text" id="edit-video-title" name="title" value={fields.title} onChange={handleFields} required/>

        <label className="edit-label" htmlFor="edit-video-tags">Tags:</label>
        <input className="edit-video-input" type="text" id="edit-video-tags" name="tags" value={fields.tags} onChange={handleFields} required />

        <label className="edit-label" htmlFor="edit-video-length">Video Length:</label>
        <input className="edit-video-input" name="video_length" type="text" id="edit-video-length" value={fields.videoLength} onChange={handleFields} required/>

        <label className="edit-label" htmlFor="edit-video-youtube-name">YouTube Name:</label>
        <input className="edit-video-input" type="text" id="edit-video-youtube-name"  name="youtube_display_name" value={fields.youtube_display_name} onChange={handleFields} required/>
      </div>
      <div className = "directions">
        <h4>Instructions</h4>
        <div className="instructions-text">{fields.error ? fields.error : ""}</div>
      </div>
      <button>Create!</button>
      </div>
  )
}
