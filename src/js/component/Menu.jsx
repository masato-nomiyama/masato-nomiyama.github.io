// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { theme } from '../theme'
import logo from '../../img/logo.png'

const styles = theme => ({
  title: {
    color: theme.palette.primary.dark,
    letterSpacing: '2.5px',
  },
  body2: {
    color: theme.palette.primary.main,
    fontVariantLigatures: 'none',
    letterSpacing: '1.5px',
  }
})

class Menu extends PureComponent {
  renderItem({ text }) {
    return (
      <a href={`#${text}`} className='menu-content-item'>
        <div className='menu-content-item'>
          <Typography
            className={`${this.props.classes.body2} menu-content-item-text`}
            variant='body2'
          >
            {text}
          </Typography>
          <div
            className='menu-content-item-line'
            style={{background: `linear-gradient(
              45deg,
              ${theme.palette.secondary.light},
              ${theme.palette.secondary.main}
            )`}}
          />
        </div>
      </a>
    )
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{ backgroundColor: theme.palette.primary.light }}
      >
        <a href='index.html'>
          <div className='menu-header'>
            <img
              className='menu-header-logo'
              src={logo}
              alt='Masato Nomiyama'
            />
            <Typography
              className={this.props.classes.title}
              variant='title'
            >
              Masato Nomiyama
            </Typography>
          </div>
        </a>
        <div className='menu-content'>
          {this.renderItem({ url: 'index.html', text: 'profile' })}
          {this.renderItem({ url: 'index.html', text: 'biography' })}
          {this.renderItem({ url: 'index.html', text: 'works' })}
          {this.renderItem({ url: 'index.html', text: 'achievements' })}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Menu)
