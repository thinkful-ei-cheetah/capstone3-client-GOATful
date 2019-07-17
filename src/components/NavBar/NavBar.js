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
      <div className='navControls'>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <div className='navLinks'>
          <Link className="videosLink" to='/videos'>
           My Videos
          </Link>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
          </div>
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
