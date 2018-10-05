// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import profile from '../../img/profile.png'
import { style } from '../theme'

export default class Xnavi extends PureComponent {
  render() {
    return (
      <div className='xnavi'>
        <img
          className='xnavi-image'
          src={profile}
          alt='Xnavi'
        />
        <div className='xnavi-movie'>
          <YouTube
            videoId='08ni9HIG2YA'
            opts={{
              playerVars: { autoplay: 1 },
            }}
            onReady={() => {}}
          />
        </div>
        <div className='xnavi-content'>
        </div>
      </div>
    )
  }
}
