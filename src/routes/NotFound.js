import React, { Component } from 'react'

export default class NotFound extends Component {
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
