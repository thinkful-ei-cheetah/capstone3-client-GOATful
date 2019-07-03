import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

export default class Creator extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        creator goes here
      </section>
    );
  }
}
