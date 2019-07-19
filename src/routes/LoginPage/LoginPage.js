import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import config from '../../config'
import AuthApiService from '../../services/auth-api-service'
import { withUserContext } from '../../contexts/UserContext'
import { Link } from 'react-router-dom'
import './LoginPage.css'

class Login extends Component {
  state = {
    error: null
  }

  responseGoogle = async (response) => {
    if (!response.tokenObj) {
      this.props.userContext.setError('invalid login attempt')
    } else {
      try {
        const res = await AuthApiService.loginGoogle(response.tokenObj)
        this.props.userContext.processLogin(res.authToken)
      } catch(err){
        this.props.userContext.setError(err.message)
      }
    }
  }

  render() {
    return (
      <section className='login-form-container page'>
        <div className='login-form'>
          <div>
            <h2 className='lf-title'>Login</h2>
            <p>Creating an account allows you to save your work!</p>
            <GoogleLogin
              className='lf-submit'
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div className="trial-link-container">
            <Link className='trial-link' to='/add-video'><button>Demo Laconic!</button></Link>
          </div>
        </div>
        
      </section>
    );
  }
}

export default withUserContext(Login);
