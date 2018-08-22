// Copyright (C) 2018-Present Masato Nomiyama

import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FAFAFA',
      main: '#424242',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#18FFFF',
      main: '#00E5FF',
      dark: '#00B8D4',
      contrastText: '#000000',
    },
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
    'display1': {
      fontSize: '1.4em',
    },
    'title': {
      fontSize: '1.05em',
    },
    'body2': {
      fontSize: '0.85em',
    },
  },
})
