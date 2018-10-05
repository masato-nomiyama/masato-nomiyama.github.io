// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import '../css/main.styl'
import { theme } from './theme'
import App from './container/App'
import ExclusiveWorks from './container/ExclusiveWorks'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter hashType='noslash'>
      <Switch>
        <Route path='/works' component={ExclusiveWorks} />
        <Route component={App} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
)
