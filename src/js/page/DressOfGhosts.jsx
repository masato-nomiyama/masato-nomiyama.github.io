// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import image from '../../img/dress-of-ghosts.png'
import Works, { worksStyle } from '../container/Works'

const customStyle = theme => {
  return {
    ...style,
    ...worksStyle(theme),
  }
}

class DressOfGhosts extends Works {
  constructor() {
    super()
    this.title = '生の装い'
    this.images = [image]
    this.descriptions = [
      'この無機質な粒子に「生」を感じるだろうか。',
      '古くから日本では万物に命が宿ると信じられてきた。モノの声に耳を傾け、その恩恵に感謝する。ヒトとモノが密接な関係を紡いできたからこそ、こうした信仰は生まれた。しかし、いつしか技術の発展とともにヒトは傲慢になり、モノの「生」は忘れ去られた。特にあらゆるモノに知能が与えられるようになった今では、ヒトは命令する側・モノは命令される側と、一方的な主従関係を結びつつある。こうした機械的な関係はモノに煩わしささえ感じさせる。モノの声に耳を傾け、モノの気持ちに想いを馳せるとき、はじめてモノに「生」が宿るのではないだろうか。',
      'この作品では、ヒトとモノの関係を壊し、モノに「生」が宿る世界を描く。無機質にふるまう粒子。あなたが真摯に向き合い働きかければ、粒子に「生」は宿りきっとあなたの心に語りかけてくるはず。',
      '生の装いはあなたとモノの関係を再構築する。',
    ]
    this.creators = [
      '野見山真人 / Takram',
      '橋本健 / 東京大学大学院 情報理工学系研究科',
    ]
    this.exhibitions = [
      '東京大学制作展2018, 東京大学 / 2018年11月15日-11月19日',
    ]
    this.movies = ['s8Q2XVtoIwU']
    this.technology = '四角く広げられた粒子は一見無機質なものにみえるが、人の気配を感じると身震いし、人に触れられると脈を打つ。人の手の近接・接触検出にはTouchéを応用している。近接の検出は導電性のシートを砂の下に敷くことで、近接・接触場所の検出はTouchéを複数配置することで可能にしている。また、砂の鳥肌を立てるような表現や脈を打つような表現は、マトリクス状に配置した電磁石をアナログ制御することで実現している。'
  }
}

export default withStyles(customStyle)(DressOfGhosts)
