// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../container/App'
import Xnavi from '../container/Xnavi'

const ExclusiveWorks = props => {
  const { match } = props
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

export default ExclusiveWorks
