import React, { Component } from 'react'
import './NotFoundPage.css'

export default class NotFound extends Component {
  render() {

    return (
      <section className="not-found-page">
        <div>
          <h2>404</h2>
          <p>The page you requested no longer exists!</p>
        </div>
      </section>
    );
  }
}
