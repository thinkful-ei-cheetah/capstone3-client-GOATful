import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './NavBar.css'
import mySvg from '../../logo.svg'

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
            to='/login'>
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


  renderMyVideosLink(){
    return (
      <div>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/videos'>
             My videos
          </Link>
        </nav>
      </div>
    )
  }

  renderNoLink() {
    return (
      <div>
        <nav>
        </nav>
      </div>
    )
  }

  render() {
    return (
      <header>
        <h1 className='app-title'>
          <Link to='/'>
            Laconic
            {/* <img src={mySvg} /> */}
          </Link>
        </h1>
        <h3>
          {TokenService.hasAuthToken()
            ? this.renderMyVideosLink()
            : this.renderNoLink()}
        </h3>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default NavBar
