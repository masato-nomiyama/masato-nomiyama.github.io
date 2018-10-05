// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Exception from '../component/Exception'

const InternalWorks = props => {
  const { match } = this.props
  return (
    <Switch>
      <Route component={Exception} />
    </Switch>
  )
}

export default InternalWorks
