let apiPath;
let tokenKey;
let GOOGLE_CLIENT_ID;
if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://laconic-api.herokuapp.com/api'
  tokenKey = 'laconic-prod-auth-token'
  GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
} else {
  apiPath = 'http://localhost:8000/api'
  tokenKey = 'laconic-dev-auth-token'
  GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
}

export default {
  API_ENDPOINT: apiPath,
  TOKEN_KEY: tokenKey,
  GOOGLE_CLIENT_ID
}