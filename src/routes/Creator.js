import React, { Component } from 'react'

import CreatorControls from '../components/CreatorControls/CreatorControls'
import UploadService from '../services/image-uploader'
import CreatorPreview from '../components/CreatorPreview/CreatorPreview'
import TokenService from '../../src/services/token-service'
import { withUserContext } from '../contexts/UserContext'
import GoogleLogin from 'react-google-login';
import config from '../../src/config'
import AuthApiService from '../services/auth-api-service'
import PublicUserService from '../services/public-user-service'
import VideoStorage from '../services/video-storage'
import PreviewsApiService from '../services/previews-api'
import { withAppContext } from '../contexts/AppContext';

class Creator extends Component {
  state = {
    title: '',
    description: '',
    thumbnail_url: null,
    default_thumbnail: 'https://res.cloudinary.com/goatful/image/upload/v1562355377/goat-1270851_1920_cpgpf3.jpg',
    loggedIn: false,
    errorMessages: {},
    titleValid: false,
    descriptionValid: false,
    thumbnailValid: false,
    formValid: false,
  }

  handleFields = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    }, this.validateField(name, value))
  }

  validateField = (field, value) => {
    if (field === 'title') return this.validateTitle(value)
    if (field === 'description') return this.validateDescription(value)
  }

  validateTitle = (title) => {
    let titleValid = true
    let errorMessages = {...this.state.errorMessages}

    if (!title) {
      titleValid = false
      errorMessages.title = 'A title is required'
    } else if (title.length > 100) {
      titleValid = false
      errorMessages.title = 'Title must be less than 100 characters'
    }

    this.setState({titleValid, errorMessages}, this.validateForm)
  }

  validateDescription = (description) => {
    let descriptionValid = true
    let errorMessages = {...this.state.errorMessages}

    if (!description) {
      descriptionValid = false
      errorMessages.description = 'A description is required'
    } else if (description.length > 5000) {
      descriptionValid = false
      errorMessages.description = 'Description must be less than 5000 characters'
    }

    this.setState({descriptionValid, errorMessages}, this.validateForm)
  }

  validateForm = () => {
    const {titleValid, descriptionValid, thumbnailValid} = this.state
    let formValid = this.state.formValid
    if (titleValid && descriptionValid && thumbnailValid) {
      formValid = true      
    } else {
      formValid = false
    }
    this.setState({formValid})
  }

  componentDidMount() {
    const loggedIn = TokenService.hasAuthToken();
    if (loggedIn) {
      const video = VideoStorage.getVideo('laconic_current_video')
      if (!video) return this.props.history.push('/videos')
    }
    this.setState({loggedIn})
  }

  grabPhoto = async e => {
    let thumbnailValid = true;
    let errorMessages = {...this.state.errorMessages}

    if (!e.target.files[0]) {
      thumbnailValid = false
      errorMessages.thumbnail = 'failed to upload image'
      return
    }
    try {
      const thumbnail_url = await UploadService(e.target.files[0])
      this.setState({thumbnail_url, thumbnailValid, errorMessages}, this.validateForm)
    } catch(err) {
      this.props.appContext.setAppError('failed to upload image')
    }
  }

  handleSave = async (e) => {
    e.preventDefault();
    const video = VideoStorage.getVideo('laconic_current_video')
    if (this.state.loggedIn && video.id) {
      const {title, description, thumbnail_url} = this.state
      const preview = {title, description, thumbnail_url, video_id: video.id}
      try {
        await PreviewsApiService.postPreview(video.id, preview)
        this.props.history.push(`/videos/${video.id}/previews`)
      } catch(err) {
        this.props.appContext.setAppError(err.message)
      }
    } else {
      this.googleLoginBtn.click()
    }
  }

  postVideoAndPreview = async () => {
    const video = VideoStorage.getVideo('public_user_video');
    const {title, description, thumbnail_url} = this.state
    const preview = {title, description, thumbnail_url}
    const data = {video, preview}
    const savedPreview = await PublicUserService.createVideoAndPreview(data)
    this.props.history.push(`/videos/${savedPreview.video_id}/previews`)
  }

  responseGoogle = async (response) => {
    if (!response.tokenObj) {
      this.props.appContext.setAppError('unable to authenticate with Google')
    } else {
      try {
        const res = await AuthApiService.loginGoogle(response.tokenObj)
        this.props.userContext.processLogin(res.authToken)
        this.postVideoAndPreview()
      } catch(err){
        this.props.appContext.setAppError('Unable to save your preview')
      }
    }
  }

  render() {
    return (
      <section className="creator-page">
        <CreatorControls 
          {...this.state}
          handleFields = {this.handleFields}
          handlePhoto = {this.grabPhoto}
          handleSave = {this.handleSave}
        />
        <GoogleLogin
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} ref={btn => this.googleLoginBtn = btn} style={{display: 'none'}}></button>
          )}
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <CreatorPreview userPreview={{...this.state}}></CreatorPreview>
      </section>
    );
  }
}

export default withUserContext(withAppContext(Creator))