// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import Profile from '../component/Profile'
import WorksList from '../component/WorksList'

const homeStyle = theme => {
  return {
    ...style,
    header: {
      color: theme.palette.primary[800],
      fontVariantLigatures: 'none',
      letterSpacing: '1.8px',
    },
    highlightBody:  {
      transition: 'color 0.1s ease',
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
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
            <Profile className={`home-${header}`} />
          </div>
        )
      case 'works':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <WorksList className={`home-${header}`} />
          </div>
        )
      case 'biography':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div>
              <Typography variant='body2'>
                coming soon
              </Typography>
            </div>
          </div>
        )
      case 'achievements':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div>
              <Typography variant='body2'>
                coming soon
              </Typography>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className={className} id={header}>
            {this.renderHeader({ header })}
            <div className='home-contact'>
              <Typography className='home-contact-title' variant='title'>
                Email
              </Typography>
              <Typography className='home-contact-body' variant='body2'>
                nomy[at]takram.com
              </Typography>
            </div>
            <div className='home-contact'>
              <Typography className='home-contact-title' variant='title'>
                Twitter
              </Typography>
              <a href='https://twitter.com/masatonomiyama' target='_blank'>
                <Typography
                  className={[
                    'home-contact-body',
                    this.props.classes.highlightBody,
                  ].join(' ')}
                  variant='body2'
                >
                  @masatonomiyama
                </Typography>
              </a>
            </div>
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
