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
      headers:{
        "Authorization": TokenService.getAuthToken()
      },

    })  
    return await userVideos.json();
  }
}