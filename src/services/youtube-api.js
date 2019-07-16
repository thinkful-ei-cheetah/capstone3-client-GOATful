import config from '../config'

const YoutubeApiService = {
  maxResults: 4,
  key: config.YOUTUBE_API_KEY,
  baseUrl: 'https://www.googleapis.com/youtube/v3',
   
  _selectHighestQualityThumbnail(thumbnails) {
    if (thumbnails.maxres) return thumbnails.maxres.url
    if (thumbnails.standard) return thumbnails.standard.url
    if (thumbnails.high) return thumbnails.high.url
    if (thumbnails.medium) return thumbnails.medium.url
    if (thumbnails.default) return thumbnails.default.url
  },

  _formatResp(apiResult) {
    try {
      const data = apiResult.items[0];
      return {
        video_length: data.contentDetails.duration,
        video_id: data.id,
        view_count: data.statistics.viewCount,
        youtube_display_name: data.snippet.channelTitle,
        published_at: data.snippet.publishedAt,
        description: data.snippet.description,
        title: data.snippet.title,
        thumbnail_url: this._selectHighestQualityThumbnail(data.snippet.thumbnails)
      }
    } catch(err) {
      return err.message;
    }
  },

  async getVideoDetails(videoId){
    const res = await fetch(`${this.baseUrl}/videos?part=statistics%2C+contentDetails%2C+snippet&id=${videoId}&key=${this.key}`)
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  },
  
  async search(tags, maxResults=this.maxResults) {
    const options = {
      maxResults,
      key: this.key,
      q: encodeURIComponent(tags.join(' ')),
      part: 'snippet',
      type: 'video'
    }

    let queryStr = ''
    for (const [key, value] of Object.entries(options)) {
      queryStr += `${key}=${value}&`
    }

    const res = await fetch(`${this.baseUrl}/search?${queryStr}`)
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    const results = await res.json();
    const videoIds = results.items.map(item => item.id.videoId);
      
    const videoPromises = videoIds.map(id => this.getVideoDetails(id))
    const videoResponses = await Promise.all(videoPromises)
    return videoResponses.map(apiResult => this._formatResp(apiResult))
  }

}

export default YoutubeApiService;