import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom';

export default class VidPrev extends Component {
  componentDidMount() {
      console.log('I was mounted')
  }

  render() {

    return (
      <section>
        Video previews page goes here
      </section>
    );
  }
}
