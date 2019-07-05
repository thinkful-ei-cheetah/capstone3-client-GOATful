let apiPath;
let tokenKey;
if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://laconic-api.herokuapp.com/api'
  tokenKey = 'laconic-prod-auth-token'
} else {
  apiPath = 'http://localhost:8000/api'
  tokenKey = 'laconic-dev-auth-token'
}

export default {
  API_ENDPOINT: apiPath,
  TOKEN_KEY: tokenKey,
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  YOUTUBE_API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY
}