import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';
import CreatorControls from '../components/CreatorControls/CreatorControls'
import UploadService from '../services/image-uploader'

export default class Creator extends Component {
  state = {
    title: '',
    description: '',
    useDefaultPhoto: true,
    imageUrl: null
  }

  defaultImage = 'https://res.cloudinary.com/goatful/image/upload/v1562355377/goat-1270851_1920_cpgpf3.jpg';

  handleFields = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
      console.log('I was mounted')
  }

  grabPhoto = async e => {
    if (!e.target.files[0]) {
      return
    }
    const imageUrl = await UploadService(e.target.files[0])
    this.setState({imageUrl})
  }

  render() {
    return (
      <section className="creator-page">
        <CreatorControls 
          fields = {{title: this.state.title, description: this.state.description}}
          handleFields = {this.handleFields}
          handlePhoto = {this.grabPhoto}
          savePreview = {this.savePreview}
        />
      </section>
    );
  }
}
