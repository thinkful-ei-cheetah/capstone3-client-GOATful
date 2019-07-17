import React, { Component } from 'react';
import VideoItem from '../components/VideoItem/VideoItem';
import './Videos.css';
import Loader from '../components/Loader/Loader'
import VideoModalForm from '../components/VideoModalForm/VideoModalForm'
import VideoService from '../services/video-api';
import FAB from '../components/FAB/FAB'
import { withAppContext } from '../contexts/AppContext'

class Videos extends Component {

  state = {
    videos: [],
    isLoading: true,
    modalIsOpen: false,
  }

  async componentDidMount() {
    this.getVideoList()
  } 

  deleteVideo = async videoId => {
    try{
      this.setState({isLoading: true })
      await VideoService.deleteVideo(videoId)
      const videos = await VideoService.getVideos();
      this.setState({ videos, isLoading: false })
    } catch(err){ 
      this.setState({ isLoading: false }, this.props.appContext.setAppError(err.message))
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})  
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  renderVideos() {
    const { videos } = this.state;
    return videos.map(video => 
      <VideoItem
        deleteVideo={this.deleteVideo}
        video={video}
        key={video.id}
        getVideoList={this.getVideoList}
      />
    )
  }

  getVideoList = async () => {
    this.setState({isLoading: true})
    try {
      const videos = await VideoService.getVideos();
      this.setState({ videos, isLoading: false })
    } catch(err) {
      this.setState({ isLoading: false }, this.props.appContext.setAppError(err.message))
    }
  }

  render() {
    return (
      <section className='videos-page page'>
        <Loader isLoading={this.state.isLoading} />
        <FAB onClick={this.openModal}/>
        <VideoModalForm
          history={this.props.history}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          action='new'
        />
        <h2>Your Video Dashboard</h2>
        <div className='filter-container'>
          <form id='filter-videos'>
            <label htmlFor='title'>Filter by title</label>
            <input type='text' name='title' id='title'/>
          </form>
        </div>
        <div className='my-videos-container'>
          {this.state.videos.length ? this.renderVideos() : <p className="no-videos-text">You currently have 0 videos</p>}
        </div>
      </section>
    );
  }
}

export default withAppContext(Videos)