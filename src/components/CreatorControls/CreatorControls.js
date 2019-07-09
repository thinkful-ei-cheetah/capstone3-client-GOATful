import React from 'react';
import './CreatorControls.css'

const FieldValidator = (props) => {
  if (!props.isValid) {
    return (
      <p className='error-msg'>{props.message}</p>
    )
  }
  return <></>
}

const CreatorControls = (props) => {
  const {
    handlePhoto, handleSave, handleFields, loggedIn, formValid,
    title, description, errorMessages, titleValid, descriptionValid, thumbnailValid} = props

  return (
    <div className="aside-controls">
      <h4 className="controls-header">Create Preview</h4>
      <form className="controls-form" onSubmit={handleSave}>
        <label className="control-label" htmlFor="creator-title">Title:</label>
        <FieldValidator isValid={titleValid} message={errorMessages.title}/>
        <input className="creator-input" id="creator-title" type="text" name="title" value={title} onChange={handleFields} />
        <FieldValidator isValid={thumbnailValid} message={errorMessages.thumbnail}/>
        <input type="file" id="upload-file-btn" onChange={handlePhoto} />
        <label htmlFor="upload-file-btn">Upload Thumbnail</label>
        <label className="control-label" htmlFor="creator-description">Description:</label>
        <FieldValidator isValid={descriptionValid} message={errorMessages.description}/>
        <textarea className="creator-input" name="description" id="creator-description" value={description} onChange={handleFields} />
        <button type="submit" disabled={!formValid} className="save-preview-btn" >{loggedIn ? 'Save Preview' : 'Login to save'}</button>
      </form>
    </div>
  ) 
}

export default CreatorControls;
