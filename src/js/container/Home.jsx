// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import Profile from '../component/Profile'

const homeStyle = theme => {
  return {
    ...style,
    header: {
      color: theme.palette.primary[800],
      fontVariantLigatures: 'none',
      letterSpacing: '1.8px',
    },
  }
}

class Home extends PureComponent {
  renderHeader({ header }) {
    return (
      <div className='home-header'>
        <Typography
          className={this.props.classes.header}
          variant='headline'
        >
          {header}
        </Typography>
        <div
          className={[
            this.props.classes.line,
            'home-header-line',
          ].join(' ')}
        />
      </div>
    )
  }

  renderItem({ header }) {
    const className= 'home-item'
    switch(header) {
      case 'profile':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <Profile className={header} />
          </div>
        )
      case 'works':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div />
          </div>
        )
      case 'biography':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div />
          </div>
        )
      case 'achievements':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div />
          </div>
        )
      case 'contact':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div />
          </div>
        )
      default:
        return (
          <div />
        )
    }
  }

  render() {
    return (
      <div className={this.props.className}>
       {this.renderItem({ header: 'profile' })}
       {this.renderItem({ header: 'works' })}
       {this.renderItem({ header: 'biography' })}
       {this.renderItem({ header: 'achievements' })}
       {this.renderItem({ header: 'contact' })}
      </div>
    )
  }
}

export default withStyles(homeStyle)(Home)
