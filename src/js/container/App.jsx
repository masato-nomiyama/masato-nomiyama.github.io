// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import DressOfGhosts from './DressOfGhosts'
import Exception from '../component/Exception'
import Home from './Home'
import Menu from './Menu'

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <Menu className='menu' />
        <div className='content'>
          <Switch>
            <Route
              exact path={`/(${[
                '',
                'profile',
                'works',
                'biography',
                'achievements',
                'contact',
              ].join('|')})`}
              render={props => <Home className='home' {...props} />}
            />
            <Route
              path='/works'
              render={props => (
                <Switch>
                  <Route
                    exact path='/works/dress-of-ghosts'
                    render={props => <DressOfGhosts className='dress-of-ghosts' {...props} />}
                  />
                  <Route component={Exception} />
                </Switch>
              )}
            />
            <Route component={Exception} />
          </Switch>
          <Typography className='copyright' variant='caption'>
            Copyright © 2018 Masato Nomiyama
          </Typography>
        </div>
      </div>
    )
  }
}
