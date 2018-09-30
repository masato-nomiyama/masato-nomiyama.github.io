// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'

import Home from './Home'
import Menu from './Menu'

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <Menu className='menu' />
        <Home className='home' />
      </div>
    )
  }
}
