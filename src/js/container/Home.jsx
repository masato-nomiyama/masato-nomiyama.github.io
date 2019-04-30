// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import HomeContact from '../component/HomeContact'
import HomeProfile from '../component/HomeProfile'
import HomeWorks from '../component/HomeWorks'

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
    return (
      <div className={className} id={header}>
        {this.renderHeader({ header })}
        {(() => {
          switch(header) {
            case 'profile': return (
              <HomeProfile className={`home-${header}`} />
            )
            case 'works': return (
              <HomeWorks className={`home-${header}`} />
            )
            case 'biography': return (
              <div>
                <Typography variant='body2'>
                  coming soon
                </Typography>
              </div>
            )
            case 'achievements': return (
              <div>
                <Typography variant='body2'>
                  coming soon
                </Typography>
              </div>
            )
            case 'contact': return (
              <HomeContact className={`home-${header}`} />
            )
            default:
              return (
                <div />
              )
          }
        })()}
      </div>
    )
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
