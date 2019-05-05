// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MediaQuery from 'react-responsive'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import logo from '../../img/logo.png'

const titleStyle = {
  color: '#000',
  fontWeight: 'normal',
  letterSpacing: '2.5px',
}
const menuStyle = theme => {
  return {
    ...style,
    background: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      ...titleStyle
    },
    list: {
      color: theme.palette.primary[800],
      fontWeight: 'normal',
      fontVariantLigatures: 'none',
      letterSpacing: '1.5px',
    },
    headerTitle: {
      ...titleStyle,
      flexGrow: 1,
    },
  }
}

class Menu extends PureComponent {
  renderTitle() {
    return (
      <Link to='/'>
        <div className='menu-title'>
          <img
            className='menu-title-logo'
            src={logo}
            alt='Masato Nomiyama'
          />
          <Typography
            className={this.props.classes.title}
            variant='headline'
          >
            Masato Nomiyama
          </Typography>
        </div>
      </Link>
    )
  }

  renderListItem({ text }) {
    return (
      <HashLink to={`/#${text}`}>
        <div className='menu-list-item'>
          <Typography
            className={[
              this.props.classes.list,
              'menu-list-item-text',
            ].join(' ')}
            variant='title'
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
      </HashLink>
    )
  }

  renderHeader() {
    return (
      <AppBar
        className={this.props.classes.background}
        elevation={0}
        position='relative'
      >
        <Toolbar>
          <Typography
            className={[
              'menu-header-title',
              this.props.classes.headerTitle,
            ].join(' ')}
            variant='title'
          >
            Masato Nomiyama
          </Typography>
          <IconButton
            color='inherit'
            aria-label='Menu'
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <MediaQuery query='(max-width: 600px)'>
          {this.renderHeader()}
        </MediaQuery>
        <MediaQuery query='(min-width: 600px)'>
          {this.renderTitle()}
          <div className='menu-list'>
            {this.renderListItem({ text: 'profile' })}
            {this.renderListItem({ text: 'works' })}
            {this.renderListItem({ text: 'biography' })}
            {this.renderListItem({ text: 'achievements' })}
            {this.renderListItem({ text: 'contact' })}
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default withStyles(menuStyle)(Menu)
