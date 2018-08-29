// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { theme } from '../theme'
import logo from '../../img/logo.png'

const styles = theme => {
  return {
    line: {
      background: `linear-gradient(
        45deg,
        ${theme.palette.secondary.A200},
        ${theme.palette.secondary.A400}
      )`
    },
    background: {
      backgroundColor: theme.palette.primary[50],
    },
    titleText: {
      color: '#000',
      letterSpacing: '2.5px',
    },
    menuText: {
      color: theme.palette.primary[800],
      fontVariantLigatures: 'none',
      letterSpacing: '1.5px',
    },
  }
}

class Menu extends PureComponent {
  renderItem({ text }) {
    return (
      <a href={`#${text}`} className='menu-content-item'>
        <div className='menu-content-item'>
          <Typography
            className={[
              this.props.classes.menuText,
              'menu-content-item-text',
            ].join(' ')}
            variant='body2'
          >
            {text}
          </Typography>
          <div
            className={[
              this.props.classes.line,
              'menu-content-item-line',
            ].join(' ')}
          />
        </div>
      </a>
    )
  }

  render() {
    return (
      <div
        className={[
          this.props.classes.background,
          this.props.className,
        ].join(' ')}
      >
        <a href='index.html'>
          <div className='menu-header'>
            <img
              className='menu-header-logo'
              src={logo}
              alt='Masato Nomiyama'
            />
            <Typography
              className={this.props.classes.titleText}
              variant='title'
            >
              Masato Nomiyama
            </Typography>
          </div>
        </a>
        <div className='menu-content'>
          {this.renderItem({ text: 'profile' })}
          {this.renderItem({ text: 'biography' })}
          {this.renderItem({ text: 'works' })}
          {this.renderItem({ text: 'achievements' })}
          {this.renderItem({ text: 'contact' })}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Menu)
