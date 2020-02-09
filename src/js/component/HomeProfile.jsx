// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import image from '../../img/profile.png'
import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
    profileBody: {
      fontFamily: [
        'YuMincho',
      ],
      fontWeight: 'normal',
    },
  }
}

const renderCopywrite = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title' className={props.classes.profileBody}>
        ひとに寄り添うエンジニアリング<br/><br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        私たちは私たちが思うよりずっと、<br/>
        感性のままに暮らしている。<br/>
        無意識のうちに身のまわりのものに感謝をし、<br/>
        突き動かされるように想いを誰かに伝え、<br/>
        日々の些細な変化に風情を感じている。<br/>
        <br/>
        もしこうした感性をエンジニアリングできたなら、<br/>
        ひとはもっと自由で豊かに暮らせるのではないだろうか。<br/>
        <br/>
        この問いに挑むために考えるのは、<br/>
        心の「うつろい」と「かたち」。<br/>
        うつろう心を映しだすことで感性の力を拡張し、<br/>
        心にかたちを与えることで想いと現実の境界を融かす。<br/>
        <br/>
        ひとに寄り添うエンジニアリングで、<br/>
        自由で豊かな暮らしをデザインする。<br/>
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
