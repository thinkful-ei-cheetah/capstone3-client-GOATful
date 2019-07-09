import config from '../config';
import TokenService from './token-service'

export default {
  async getVideos(){
    const userVideos = await fetch(`${config.API_ENDPOINT}/videos`, {
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
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedVideo)
    }) 
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    } 
    return await res.json();
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
  }
}