import React, { Component } from 'react'

import CreatorControls from '../components/CreatorControls/CreatorControls'
import UploadService from '../services/image-uploader'
import TokenService from '../services/token-service';

export default class Creator extends Component {
  state = {
    title: '',
    description: '',
    thumbnailUrl: null
  }

  defaultThumbnail = 'https://res.cloudinary.com/goatful/image/upload/v1562355377/goat-1270851_1920_cpgpf3.jpg';

  handleFields = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSave = () => {
    if (!TokenService.hasAuthToken()){
      //redirect to add-video
    }
    //save and redirect to previews page
  }

  grabPhoto = async e => {
    if (!e.target.files[0]) {
      return
    }
    const thumbnailUrl = await UploadService(e.target.files[0])
    this.setState({thumbnailUrl})
  }

  render() {
    console.log(this.props)
    return (
      <section className="creator-page">
        <CreatorControls 
          fields = {{title: this.state.title, description: this.state.description}}
          handleFields = {this.handleFields}
          handlePhoto = {this.grabPhoto}
          handleSave = {this.handleSave}
        />
      </section>
    );
  }
}
