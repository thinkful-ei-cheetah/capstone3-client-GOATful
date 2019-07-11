import React from 'react'
import YoutubeSearchResult from '../YoutubeSearchResult/YoutubeSearchResult'
import Icon from '../Icon/Icon'
import { faHome, faFire, faPlay, faEnvelope, faFolder, faArrowLeft, faTimes, faFilter, faTv } from '@fortawesome/free-solid-svg-icons'
import './MobileViewPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileViewPage(props) {
  const renderPreviews = () => {
    return props.videos.map((video, i) => {
      return <YoutubeSearchResult {...video} key={i}/>
    })
  }

  return (
    <div className="smartphone">
      <div className="mobile-view-page">
        <div className="search-container">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Workout</span>
          <div className="right-icons">
            <FontAwesomeIcon icon={faTimes} />
            <FontAwesomeIcon icon={faTv} />
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
        {renderPreviews()}
        <div className="icon-container">
          <Icon icon={faHome} id="home" name="Home" />
          <Icon icon={faFire} id="trending" name="Trending" />
          <Icon icon={faPlay} id="subscriptions" name="Subscriptions" className="active" />
          <Icon icon={faEnvelope} id="inbox" name="Inbox" />
          <Icon icon={faFolder} id="library" name="Library" />
        </div>
      </div>
    </div>
  )
}

MobileViewPage.defaultProps = {
  videos: []
}