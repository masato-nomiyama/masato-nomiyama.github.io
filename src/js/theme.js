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
      '"Helvetica Neue"',
      'a-otf-gothic-bbb-pr6n',
      'Arial', 'sans-serif',
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
      fontStyle: 'normal',
      fontWeight: 400,
    },
    headline: {
      fontSize: '1.15em',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    title: {
      color: grey[800],
      fontSize: '1.05em',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    subheading: {
      color: grey[800],
      fontSize: '0.85em',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body2: {
      color: grey[600],
      fontSize: '0.8em',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.8em',
      fontStyle: 'normal',
      fontWeight: 400,
      textAlign: 'right',
    },
    caption: {
      fontSize: '0.75em',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.8em',
      fontStyle: 'normal',
      fontWeight: 400,
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
