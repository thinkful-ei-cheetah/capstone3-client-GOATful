import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

export default class Videos extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        this is videos main page
      </section>
    );
  }
}