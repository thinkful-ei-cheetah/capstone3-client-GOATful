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

export default function CreatorControls(props) {
  const {
    handlePhoto, handleSave, handleFields, loggedIn, formValid,
    title, description, errorMessages, titleValid, descriptionValid, thumbnailValid} = props

  const handleSetOpen = (ev) => {
    ev.currentTarget.style.visibility = 'hidden';
    const editForm = document.getElementById('edit-form')
    const creatorPreview = document.getElementById('creator-preview')
    // get screen width 
    const screenWidth = document.documentElement.clientWidth
    if (screenWidth > 1000) {
      editForm.style.width = '20%'
      creatorPreview.style.marginLeft = '100px'
    } else if (screenWidth < 630) {
      editForm.style.width = '65%'
    } else {
      editForm.style.width = '35%'
    }
  }

  const handleSetClose = (ev) => {
    const editForm = document.getElementById('edit-form')
    const creatorPreview = document.getElementById('creator-preview')
    editForm.style.width = '0'
    creatorPreview.style.marginLeft = '0'
    const editBtn = document.getElementById('edit-btn')
    setTimeout(() => {
      editBtn.style.visibility = 'visible'
    }, 250)
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
      <form className="controls-form" onSubmit={handleSave}>
        <label className="control-label" htmlFor="creator-title">Title:</label>
        <FieldValidator isValid={titleValid} message={errorMessages.title}/>
        <input className="creator-input" id="creator-title" type="text" name="title" value={title} onChange={handleFields}/>
        <FieldValidator isValid={thumbnailValid} message={errorMessages.thumbnail}/>
        <input type="file" id="upload-file-btn" onChange={handlePhoto} />
        <label htmlFor="upload-file-btn">Upload Thumbnail</label>
        <label className="control-label" htmlFor="creator-description">Description:</label>
        <FieldValidator isValid={descriptionValid} message={errorMessages.description}/>
        <textarea className="creator-input" name="description" id="creator-description" value={description} onChange={handleFields} />
        <button type="submit" disabled={!formValid} className="save-preview-btn">{loggedIn ? 'Save Preview' : 'Login to save'}</button>
      </form>
    </div>
    <FontAwesomeIcon 
      icon={faEdit} 
      id='edit-btn'
      className='edit-menu-btn' 
      onClick={(ev) => handleSetOpen(ev)}
    />
  </>
  ) 
}

CreatorControls.defaultProps = {
  title: '',
  description: '',
  errorMessages: {},
  thumbnail_url: null,
  handleFields: () => {},
  handlePhoto: () => {},
  handleSave: () => {}
}