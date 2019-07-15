import React, {useState} from 'react'
import './VideoItem.css'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {formatDuration} from '../../Utils/Utils'
import VideoStorage from '../../services/video-storage';
import EditVideoModal from '../../components/EditVideoModal/EditVideoModal'

 function VideoItem({video, handleFormSubmission, ...props}) {
  const [values, setValues] = useState({
    title: video.title,
    tags: video.tags.join(', '),
    video_length: formatDuration(video.video_length),
    youtube_display_name: video.youtube_display_name
  })
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false)
  }
  
  const handleForm = e => {
    const {value, name} = e.target;
    setValues({...values, [name]: value})
  }
  const submitForm = e => {
    e.preventDefault();
    handleFormSubmission(video.id, values)
    closeModal()
  }

  const redirectToPreviewsOrCreator = () => {
    VideoStorage.saveKey('laconic_current_video', video)
    if (video.preview_count > 0) {
      props.history.push(`/videos/${video.id}/previews`)
    } else {
      props.history.push('/creator')
    }
  }

  return (
    <div className='video-item'>
      <div className="image-section">
      
      <button className="edit-video-btn" onClick={() => setModalIsOpen(true)}>
        <FontAwesomeIcon className="f-icon" icon={faPencilAlt} />
      </button>

      <EditVideoModal
        fields={values}
        handleFields={handleForm}
        handleSubmit={submitForm}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />

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
