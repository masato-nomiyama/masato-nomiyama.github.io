// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import '../css/main.styl'
import { theme } from './theme'
import App from './container/App'

function main() {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  )
}

main()
