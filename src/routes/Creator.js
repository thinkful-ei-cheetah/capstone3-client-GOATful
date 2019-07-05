import React, { Component } from 'react'
import CreatorControls from '../components/CreatorControls/CreatorControls'
import UploadService from '../services/image-uploader'
import CreatorPreview from '../components/CreatorPreview/CreatorPreview'

export default class Creator extends Component {
  state = {
    title: 'happy go lucky',
    description: '',
    thumbnail_url: null,
    default_thumbnail: 'https://res.cloudinary.com/goatful/image/upload/v1562355377/goat-1270851_1920_cpgpf3.jpg'
  }


  handleFields = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  // updateUserPreview = () => {
  //   const obj = this.state;
  //   delete obj.userPreview;
  //   this.setState({
  //     userPreview: {...obj}
  //   })
  // }

  componentDidMount() {
    console.log('I was mounted')
  }

  grabPhoto = async e => {
    if (!e.target.files[0]) {
      return
    }
    const thumbnail_url = await UploadService(e.target.files[0])
    this.setState({thumbnail_url})
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
        <CreatorPreview userPreview={{...this.state}}></CreatorPreview>
      </section>
    );
  }
}
