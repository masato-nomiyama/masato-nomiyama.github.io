// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import conceptImage from '../../img/xnavi-concept.png'
import conceptImage2 from '../../img/xnavi-concept2.png'
import cyberLogo from '../../img/cyber-logo.png'
import ubicompLogo from '../../img/ubicomp-logo.png'
import utLogo from '../../img/ut-logo.png'
import appImage from '../../img/xnavi-app.png'
import { style } from '../theme'

const bodyStyle = {
  lineHeight: '1.5em',
  letterSpacing: '0.5px',
  textAlign: 'center',
}
const bodyHighlightStyle = {
  ...bodyStyle,
  color: '#fff',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '#fb4145',
  },
}
const titleStyle = {
  fontWeight: 'lighter',
  letterSpacing: '2px',
}
const xnaviStyle = theme => {
  return {
    ...style,
    background1: {
      backgroundColor: theme.palette.primary[50],
    },
    background2: {
      backgroundColor: theme.palette.primary[100],
    },
    background3: {
      backgroundColor: theme.palette.primary[200],
    },
    background4: {
      backgroundColor: theme.palette.primary[300],
    },
    backgroundAlpha: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    backgroundDark: {
      backgroundColor: theme.palette.primary[900],
    },
    backgroundDark2: {
      backgroundColor: theme.palette.primary[900],
    },
    title: {
      ...titleStyle,
      color: '#fff',
    },
    titleDark: {
      ...titleStyle,
      color: '#000',
    },
    titleNarrow: {
      ...titleStyle,
      color: '#fff',
      letterSpacing: '1px',
    },
    bodyLeft: {
      ...bodyStyle,
      color: '#fff',
      fontWeight: 'lighter',
      textAlign: 'start',
    },
    bodyDark: {
      ...bodyStyle,
      color: '#000',
      fontWeight: 'normal',
    },
    bodyHighlight: {
      ...bodyHighlightStyle,
      fontWeight: 'normal',
    },
    bodyHighlightThin: {
      ...bodyHighlightStyle,
      fontWeight: 'lighter',
    },
  }
}

class Xnavi extends PureComponent {
  componentDidMount() {
    document.title = 'Xnavi'
  }

  render() {
    const { classes } = this.props
    return (
      <div className='xnavi'>
        <div
          className={[
            'xnavi-page',
            'xnavi-header',
            classes.backgroundDark,
          ].join(' ')}
        >
          <Typography className={classes.title} variant='display2'>
            Xnavi
          </Typography>
        </div>
        <div className='xnavi-visual'>
          <div className={[
              'xnavi-visual-copy',
              classes.backgroundAlpha,
            ].join(' ')}>
            <Typography
              className={[
                'xnavi-visual-copy-title',
                classes.titleNarrow,
              ].join(' ')}
              variant='display1'
            >
              Planning a trip roughly at will.
            </Typography>
            <Typography
              className={classes.bodyLeft}
              variant='title'
            >
              Xnavi meets travel needs based on experiences.
            </Typography>
          </div>
          <img
            className='xnavi-visual-app'
            src={appImage}
            alt='Xnavi'
          />
        </div>
        <div
          className={[
            'xnavi-page',
            classes.background1,
          ].join(' ')}
        >
          <Typography
            className={[
              'xnavi-page-title',
              classes.titleDark,
            ].join(' ')}
            variant='display2'
          >
            Xnavi
          </Typography>
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='title'
          >
            Xnavi is a travel planning system.
          </Typography>
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='title'
          >
            It helps find good travel experiences and travel sequences.
          </Typography>
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='body2'
          >
            such as "going apple picking" and "relaxing in hot springs after skiing"
          </Typography>
        </div>
        <div
          className={[
            'xnavi-page',
            classes.background2,
          ].join(' ')}
        >
          <img
            className='xnavi-page-image'
            src={conceptImage}
            alt='Concept'
          />
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='title'
          >
            Xnavi offers experience flows,<br/>
            which include two travel experiences and one travel sequence.
          </Typography>
        </div>
        <div
          className={[
            'xnavi-page',
            classes.background3,
          ].join(' ')}
        >
          <img
            className='xnavi-page-image'
            src={conceptImage2}
            alt='Concept'
          />
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='title'
          >
            Tourists can make good itineraries<br/>
            by connecting travel experiences repeatedly.
          </Typography>
        </div>
        <div
          className={[
            'xnavi-page',
            classes.background4,
          ].join(' ')}
        >
          <YouTube
            className='xnavi-page-movie'
            videoId='08ni9HIG2YA'
            opts={{
              height: 360,
              width: 640,
              playerVars: { autoplay: 0, rel: 0 },
            }}
          />
          <Typography
            className={[
              'xnavi-page-body',
              classes.bodyDark,
            ].join(' ')}
            variant='body2'
          >
            1. SELECT KEYWORDS　/　2. SELECT TAG FLOWS　/　3. PLAN A TRIP
          </Typography>
        </div>
        <div
          className={[
            'xnavi-page',
            'xnavi-publication',
            classes.backgroundDark2,
          ].join(' ')}
        >
          <Typography
            className={[
              'xnavi-page-title',
              classes.title,
            ].join(' ')}
            variant='title'
          >
            more information...<br/><br/>
          </Typography>
          <div className='xnavi-publication-name'>
            <a href='https://masatonomiyama.com' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Masato Nomiyama
              </Typography>
            </a>
            <a href='https://totakke.net' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Toshiki Takeuchi
              </Typography>
            </a>
            <a href='https://global.honda/' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Hiroyuki Onimaru
              </Typography>
            </a>
            <a href='https://www.cyber.t.u-tokyo.ac.jp' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Tomohiro Tanikawa
              </Typography>
            </a>
            <a href='https://www.cyber.t.u-tokyo.ac.jp/~narumi' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Takuji Narumi
              </Typography>
            </a>
            <a href='https://twitter.com/_anohito' target='_blank'>
              <Typography
                className={[
                  'xnavi-page-title',
                  classes.bodyHighlight
                ].join(' ')}
                variant='title'
              >
                Michitaka Hirose
              </Typography>
            </a>
          </div>
          <div className='xnavi-publication-logo'>
            <a href='http://ubicomp.org/ubicomp2018/' target='_blank'>
              <img
                className='xnavi-publication-logo-image'
                src={ubicompLogo}
                alt='UbiComp2018'
              />
            </a>
            <a href='https://www.u-tokyo.ac.jp' target='_blank'>
              <img
                className='xnavi-publication-logo-image'
                src={utLogo}
                alt='The University of Tokyo'
              />
            </a>
            <a href='https://www.cyber.t.u-tokyo.ac.jp' target='_blank'>
              <img
                className='xnavi-publication-logo-image'
                src={cyberLogo}
                alt='Cyber Interface Lab.'
              />
            </a>
          </div>
          <a href='https://dl.acm.org/citation.cfm?id=3191759' target='_blank'>
            <Typography
              className={classes.bodyHighlightThin}
              variant='body2'
            >
              "Xnavi: Travel Planning System Based on Experience Flows"<br/>
              Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 2.1 (2018)
            </Typography>
          </a>
        </div>
      </div>
    )
  }
}

export default withStyles(xnaviStyle)(Xnavi)
