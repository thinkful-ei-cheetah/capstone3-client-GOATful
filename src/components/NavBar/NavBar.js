import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import Logo from '../svg/Logo'
import './NavBar.css'

class NavBar extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login'>Login</Link>
        {' '}
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div className="title-container">
            <Link className="root-link" to='/'>
              <Logo className="logo" />
              <h2 className='app-title'>Laconic</h2>
            </Link>
        </div>
     
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default NavBar
