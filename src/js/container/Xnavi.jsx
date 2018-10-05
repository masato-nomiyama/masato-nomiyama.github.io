// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import profile from '../../img/profile.png'
import { style } from '../theme'

export default class Xnavi extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <img
          className='xnavi-image'
          src={profile}
          alt='Xnavi'
        />
      <div className='xnavi-content'>
        </div>
      </div>
    )
  }
}
