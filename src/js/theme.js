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
      fontSize: '2.5em',
    },
    display3: {
      fontSize: '2.25em',
    },
    display2: {
      fontSize: '2em',
    },
    display1: {
      fontSize: '1.55em',
    },
    headline: {
      fontSize: '1.15em',
    },
    title: {
      color: grey[800],
      fontSize: '1.05em',
      fontWeight: 'bold',
    },
    subheading: {
      color: grey[800],
      fontSize: '0.95em',
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
      fontSize: '0.8em',
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
    height: '2px',
  },
  verticalLine: {
    background: theme.palette.primary.A400,
  },
  horizontalLine: {
    background: theme.palette.primary.A400,
  },
  highlightBody:  {
    transition: 'color 0.1s ease',
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.secondary[900],
    },
  },
}
