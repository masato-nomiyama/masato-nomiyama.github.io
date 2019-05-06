// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import image from '../../img/profile.png'
import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
  }
}

const renderCopywrite = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='body2'>
        ひとを知り、人をつくる。<br/>
        <br/>
        私たちは自分のことでさえよく知らない。<br/>
        なぜ嬉しく感じるのか、なぜ話したくなるのか、なぜ決断できるのか。<br/>
        そこにはひとのこころのメカニズムがある。<br/>
        もしそれを解明しテクノロジーで拡張することができれば、<br/>
        ひとは自分の限界を超えて、<br/>
        もっと自由に人らしく活動できるのではないだろうか。<br/>
        <br/>
        『こころの拡張』と『こころの投影』、問いに挑むための2つのアプローチ。<br/>
        『こころの拡張』では、ひとの内にある知覚や認知そのものを拡張する。<br/>
        『こころの投影』では、ひとの知覚や認知の様子を外の環境に投影する。<br/>
        この2つのアプローチから、ひとの在るべき姿を考え人の新しい姿をつくる。<br/>
        <br/>
        ソフトウェア・ハードウェア問わず、幅広い分野でコンセプトの構築とプロトタイプの制作を手がける。<br/>
        2018年に知能機械情報学を修了し東京大学大学院を卒業。同年よりTakramに参加。<br/>
      </Typography>
    </div>
  )
}

const renderImage = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title'>
        Creative Technologist / Artist<br/><br/>
      </Typography>
      <img
        className={`${props.className}-image`}
        src={image}
        alt='Profile'
      />
    </div>
  )
}

const Profile = props => {
  return (
    <div className={props.className}>
      {renderImage(props)}
      {renderCopywrite(props)}
    </div>
  )
}

export default withStyles(customStyle)(Profile)
