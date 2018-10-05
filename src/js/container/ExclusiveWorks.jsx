// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import Xnavi from './Xnavi'

export default class ExclusiveWorks extends PureComponent {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route
          exact path={`${match.url}/xnavi`}
          render={props => (
            <Xnavi className='xnavi' {...props} />
          )}
        />
        <Route component={App} />
      </Switch>
    )
  }
}
