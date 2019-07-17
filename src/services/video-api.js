import config from '../config';
import TokenService from './token-service'

export default {
  async getVideos(page){
    const userVideos = await fetch(`${config.API_ENDPOINT}/videos?page=${page}`, {
      headers:{
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!userVideos.ok) {
      return userVideos.json().then(e => Promise.reject(e))
    }
    return await userVideos.json();
  },
  
  async postVideo(newVideo){
    const userVideos = await fetch(`${config.API_ENDPOINT}/videos`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newVideo)
    }) 
    if (!userVideos.ok) {
      return userVideos.json().then(e => Promise.reject(e))
    } 
    return await userVideos.json();
  },

  async patchVideo(id, updatedVideo){
    const res = await fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedVideo)
    }) 
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    } 
    this.getVideos()
  },

  async getVideoById(id){
    const userVideo = await fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      headers:{
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
    })  
    if (!userVideo.ok) {
      return userVideo.json().then(e => Promise.reject(e))
    }
    return await userVideo.json();
  },

  async deleteVideo(video_id) {
    const response = await fetch(`${config.API_ENDPOINT}/videos/${video_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!response.ok) {
      return response.json().then(e => Promise.reject(e))
    }
    return response.json();
  },

  async getYoutubeSearchResults(video_id) {
    const response = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/youtube-search-results`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!response.ok) {
      return response.json().then(e => Promise.reject(e))
    }
    return response.json();
  },

  async postYoutubeSearchResults(video_id, searchResults) {
    searchResults = JSON.stringify(searchResults)
    const response = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/youtube-search-results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({data: searchResults})
    })
    if (!response.ok) {
      return response.json().then(e => Promise.reject(e))
    }
    return response.json();
  },

}