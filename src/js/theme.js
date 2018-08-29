// Copyright (C) 2018-Present Masato Nomiyama

import { createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import grey from '@material-ui/core/colors/grey'

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: cyan,
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Noto Sans"',
      '"Helvetica Neue"',
      'Helvetica',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    display1: {
      fontSize: '1.4em',
    },
    title: {
      fontSize: '1.05em',
    },
    body2: {
      fontSize: '0.85em',
    },
  },
})
