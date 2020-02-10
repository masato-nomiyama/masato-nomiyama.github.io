// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import image from '../../img/profile.png'
import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
    profileTitle: {
      fontFamily: ['YuMincho'],
      fontWeight: 'normal',
      margin: '0 0 12px',
    },
    profileBody: {
      fontFamily: ['YuMincho'],
      fontWeight: 'normal',
    },
  }
}

const renderCopywrite = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title' className={props.classes.profileTitle}>
        ひとに寄り添うエンジニアリング<br/><br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        私たちの行動や暮らしは、<br/>
        私たちが思う以上に感性に根ざしている。<br/>
        <br/>
        突き動かされるように想いを誰かに伝え、<br/>
        旅の偶然の出会いに胸を打たれ、<br/>
        日々の些細な変化に風情を感じる。<br/>
        <br/>
        もしひとの持つ感性をエンジニアリングできたなら、<br/>
        ひとはもっと豊かに、創造的に暮らせるのではないだろうか。<br/>
        <br/>
        鍵となるのは心の「かたち」と「うつろい」。<br/>
        心にかたちを与えることで想いと現実の境界を融かし、<br/>
        うつろう心を捉えることで感性の力を拡張する。<br/>
        <br/>
        感性に根ざしたエンジニアリングで、<br/>
        ひとの暮らしを、もっと豊かに。<br/>
      </Typography>
    </div>
  )
}

const renderImage = props => {
  return (
    <div className={`${props.className}-item`}>
      <img
        className={`${props.className}-image`}
        src={image}
        alt='Profile'
      />
      <Typography variant='body2'>
        Creative Technologist / Artist<br/>
      </Typography>
    </div>
  )
}

const Profile = props => {
  return (
    <div className={props.className}>
      {renderCopywrite(props)}
      {renderImage(props)}
    </div>
  )
}

export default withStyles(customStyle)(Profile)
