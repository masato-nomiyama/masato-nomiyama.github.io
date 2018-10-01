// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'

import xnavi from '../../img/Xnavi.jpg'
import WorksCard from './WorksCard'

export default class Works extends PureComponent {
  render() {
    const cardClassName = 'works-card'
    return (
      <div className={this.props.className}>
        <WorksCard
          className={cardClassName}
          image={xnavi}
          title='Xnavi'
          caption='気になる体験から観光プランを作る'
          keywords={['自動車移動履歴', '自然言語処理', 'アソシエーション分析']}
          onClick={() => {console.log('hoge')}}
        />
      </div>
    )
  }
}
