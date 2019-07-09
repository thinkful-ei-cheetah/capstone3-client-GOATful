import React from 'react'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import './MobileViewPage.css'

export default function MobileViewPage(props) {
  const renderPreviews = () => {
    return props.videos.map((video, i) => {
      return <YoutubeSearchResult className="mobile" {...video} key={i}/>
    })
  }
  return (
    <div className="mobile-view-page">
      {renderPreviews()}
    </div>
  )
}

MobileViewPage.defaultProps = {
  videos: []
}