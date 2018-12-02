// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'

import dressOfGhosts from '../../img/dress-of-ghosts.png'
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
        caption='気になる観光体験からゆるく旅行計画を作る'
        keywords={['自動車移動履歴', '自然言語処理', 'アソシエーション分析']}
      />
      <WorksCard
        className={cardClassName}
        link='/works/dress-of-ghosts'
        image={dressOfGhosts}
        title='生の装い'
        caption='無機質な粒子に生を宿す'
        keywords={['Touché', 'SVM', '電磁石制御']}
      />
    </div>
  )
}

export default WorksList
