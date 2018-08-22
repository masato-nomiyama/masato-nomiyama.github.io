// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'

import Container from './Container'
import Menu from './Menu'

export default class Home extends PureComponent {
  render() {
    return (
      <div className='home'>
        <Menu className='menu' />
        <Container className='container' />
      </div>
    )
  }
}
