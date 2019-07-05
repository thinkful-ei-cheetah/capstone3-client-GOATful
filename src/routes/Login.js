import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import config from '../../src/config'
import AuthApiService from '../services/auth-api-service'
import { withUserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'


class Login extends Component {
  state = {
    error: null
  }

  componentDidMount() {
    console.log('I was mounted')
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
      <section>
        <div className='loginForm'>
          <div>
            <h2>Login With Google</h2>
            <p>Creating an account allows you to save your work!</p>
            <GoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div>
            <Link to='/add-video'>or, checkout Laconic's tools without saving</Link>
          </div>
        </div>
        
      </section>
    );
  }
}

export default withUserContext(Login);
