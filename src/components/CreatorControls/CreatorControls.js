import React from 'react';
import './CreatorControls.css'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const CreatorControls = ({handlePhoto, handleSave, fields, handleFields}) => {

  const loggedIn = TokenService.hasAuthToken();

  const handleSetOpen = (ev) => {
    ev.currentTarget.style.visibility = 'hidden';
    const editForm = document.getElementById('edit-form')
    editForm.style.marginLeft = '0'
  }

  const handleSetClose = (ev) => {
    const editForm = document.getElementById('edit-form')
    editForm.style.marginLeft = '-25%'
    const editBtn = document.getElementById('edit-btn')
    editBtn.style.visibility = 'visible'
  }

  const editFormStyles = {
    fontSize: '1.7rem',
    margin: '.5rem',
    position: 'absolute',
    cursor: 'pointer',
  }

  return (
    <>

    <div className="aside-controls" id="edit-form">
      <div className="form-heading">
        <FontAwesomeIcon 
        icon={faWindowClose} 
        className='close-btn' 
        style={editFormStyles}
        onClick={(ev) => handleSetClose(ev)}
        />
        <h3 className="controls-header">Create Preview</h3>
      </div>
      <form className="controls-form">
        <label className="control-label" htmlFor="creator-title">Title:</label>
        <input className="creator-input" id="creator-title" type="text" name="title" value={fields.title} maxLength="100" onChange={handleFields} required/>
        <input type="file" id="upload-file-btn" onChange={handlePhoto} />
        <label htmlFor="upload-file-btn">Upload Thumbnail</label>
        <label className="control-label" htmlFor="creator-description">Description:</label>
        <textarea className="creator-input" name="description" id="creator-description" value={fields.description} maxLength="5000" onChange={handleFields} required/>
        <button type="button" className="save-preview-btn" onClick={handleSave}>{loggedIn ? 'Save Preview' : 'Login to save'}</button>
      </form>
    </div>
    <FontAwesomeIcon 
      icon={faEdit} 
      id='edit-btn'
      className='edit-menu-btn' 
      style={editFormStyles}
      onClick={(ev) => handleSetOpen(ev)}
    />
  </>
  ) 
}

export default CreatorControls;
