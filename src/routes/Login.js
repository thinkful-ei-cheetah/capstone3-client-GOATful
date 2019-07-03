import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { NavLink, } from 'react-router-dom';

export default class Login extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}
