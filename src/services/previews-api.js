import config from '../config';
import TokenService from './token-service'

export default {
  async getPreviews(video_id) {
    const userPreviews = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!userPreviews.ok) {
      return userPreviews.json().then(e => Promise.reject(e))
    }
    return userPreviews.json();
  },

  async postPreview(video_id, newPreview) {
    const insertedPreview = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newPreview)
    })
    if (!insertedPreview.ok) {
      return insertedPreview.json().then(e => Promise.reject(e))
    }
    return insertedPreview.json();
  },

  async patchPreview(video_id, updatedPreview) {
    const resPreview = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedPreview)
    })
    if (!resPreview.ok) {
      return resPreview.json().then(e => Promise.reject(e))
    }
    return resPreview.json();
  },
  async deletePreview(video_id, preview_id) {
    const previewToDelete = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id: preview_id,
        video_id
      })
    })
    if (!previewToDelete.ok) {
      return previewToDelete.json().then(e => Promise.reject(e))
    }
    return previewToDelete.json();
  },

  async getActivePreview(video_id) {
    const activePreview = await fetch(`${config.API_ENDPOINT}/videos/${video_id}/previews/active`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!activePreview.ok) {
      return activePreview.json().then(e => Promise.reject(e))
    }
    return activePreview.json();
  },

}