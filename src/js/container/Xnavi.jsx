// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import conceptImage from '../../img/xnavi-concept.png'
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
    body: {
      ...bodyStyle,
      color: '#fff',
      fontWeight: 'normal',
    },
    bodyLeft: {
      ...bodyStyle,
      color: '#fff',
      fontWeight: 'normal',
      textAlign: 'start',
    },
    bodyDark: {
      ...bodyStyle,
      color: '#000',
      fontWeight: 'bold',
    },
    bodyHighlight: {
      ...bodyStyle,
      color: '#fff',
      fontWeight: 'normal',
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: 'color 0.2s ease',
      },
    },
    bodyThin: {
      ...bodyStyle,
      color: '#fff',
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
              Xnavi helps tourists make a trip plan based on their favorite experiences.
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
            className={classes.bodyDark}
            variant='title'
          >
            It is a travel planning system for active planners to meet travel needs,<br/>
            such as "a demand to go apple picking" and "a demand to relax in hot springs after skiing."
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
            className={classes.bodyDark}
            variant='title'
          >
            Those needs are classified into ones about "travel experiences" and "travel sequences."<br/>
            Xnavi offers experience flows, which are basic units of a travel plan.
          </Typography>
        </div>
        <div
          className={[
            'xnavi-page',
            classes.background3,
          ].join(' ')}
        >
          <YouTube
            videoId='08ni9HIG2YA'
            opts={{
              height: '337.5px',
              width: '600px',
              playerVars: { autoplay: 0, rel: 0 },
            }}
          />
          <Typography
            className={classes.bodyDark}
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
              classes.body
            ].join(' ')}
            variant='title'
          >
            <a
              className={classes.bodyHighlight}
              href='https://masatonomiyama.com'
              target='_blank'
            >
              Masato Nomiyama
            </a>　　　　<a
              className={classes.bodyHighlight}
              href='https://totakke.net'
              target='_blank'
            >
              Toshiki Takeuchi
            </a>　　　　<a
              className={classes.bodyHighlight}
              href='https://masatonomiyama.com'
              target='_blank'
            >
              Hiroyuki Onimaru
            </a>
          </Typography>
          <Typography
            className={[
              'xnavi-page-title',
              classes.body
            ].join(' ')}
            variant='title'
          >
            <a
              className={classes.bodyHighlight}
              href='https://www.cyber.t.u-tokyo.ac.jp'
              target='_blank'
            >
              Tomohiro Tanikawa
            </a>　　　　<a
              className={classes.bodyHighlight}
              href='https://www.cyber.t.u-tokyo.ac.jp/~narumi/'
              target='_blank'
            >
              Takuji Narumi
            </a>　　　　<a
              className={classes.bodyHighlight}
              href='https://twitter.com/_anohito'
              target='_blank'
            >
              Michitaka Hirose
            </a><br/><br/>
          </Typography>
          <div>
            <a href='http://ubicomp.org/ubicomp2018/' target='_blank'>
              <img
                className='xnavi-page-logo'
                src={ubicompLogo}
                alt='UbiComp2018'
              />
            </a>
            <a href='https://www.u-tokyo.ac.jp' target='_blank'>
              <img
                className='xnavi-page-logo'
                src={utLogo}
                alt='The University of Tokyo'
              />
            </a>
            <a href='https://www.cyber.t.u-tokyo.ac.jp' target='_blank'>
              <img
                className='xnavi-page-logo'
                src={cyberLogo}
                alt='Cyber Interface Lab.'
              />
            </a>
          </div>
          <Typography
            className={classes.bodyThin}
            variant='body2'
          >
            "Xnavi: Travel Planning System Based on Experience Flows"<br/>
            Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 2.1 (2018)
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(xnaviStyle)(Xnavi)
