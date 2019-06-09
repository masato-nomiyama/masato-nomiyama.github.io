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
        ヒトを知り、ひとをつくる。<br/><br/>
      </Typography>
      <Typography variant='body2' className={props.classes.profileBody}>
        ヒトはなぜ、旅に出たくなるのか。<br/>
        ヒトはなぜ、身のまわりの物に生を感じるのか。<br/>
        ヒトはなぜ、想いを誰かに伝えたくなるのか。<br/>
        実は私たちは、自分のことをよく知らない。<br/>
        しかし、だからこそヒトの可能性は未知数だともいえる。<br/>
        <br/>
        もし、ヒトの限界を決めるメカニズムを解明し、<br/>
        もし、テクノロジーでその限界を拡張できたなら、<br/>
        もっと自由に、もっと創造的に、<br/>
        ヒトはその可能性を引き出せるのではないだろうか。<br/>
        <br/>
        この問いに挑むために考えるのは、<br/>
        こころを「澄まし」、こころを「溶かす」テクノロジー。<br/>
        知覚や認知の限界を広げることで、これまで得られなかった新たな気づきにこころを澄まし、<br/>
        認知や感情にかたちを与えることで、想いと現実の境界を溶かす。<br/>
        <br/>
        生物であるヒトを超え、もっと自由でゆたかなひとへ。<br/>
        そんなひとであふれる未来をつくる。
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
