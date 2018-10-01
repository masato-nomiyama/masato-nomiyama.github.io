// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'

import Home from './Home'
import Menu from './Menu'

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <Menu className='menu' />
        <Home className='home' />
        <div className='copyright'>
          <Typography variant='caption'>
            Copyright © 2018 Masato Nomiyama
          </Typography>
        </div>
      </div>
    )
  }
}
