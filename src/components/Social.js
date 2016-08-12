import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color } from '../vars'

import SocialButton from './SocialButton'

@Radium
class Social extends Component {
  render() {
    return (
      <div>
        <SocialButton link='mailto:contact@petertait.com' icon='email' />
        <SocialButton link='http://github.com/petertait' icon='github' />
        <SocialButton link='http://twitter.com/peter_tait' icon='twitter' />
      </div>
    )
  }
}

const styles = {
  btn: {
    display: 'inline-block',
    width: '45px',
    height: '45px',
    padding: '9px 12px',
    margin: '0 10px 50px 0',
    border: '1px solid',
    borderRadius: '50%',

    [breakpoint.medium]: {
      margin: '20px 10px 50px 0'
    }
  }
}

export default Social
