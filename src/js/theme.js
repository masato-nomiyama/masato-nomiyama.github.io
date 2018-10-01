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
    display4: {
      fontSize: '2em',
    },
    display3: {
      fontSize: '1.8em',
    },
    display2: {
      fontSize: '1.6em',
    },
    display1: {
      fontSize: '1.4em',
    },
    headline: {
      fontSize: '1.15em',
    },
    title: {
      color: grey[800],
      fontSize: '0.9em',
      fontWeight: 'bold',
    },
    body2: {
      color: grey[600],
      fontSize: '0.8em',
    },
    body1: {
      fontSize: '0.8em',
      textAlign: 'right',
    },
    caption: {
      fontSize: '0.75em',
    },
    button: {
      fontSize: '0.85em',
    },
  },
})

export const style = {
  line: {
    background: `linear-gradient(
      90deg,
      ${theme.palette.secondary.A200},
      ${theme.palette.secondary.A400}
    )`,
    margin: '2px 0 0',
    height: '1px',
  },
}
