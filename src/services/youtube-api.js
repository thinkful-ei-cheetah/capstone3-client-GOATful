import config from '../config'

const YoutubeApiService = {
  maxResults: 4,
  key: config.YOUTUBE_API_KEY,
  baseUrl: 'https://www.googleapis.com/youtube/v3',
   
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
        thumbnail_url: data.snippet.thumbnails.maxres.url
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