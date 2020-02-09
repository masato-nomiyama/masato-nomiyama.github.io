// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import image from '../../img/morimori.png'
import Works, { worksStyle } from '../container/Works'

const customStyle = theme => {
  return {
    ...style,
    ...worksStyle(theme),
  }
}

class Morimori extends Works {
  constructor() {
    super()
    this.title = '筋肉プリクラ morimori'
    this.images = [image]
    this.descriptions = [
      'ここ数年、自撮りや恋人との 2 ショットといった写真を SNS 上で公開する人が多く散見される。こういった人々は、周囲に自身のステータスを認めてもらうことで承認欲求を満たしている。筋肉ももちろんその例外ではない。「筋トレ」と検索すれば筋肉を誇示する人々と繋がることができる。',
      '筋肉プリクラ morimoriはこのような人々の承認欲求を満たしてくれる。筋肉の隆起に合わせて筋肉のコントラストやサイズ感を操作することで、筋肉の外形の特徴を損なうことなく自然なボリュームアップを実現し、筋肉そのままの魅力を引き出すことができる。',
      'ユーザは、自身の筋肉に多くの「いいね」をもらうことで、筋トレへのモチベーションを高めることができる。',
    ]
    this.creators = [
      '野見山真人 / 東京大学大学院 情報理工学系研究科',
    ]
  }
}

export default withStyles(customStyle)(Morimori)
