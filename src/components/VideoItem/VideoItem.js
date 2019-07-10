import React, {useState} from 'react'
import './VideoItem.css'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import VideoEditForm from './VideoEditForm'

 function VideoItem({video, handleFormSubmission, ...props}) {
  const [values, setValues] = useState({
    title: video.title,
    tags: video.tags.join(', '),
    video_length: video.video_length,
    youtube_display_name: video.youtube_display_name
  })
   const [showForm, setToggleForm] = useState(false);
  
  const handleForm = e => {
    const {value, name} = e.target;
    setValues({...values, [name]: value})
  }
  const submitForm = e => {
    e.preventDefault();
    handleFormSubmission(video.id, values)
  }

  const redirectToPreviewsOrCreator = () => {
    if (video.preview_count > 0) {
      props.history.push(`/videos/${video.id}/previews`)
    } else {
      props.history.push('/creator')
    }
  }

  return (
    <div className='video-item'>
      <div className="image-section">
      <form className="edit-video-form" onSubmit={submitForm}>
        {showForm && <VideoEditForm values={values} video={video} handleForm={handleForm}/>}
      </form>
      <button className="edit-video-btn" onClick={() => setToggleForm(!showForm)}><FontAwesomeIcon className="f-icon" icon={faPencilAlt} /></button>
      
      <input type="image" src={video.active_thumbnail_url || 'https://picsum.photos/300/200'} alt={`Thumbnail of ${video.title}`} onClick={redirectToPreviewsOrCreator}/>
      </div>
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
