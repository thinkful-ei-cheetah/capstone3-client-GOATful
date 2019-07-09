import React, {Component} from 'react';
import './YoutubeSearchResult.css';
import {
  randomIntFromInterval,
  shuffle,
  formatDuration,
  formatPublishedAtDate,
  formatViewCount
} from '../../Utils/Utils';
  
export default class YoutubeSearchResult extends Component {
  
  renderRandomDate = () => {
    const nums = ['2', '3', '4', '5', '6', '7', '8', '9'];
    const increments = ['minutes', 'months', 'years'];
    const num = shuffle(nums).pop();
    const increment = shuffle(increments).pop();
    return `${num} ${increment} ago`
  }

  renderRandomViews = () => {
    const num = randomIntFromInterval(1,999);
    return `${num}K`
  }

  render() {
    const {
      video_length, youtube_display_name, thumbnail_url, default_thumbnail, title, description, published_at, view_count
    } = this.props
    
    return (
      <div className='youtube-search-result'>
        <div className='left-col'>
          <img className='responsive-img' src={thumbnail_url || default_thumbnail} alt='youtube-thumbnail' />
          <span className='video-length'>{formatDuration(video_length)}</span>
        </div>

        <div className='right-col'>
          <h2>{title || 'this is a fake header'}</h2>
          <p className='sub-headings' >{youtube_display_name} • {formatViewCount(view_count)  || this.renderRandomViews()} • {formatPublishedAtDate(published_at) || this.renderRandomDate()}</p>
          <p className='truncate'>{description || 'this is a fake description'}</p>
        </div>
      </div>
    )
  }
}
  

