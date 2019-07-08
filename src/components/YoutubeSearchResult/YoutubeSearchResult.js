import React, {Component} from 'react';
import './YoutubeSearchResult.css';
import {randomIntFromInterval, shuffle} from '../../Utils/Utils';
import moment from 'moment'
  
export default class YoutubeSearchResult extends Component {
  state = {
    title: 'A Placeholder Title - Update!',
    description: 'A placeholder description - update to what you want!'
  }

  renderRandomDate = () => {
    const nums = ['2', '3', '4', '5', '6', '7', '8', '9'];
    const increments = ['minutes', 'months', 'years'];
    const num = shuffle(nums).pop();
    const increment = shuffle(increments).pop();
    return `${num} ${increment} ago`
  }

  renderRandomViews = () => {
    const num = randomIntFromInterval(1,999);
    return `${num}K views`
  }

  formatViewCount = (strNum) => {
    if (!strNum) return false
    let viewCount = Number(strNum)
    const billion = 1000000000
    const million = 1000000
    const hundred_thousand = 100000
    const ten_thousand = 10000
    if (viewCount >= billion) {
      const quotient = viewCount/billion
      if (quotient > 9.9) {
        return `${Math.floor(quotient)}B` 
      } else {
        return `${Number(quotient).toFixed(1)}B`
      }
    } else if (viewCount >= million) {
      const quotient = viewCount/million
      if (quotient > 9.9) {
        return `${Math.floor(quotient)}M` 
      } else {
        return `${Number(quotient).toFixed(1)}M`
      }
    } else if (viewCount >= hundred_thousand) {
      //999,999
      //999 k
      viewCount += ''
      return `${viewCount.slice(0,3)}K`
    } else if (viewCount >= ten_thousand) {
      // 99,999
      viewCount += ''
      return `${viewCount.slice(0,2)}K`
    } else if ((viewCount/1000) >= 1) {
      //9999
      //9.9K
      //1000
      const quotient = Number(viewCount / 1000)
      if (quotient > 1) {
        return `${Number(quotient).toFixed(1)}K`
      } else {
        return `${quotient}K`
      }
    } else {
      return `${viewCount}`
    }
  }

  formatPublishedAtDate = (dateTime) => {
    if (!dateTime) return false
    moment(dateTime)
    return moment(dateTime, "YYYYMMDD").fromNow();
  }

  formatDuration = yt_duration => {
    const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
    const extracted = time_extractor.exec(yt_duration);
    const hours = parseInt(extracted[1], 10) || 0;
    const minutes = parseInt(extracted[2], 10) || 0;
    const seconds = parseInt(extracted[3], 10) || 0;
    let result = ''
    if (hours > 0) {
      result += hours+':'
    }
    if (minutes > 0) {
      result += minutes
    } else {
     result += '0' 
    }
    result += ':'
    if (seconds >= 10) {
      result += seconds
    } else if (seconds > 0) {
      result += '0'+seconds
    } else {
      result += '00'
    }
    return result
}

  render() {
    const {
      video_length, youtube_display_name, thumbnail_url, default_thumbnail, title, description, published_at, view_count
    } = this.props
    
    return (
      <div className='youtube-search-result'>
        <div className='left-col'>
          <img className='responsive-img' src={thumbnail_url || default_thumbnail} alt='youtube-thumbnail' />
          <span className='video-length'>{this.formatDuration(video_length)}</span>
        </div>

        <div className='right-col'>
          <h2>{title || 'this is a fake header'}</h2>
          <p className='sub-headings'>{youtube_display_name} * {this.formatViewCount(view_count)  || this.renderRandomViews()} * {this.formatPublishedAtDate(published_at) || this.renderRandomDate()}</p>
          <p className='truncate'>{description || 'this is a fake description'}</p>
        </div>
      </div>
    )
  }
}
  

