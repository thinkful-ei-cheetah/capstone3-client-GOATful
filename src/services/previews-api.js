import config from '../config';
import TokenService from './token-service'

export default {
  async getPreviews(video_id){
    const userPreviews = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      headers:{
        "Authorization": TokenService.getAuthToken()
      }
    })
    if (!userPreviews.ok) {
      return userPreviews.json().then(e => Promise.reject(e))
    }
    return await userPreviews.json();
  },
  
  async postPreview(video_id, newPreview){
    const insertedPreview = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      method: 'POST',
      headers:{
        "Authorization": TokenService.getAuthToken()
      },
      body: JSON.stringify(newPreview)
    })  
    if (!insertedPreview.ok) {
      return insertedPreview.json().then(e => Promise.reject(e))
    }
    return await insertedPreview.json();
  },

  async patchPreview(video_id, updatedPreview){
    const resPreview = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      method: 'PATCH',
      headers:{
        "Authorization": TokenService.getAuthToken()
      },
      body: JSON.stringify(updatedPreview)
    })  
    if (!resPreview.ok) {
      return resPreview.json().then(e => Promise.reject(e))
    }
    return await resPreview.json();
  }
}