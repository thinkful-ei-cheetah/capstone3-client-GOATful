import React, {useState} from 'react'
import './VideoItem.css'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt } from '@fortawesome/free-solid-svg-icons'
// import VideoEditForm from './VideoEditForm'

 function VideoItem({video, ...props}) {
  // const formFields = 
   const [toggleForm, setToggleForm] = useState(false);

   
  return (
    <div className='video-item'>
      <button className="edit-video-btn" onClick={() => setToggleForm(true)}><FontAwesomeIcon className="f-icon" icon={faPencilAlt} /></button>
      <form className="edit-video-btn">
        {/* <VideoEditForm /> */}
      </form>
      <input type="image" src={video.active_thumbnail_url || 'https://picsum.photos/300/200'} alt={`Thumbnail of ${video.title}`} onClick={() => props.history.push(`/videos/${video.id}`)}/>
      <h2>{video.title}</h2>
      <p>{`Previews: ${video.preview_count}`}</p>
      <p>{video.is_active ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

VideoItem.defaultProps = {
  video: {
    thumbnail: 'https://picsum.photos/',
    title: '',
    isActive: false,
    preview_count: 0
  }
}

export default withRouter(VideoItem)
