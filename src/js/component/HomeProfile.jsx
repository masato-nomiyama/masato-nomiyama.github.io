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
      margin: '0 0 6px',
    },
    profileBody: {
      margin: '0 0 12px',
    },
  }
}

const renderCopywrite = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title' className={props.classes.profileTitle}>
        感性のエンジニアリング<br/><br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        私たちの暮らしは<br/>
        私たちの持つ感性に根ざしている<br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        突き動かされるように誰かに想いを伝えたり<br/>
        日々の些細な変化に風情を感じたり<br/>
        偶然の出会いに胸を打たれたり<br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        もしこうした感性をエンジニアリングできたら<br/>
        ひとはもっと豊かに暮らせるのではないだろうか<br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        もし、伝えきれない心の機微まで分かち合えたら<br/>
        もし、忙しい日々のなかでも環境の変化を楽しめたら<br/>
        もし、感動的な体験を前もって計画できたら<br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        ひとに寄り添う「感性のエンジニアリング」で<br/>
        暮らしをもっと豊かに変えていく<br/>
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
