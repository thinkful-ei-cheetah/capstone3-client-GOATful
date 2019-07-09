import config from '../config'
import TokenService from './token-service';

const PublicUserService = {
  async createVideoAndPreview(data) {
    const res = await fetch(`${config.API_ENDPOINT}/public-users/create-video-and-preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
}

export default PublicUserService
