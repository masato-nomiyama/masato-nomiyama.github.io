// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import HomeAchievement from '../component/HomeAchievement'
import HomeBiography from '../component/HomeBiography'
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
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'delighters.js'
    script.id = 'delighters'
    document.getElementsByTagName('head')[0].appendChild(script)
  }

  componentWillUnmount() {
    document.getElementsByTagName('head')[0].removeChild(
      document.getElementById('delighters')
    )
  }

  renderHeader({ header }) {
    return (
      <div className='home-header' data-delighter>
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
    return (
      <div className='home-item' id={header} data-delighter>
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
              <HomeBiography className={`home-${header}`} />
            )
            case 'achievements': return (
              <HomeAchievement className={`home-${header}`} />
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
