// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'

import dressOfGhosts from '../../img/dress-of-ghosts.png'
import maestroOfTime from '../../img/maestro-of-time.png'
import myFeelingCantReachYou from '../../img/my-feeling-cant-reach-you.jpg'
import xnavi from '../../img/xnavi.jpg'
import HomeWorksCard from './HomeWorksCard'

const HomeWorks = props => {
  const cardClassName = 'home-works-card'
  return (
    <div className={props.className}>
      <HomeWorksCard
        className={cardClassName}
        link='/works/dress-of-ghosts'
        image={dressOfGhosts}
        title='生の装い'
        caption='無機質な粒子に生を宿す'
        keywords={['Touché', 'SVM', '電磁石制御']}
      />
      <HomeWorksCard
        className={cardClassName}
        link='/works/my-feeling-cant-reach-you'
        image={myFeelingCantReachYou}
        title='伝わらないこの気持ち'
        caption='言葉はかたちを失いその想いを伝える'
        keywords={['音声解析', '音声合成']}
      />
      <HomeWorksCard
        className={cardClassName}
        link='/works/xnavi'
        image={xnavi}
        title='Xnavi'
        caption='体験をつなげて旅行計画を作る'
        keywords={['自動車移動履歴', '自然言語処理', 'アソシエーション分析']}
      />
      <HomeWorksCard
        className={cardClassName}
        link='/works/maestro-of-time'
        image={maestroOfTime}
        title='時の指揮者'
        caption='クロスモーダルに時間の流れを体感する'
        keywords={['Kinect', 'ムーブメント制御', 'AR']}
      />
    </div>
  )
}

export default HomeWorks
