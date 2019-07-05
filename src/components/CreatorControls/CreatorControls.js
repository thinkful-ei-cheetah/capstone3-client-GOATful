import React, { useState } from 'react';
import './CreatorControls.css'
import TokenService from '../../services/token-service'


const CreatorControls = ({handlePhoto, handleSave, fields, handleFields}) => {

  const loggedIn = TokenService.hasAuthToken();

  return (
  <div className="aside-controls">
    <h4 className="controls-header">Create Preview</h4>
    <form className="controls-form">
      <label className="control-label" htmlFor="creator-title">Title:</label>
      <input className="creator-input" id="creator-title" type="text" name="title" value={fields.title} maxLength="100" onChange={handleFields}/>
      <input type="file" id="upload-file-btn" onChange={handlePhoto} />
      <label htmlFor="upload-file-btn">Upload Thumbnail</label>
      <label className="control-label" htmlFor="creator-description">Description:</label>
      <textarea className="creator-input" name="description" id="creator-description" value={fields.description} maxLength="5000" onChange={handleFields}/>
      <button className="save-preview-btn" onClick={handleSave}>{loggedIn ? 'Save Preview' : 'Login to save'}</button>
    </form>
  </div>
  ) 
}

export default CreatorControls;
