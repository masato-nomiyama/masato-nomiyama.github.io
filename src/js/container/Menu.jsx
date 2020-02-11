// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import MediaQuery from 'react-responsive'
import MaterialIcon from '@material/react-material-icon'
import Toolbar from '@material-ui/core/Toolbar'
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import logo from '../../img/logo.png'

const titleStyle = {
  color: '#000',
  letterSpacing: '2.5px',
}
const menuStyle = theme => {
  return {
    ...style,
    background: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      ...titleStyle,
    },
    list: {
      color: theme.palette.primary[800],
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
  renderTitle({ isMobile }) {
    const prefix = isMobile ? 'mobile-menu' : 'menu'
    return (
      <Link to='/'>
        <div className={`${prefix}-title`}>
          <img
            className={`${prefix}-title-logo`}
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

  renderListItem({ isMobile, text }) {
    const prefix = isMobile ? 'mobile-menu' : 'menu'
    return (
      <HashLink to={`/#${text}`}>
        <div
          className={`${prefix}-list-item`}
          onClick={() => {this.props.onClose()}}
        >
          <Typography
            className={[
              this.props.classes.list,
              `${prefix}-list-item-text`,
            ].join(' ')}
            variant='title'
          >
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </Typography>
          <div
            className={[
              this.props.classes.line,
              `${prefix}-list-item-line`,
            ].join(' ')}
          />
        </div>
      </HashLink>
    )
  }

  renderList({ isMobile }) {
    return (
      <div>
        {this.renderTitle({ isMobile })}
        <div className='menu-list'>
          {this.renderListItem({ isMobile, text: 'profile' })}
          {this.renderListItem({ isMobile, text: 'works' })}
          {this.renderListItem({ isMobile, text: 'biography' })}
          {this.renderListItem({ isMobile, text: 'achievements' })}
          {this.renderListItem({ isMobile, text: 'contact' })}
        </div>
      </div>
    )
  }

  renderHeader() {
    return (
      <div>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon='menu'
                  onClick={() => {this.props.onOpen()}}
                />
              </TopAppBarIcon>
              <TopAppBarTitle>Masato Nomiyama</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
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
        {this.props.shouldRenderList ? this.renderList({ isMobile: true }) : (
          <div>
            <MediaQuery query='(max-width: 600px)'>
              {this.renderHeader()}
            </MediaQuery>
            <MediaQuery query='(min-width: 600px)'>
              {this.renderList({ isMobile: false })}
            </MediaQuery>
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(menuStyle)(Menu)
