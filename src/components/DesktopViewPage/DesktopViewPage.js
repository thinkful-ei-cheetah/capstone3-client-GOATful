import React from 'react'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import './DesktopViewPage.css'

export default function DesktopViewPage(props) {
  const renderPreviews = () => {
    return props.videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i}/>
    })
  }
  return (
    <div className="desktop-view-page">
      {renderPreviews()}
    </div>
  )
}

DesktopViewPage.defaultProps = {
  videos: []
}