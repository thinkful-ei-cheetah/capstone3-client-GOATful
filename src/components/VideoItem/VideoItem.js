import React from 'react'
import './VideoItem.css'

export default function VideoItem(props) {
  return (
    <div className='video-item'>
      <img src={props.video.active_thumbnail_url || 'https://picsum.photos/300/200'} alt="Video Thumbnail"/>
      <h2>{props.video.title}</h2>
      <p>{`Previews: ${props.video.preview_count}`}</p>
      <p>{props.video.is_active ? 'Active' : 'Inactive'}</p>
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
