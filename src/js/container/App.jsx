// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import DressOfGhosts from '../page/DressOfGhosts'
import MaestroOfTime from '../page/MaestroOfTime'
import Morimori from '../page/Morimori'
import MyFeelingCantReachYou from '../page/MyFeelingCantReachYou'
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
                  <Route
                    exact path='/works/maestro-of-time'
                    render={props => <MaestroOfTime className='maestro-of-time' {...props} />}
                  />
                  <Route
                    exact path='/works/morimori'
                    render={props => <Morimori className='morimori' {...props} />}
                  />
                  <Route
                    exact path='/works/my-feeling-cant-reach-you'
                    render={props => <MyFeelingCantReachYou className='my-feeling-cant-reach-you' {...props} />}
                  />
                  <Route component={Exception} />
                </Switch>
              )}
            />
            <Route component={Exception} />
          </Switch>
          <Typography className='copyright' variant='caption'>
            Copyright © 2019 Masato Nomiyama
          </Typography>
        </div>
      </div>
    )
  }
}
