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
      <Typography variant='title'>
        Creative Technologist / Artist<br/><br/>
      </Typography>
      <Typography variant='body2'>
        ひとを知り、未来をつくる。
        <br/><br/>
        ひとの判断能力や感情の拡張をテーマに、テクノロジーのもたらす未来の可能性を考える。
        ソフトウェア・ハードウェア問わず、幅広い分野でコンセプトの構築とプロトタイプの制作を手がける。
        <br/><br/>
        特にシステムデザインとメディアアートの制作を専門とする。
        システムデザインでは、テクノロジーと親和性をもったUI/UXをデザインすることで、ひとの思考や判断の拡張方法を考える。
        一方メディアアートの制作では、水や砂といった自然物にテクノロジーを埋め込むことで、ひとの感情の機微や生の本質を浮き彫りにする。
        <br/><br/>
        2018年に知能機械情報学を修了し東京大学大学院を卒業。同年よりTakramに参加。
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
