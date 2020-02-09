// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import image from '../../img/my-feeling-cant-reach-you-detail.png'
import technologyImage from '../../img/my-feeling-cant-reach-you-technology.png'
import Works, { worksStyle } from '../container/Works'

const customStyle = theme => {
  return {
    ...style,
    ...worksStyle(theme),
  }
}

class MyFeelingCantReachYou extends Works {
  constructor() {
    super()
    this.title = '伝わらないこの気持ち'
    this.images = [image]
    this.descriptions = [
      'SNS でいつでも人と繋がることができるようになった今、伝えたい気持ちは書き言葉となって、相手のもとに届く機会が増えた。しかし「楽しい」と伝えたいとき、はしゃぐように大きくなる声が、上ずるように高くなる声が、想いを十分に伝えてくれているのではないだろうか。',
      'この作品では、周波数や振幅といった声の特徴量を抽出し、その特徴量からイントネーションのみ再現した音声を合成している。再生された音声の振動により、鏡の上の水は揺れ、そこに投影された字幕も共に揺らめく。',
      '伝えようとする声が大きくなればなるほど、言葉はその形を失う。しかし水面が描く波紋は、雄弁にその想いを代弁してくれるだろう。言葉で表しきれないこの気持ちは伝わるだろうか。',
    ]
    this.creators = [
      '野見山真人 / 東京大学大学院 情報理工学系研究科',
      '冨永健 / 東京大学大学院 学際情報学府',
    ]
    this.exhibitions = [
      '東京大学制作展2016, 東京大学 / 2016年11月17日-11月21日',
    ]
    this.movies = ['5nSU45JrvW4']
    this.technology = '2つのプロジェクタを用意し映像と字幕に分けて投影する。このとき字幕は水を張った鏡に反射させる。話し声から抽出したイントネーションの音声で鏡を振動させると、それに呼応して字幕も揺らぐ仕組みになっている。'
    this.technologyImage = technologyImage
  }
}

export default withStyles(customStyle)(MyFeelingCantReachYou)
