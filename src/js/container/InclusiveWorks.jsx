// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import Exception from '../component/Exception'

export default class InternalWorks extends PureComponent {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route component={Exception} />
      </Switch>
    )
  }
}
