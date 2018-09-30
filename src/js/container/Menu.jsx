// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style, theme } from '../theme'
import logo from '../../img/logo.png'

const menuStyle = theme => {
  return {
    ...style,
    background: {
      backgroundColor: theme.palette.background.default,
    },
    menuTitle: {
      color: '#000',
      letterSpacing: '2.5px',
    },
    menuList: {
      color: theme.palette.primary[800],
      fontVariantLigatures: 'none',
      letterSpacing: '1.5px',
    },
  }
}

class Menu extends PureComponent {
  renderListItem({ text }) {
    return (
      <a href={`#${text}`}>
        <div className='menu-list-item'>
          <Typography
            className={[
              this.props.classes.menuList,
              'menu-list-item-text',
            ].join(' ')}
            variant='body2'
          >
            {text}
          </Typography>
          <div
            className={[
              this.props.classes.line,
              'menu-list-item-line',
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
        <a href=''>
          <div className='menu-title'>
            <img
              className='menu-title-logo'
              src={logo}
              alt='Masato Nomiyama'
            />
            <Typography
              className={this.props.classes.menuTitle}
              variant='title'
            >
              Masato Nomiyama
            </Typography>
          </div>
        </a>
        <div className='menu-list'>
          {this.renderListItem({ text: 'profile' })}
          {this.renderListItem({ text: 'biography' })}
          {this.renderListItem({ text: 'works' })}
          {this.renderListItem({ text: 'achievements' })}
          {this.renderListItem({ text: 'contact' })}
        </div>
      </div>
    )
  }
}

export default withStyles(menuStyle)(Menu)
