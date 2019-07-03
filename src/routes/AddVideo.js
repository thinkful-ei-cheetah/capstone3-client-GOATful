import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

export default class AddVid extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        Add video goes here
      </section>
    );
  }
}
