// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'

import xnavi from '../../img/xnavi.jpg'
import WorksCard from './WorksCard'

const WorksList = props => {
  const cardClassName = 'works-card'
  return (
    <div className={props.className}>
      <WorksCard
        className={cardClassName}
        link='/works/xnavi'
        image={xnavi}
        title='Xnavi'
        caption='気になる体験をもとに観光プランを作る'
        keywords={['自動車移動履歴', '自然言語処理', 'アソシエーション分析']}
      />
    </div>
  )
}

export default WorksList
