import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
