import React from 'react'
import './VideoItem.css'
import { withRouter } from 'react-router-dom';

 function VideoItem({video, ...props}) {
   
  return (
    <div className='video-item'>
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
