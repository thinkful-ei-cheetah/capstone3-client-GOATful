import React from 'react';
import './CreatorControls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons'

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
        <FieldValidator isValid={titleValid} message={errorMessages.title}/>
        <input className="creator-input" id="creator-title" type="text" name="title" value={title} onChange={handleFields}/>
        <FieldValidator isValid={thumbnailValid} message={errorMessages.thumbnail}/>
        <input type="file" id="upload-file-btn" onChange={handlePhoto} />
        <label htmlFor="upload-file-btn">Upload Thumbnail</label>
        <label className="control-label" htmlFor="creator-description">Description:</label>
        <FieldValidator isValid={descriptionValid} message={errorMessages.description}/>
        <textarea className="creator-input" name="description" id="creator-description" value={description} onChange={handleFields} />
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
