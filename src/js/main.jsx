// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import '../css/main.styl'
import { theme } from './theme'
import Home from './component/Home'

function main() {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Home/>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
}

main()
