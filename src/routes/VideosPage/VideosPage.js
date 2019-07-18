import React, { Component } from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';
import './VideosPage.css';
import Loader from '../../components/Loader/Loader'
import VideoModalForm from '../../components/VideoModalForm/VideoModalForm'
import VideoService from '../../services/video-api';
import FAB from '../../components/FAB/FAB'
import { withAppContext } from '../../contexts/AppContext'
import InfiniteScroll from 'react-infinite-scroll-component';

class Videos extends Component {

  state = {
    videos: [],
    isLoading: true,
    modalIsOpen: false,
    //for infinite scroll
      currentPage: 1,
      lastPage: null,
      hasMoreVideosForScroll: true
  }

  async componentDidMount() {
    this.getVideoList()
  } 

  deleteVideo = async videoId => {
    try{
      this.setState({isLoading: true })
      await VideoService.deleteVideo(videoId)
      this.getVideoList(true)

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

  getVideoList = async (resetScroll = false) => {

    if (resetScroll){
      this.setState({
        isLoading: true,
        currentPage : 1,
        lastPage: null,
        hasMoreVideosForScroll: true,
        videos: [] 
      })
    } else {
      this.setState({
        isLoading: true
      })
    }

    try {
      const videos = await VideoService.getVideos(this.state.currentPage++);
      this.setState({ videos: [...this.state.videos, ...videos.data],
        isLoading: false, 
        lastPage: videos.last_page
       });

       if (this.state.currentPage === this.state.lastPage + 1 ){
        this.setState({
          hasMoreVideosForScroll: false,
        })
      }
    } catch(err) {
      this.setState({ isLoading: false }, this.props.appContext.setAppError(err.message))
    }
  }

  displayVideos = () => {
    if (this.state.videos.length){
      return (
        <div>
          <InfiniteScroll
            dataLength={this.state.videos.length} //This is important field to render the next data
            next={this.getVideoList}
            hasMore={this.state.hasMoreVideosForScroll}
            loader={<h4>Grabbing Videos...</h4>}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>No more videos</b>
              </p>
            }
          >
            <div className='my-videos-container'>
              <h2 id='page-title'>Your Video Dashboard</h2>
              {this.renderVideos()}
            </div>
          </InfiniteScroll>
        </div>
      )
    } else return <p className="no-videos-text">You currently have 0 videos</p>
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
        {this.displayVideos()}
      </section>
    );
  }
}

export default withAppContext(Videos)