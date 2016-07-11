import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import vars from '../../vars'

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.peach,
        secondary: vars.purple
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        Hey!
      </div>
    )
  }
}

module.exports = Radium(Work)
