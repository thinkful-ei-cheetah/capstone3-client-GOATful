import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

export default class Oops extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        404 Something went wrong
      </section>
    );
  }
}
