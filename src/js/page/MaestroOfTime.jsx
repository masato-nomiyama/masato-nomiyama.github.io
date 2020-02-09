// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import image from '../../img/maestro-of-time.png'
import Works, { worksStyle } from '../container/Works'

const customStyle = theme => {
  return {
    ...style,
    ...worksStyle(theme),
  }
}

class MaestroOfTime extends Works {
  constructor() {
    super()
    this.title = '時の指揮者'
    this.images = [image]
    this.descriptions = [
      '光や音と異なり、時の流れを人が感じることは難しい。しかし確かにそこに存在し流れ続けている。この作品はそんなひとと時間の関係を変えてくれる。',
      '右手で指揮棒を振り始めると、各楽器の時間が動き出す。指揮のリズムに合わせて演奏のピッチも変化、時計もそれに合わせて時を刻む。左手で指示を出すと、それぞれの楽器の演奏は 2x または 0.5x に速度が変わる。',
      '体の動きと聴覚・視覚の速度が相互に作用することで、普段感じることのできない時間の流れを体感することができる。',
    ]
    this.creators = [
      '野見山真人 / 東京大学大学院 情報理工学系研究科',
    ]
    this.technology = 'コードが常に一定でかつループする楽曲をDTMで制作、各楽器の音をそれぞれの時計に割り当てている。指揮者の体の動きはKinectでトラッキングしている。指揮の速度や楽器への指示を検知し、各楽器の演奏や時計の速度をコントロールしている。また楽器に指示する際に、ARの視覚エフェクトが指揮者の体の動きを補佐してくれる。'
  }
}

export default withStyles(customStyle)(MaestroOfTime)
