import config from '../config';
import TokenService from './token-service'

export default {
  async getVideos(){
    const userVideos = await fetch(`${config.API_ENDPOINT}/videos`, {
      headers:{
        "Authorization": TokenService.getAuthToken()
      }
    })
    return await userVideos.json();
  },
  
  async postVideo(newVideo){
    const userVideos = await fetch(`${config.API_ENDPOINT}/videos`, {
      method: 'POST',
      headers:{
        "Authorization": TokenService.getAuthToken()
      },
      body: JSON.stringify(newVideo)
    })  
    return await userVideos.json();
  },

  async patchVideo(id, updatedVideo){
    const res = await fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      method: 'PATCH',
      headers:{
        "Authorization": TokenService.getAuthToken()
      },
      body: JSON.stringify(updatedVideo)
    })  
    return await res.json();
  },

  async getVideoById(id, updatedVideo){
    const userVIdeo = await fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      headers:{
        "Authorization": TokenService.getAuthToken()
      },
      body: JSON.stringify(updatedVideo)
    })  
    return await userVIdeo.json();
  }
}