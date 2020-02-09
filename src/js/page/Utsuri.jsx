// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'
import image from '../../img/utsuri.jpg'
import image2 from '../../img/utsuriScenes.jpg'
import Works, { worksStyle } from '../container/Works'

const customStyle = theme => {
  return {
    ...style,
    ...worksStyle(theme),
  }
}

class Utsuri extends Works {
  constructor() {
    super()
    this.title = 'うつり'
    this.images = [
      image,
      image2,
    ]
    this.descriptions = [
      '一日の始まりと終わりに部屋を引き立ててくれる漆の照明。',
      '漆の艶やかな黒は水面のように閑かに朝を映し、漆の奥深い朱は篝火のように柔らかく夜に映る。',
      '日本の人々は古来より内と外の繋がった家屋で自然とともに暮らし、自然光の届かない暗がりや陰に差す薄あかりに風情や美を感じてきた。このプロダクトは、刻一刻とうつろう環境や自然を受け入れ敬ってきた日本の人々の美を感じる心にそっとあかりを灯す試みである。夜の暗がりに映るだけでなく朝のあかりをも映してくれるこの照明は、周囲の環境をより一層引き立て日々の暮らしを豊かにしてくれる。',
      '漆塗りには漆に油を含ませることで物体の表面に光沢を出す花塗や、黒と朱の漆を重ねることで物体の質感に深みを出す溜塗などの技法がある。こうした光を巧みに操る技術が漆工芸では長い間培われてきた。これらの漆塗りの技術をガラスや和紙といった伝統工芸と組み合わせることで、日々の些細な変化を心に映すプロダクトへと編みなおす。',
    ]
    this.creators = [
      '野見山真人 / Takram',
      '関大地 / 東京藝術大学',
    ]
    this.exhibitions = [
      '富山デザインコンペティション2019',
    ]
    this.movies = [
      'pOPW0dl1Hjc',
      'psraaGQ0hQY',
    ]
    this.technology = '吹きガラスによる成形で内のあかりを映す曲面と外の景色を映す平面を作っている。また漆塗りでは色ムラが出ないようにスプレーガンを用いてガラスに吹き付けている。プロトタイプの土台はガラスの器の口径に合わせて3Dプリントで制作している。'
  }
}

export default withStyles(customStyle)(Utsuri)
