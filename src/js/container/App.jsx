// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import Exception from '../component/Exception'
import InclusiveWorks from '../router/InclusiveWorks'
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
            <Route path='/works' component={InclusiveWorks}/>
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
