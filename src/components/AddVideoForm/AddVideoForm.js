import React, { useState } from 'react'
import './AddVideoForm.css'

export default function AddVideo({cssRouteProps, fields, handleFields, handleSubmit, action}) {
  const [view, setView] = useState(<p className="leggo-text">Let's Go!</p>)

  const titleInstructions = <p>Enter a title for your new video project. </p>
  const tagsInstructions = <p>Enter up to three tags, that are comma separated.<br/><br/>For example:<br/> sports, soccer, lfc</p>
  const videoInstructions = <p>Enter a duration in the format mm:ss, or hhh:mm:ss.<br/><br/> For example: <br/> 04:20, or 005:22:33</p>
  const handleInstructions = <p>Enter your YouTube channel name.<br/><br/> For example: <br/> Liverpool FC</p>

  return (
    <form className={`add-video-form`} onSubmit={e => handleSubmit(e)}>
      <div className={`flex-form`}>
      <div className={`inputs`}>
        <label className="add-label" htmlFor="add-video-title">Title:</label>
        <input className="add-video-input" type="text" id="add-video-title" name="title" value={fields.title} onChange={handleFields} required onFocus={()=>setView(titleInstructions)} placeholder="fitness 100"/>

        <label className='add-label' htmlFor="add-video-tags">Tags:</label>
        <input className="add-video-input" type="text" id="add-video-tags" name="tags" value={fields.tags} onChange={handleFields} required onFocus={()=>setView(tagsInstructions)} placeholder="workout, fitness, gym"/>

        <label className={`add-label`} htmlFor="add-video-length">Video Length:</label>
        <input className="add-video-input" name="video_length" type="text" id="add-video-length" value={fields.video_length} onChange={handleFields} required onFocus={()=>setView(videoInstructions)} placeholder="04:13:22"/>

        <label className={`add-label`}htmlFor="add-video-youtube-name">YouTube Name:</label>
        <input className="add-video-input" type="text" id="add-video-youtube-name" minLength="3" name="youtube_display_name" value={fields.youtube_display_name} onChange={handleFields} required onFocus={()=>setView(handleInstructions)} placeholder="haloking"/>
      </div>
      <div className = {`directions`}>
        <h4>Instructions</h4>
        <div className={`instructions-text`}>{fields.addError ? fields.addError : view}</div>
      </div>
      </div>
      <button>{action === 'edit' ? 'Update!' : 'Create!'}</button>
    </form>
  )
}

AddVideo.defaultProps = {
  fields: {
    title: '',
    tags: '',
    video_length: '00:00',
    youtube_display_name: ''
  },
  handleFields: () => {},
  handleSubmit: () => {}
}