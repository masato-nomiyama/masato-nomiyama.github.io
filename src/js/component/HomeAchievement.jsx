// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
    title: {
      margin: '24px 0 0',
    },
    body: {
      margin: '8px 0',
    },
  }
}

const renderItem = (props, item) => {
  const components = []
  for (let i = 0; i < item.bodies.length; i += 1) {
    components.push(
      <Typography
        key={`body${i}`}
        variant='body2'
        className={[
          `${props.className}-item-body`,
          props.classes.body,
        ].join(' ')}
      >
        {item.bodies[i].name}
        {item.bodies[i].link ? ' ' : ''}
        {item.bodies[i].link ? (
          <a
            href={item.bodies[i].link}
            target='_blank'
            className={props.classes.highlightBody}
          >
            [{item.bodies[i].linkName}]
          </a>
        ) : <div />}
      </Typography>
    )
  }
  return (
    <div className={`${props.className}-item`}>
      <Typography
        variant='subheading'
        className={[
          `${props.className}-item-title`,
          props.classes.title,
        ].join(' ')}
      >
        {item.title}
      </Typography>
      {components}
    </div>
  )
}

const HomeAchievement = props => {
  return (
    <div className={props.className}>
      {renderItem(props, {
        title: '論文誌',
        bodies: [
          {
            name: 'Masato Nomiyama, Toshiki Takeuchi, Hiroyuki Onimaru, Tomohiro Tanikawa, Takuji Narumi, and Michitaka Hirose: “Xnavi: Travel Planning System Based on Experience Flows,” Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, Vol. 2, No. 1, pp. 27:1-27:25, 2018.',
            link: 'http://doi.acm.org/10.1145/3191759',
            linkName: 'doi',
          },
        ],
      })}
      {renderItem(props, {
        title: '国際会議（ポスター）',
        bodies: [
          {
            name: 'Masato Nomiyama, Toshiki Takeuchi, Hiroyuki Onimaru, Tomohiro Tanikawa, Takuji Narumi, and Michitaka Hirose, “Travel Planning System Considering Experience Flows Based on Driving Histories,” The 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp 2016), Heidelberg, Germany, Sep. 2016.',
            link: 'https://dl.acm.org/citation.cfm?doid=2968219.2971428',
            linkName: 'doi',
          },
        ],
      })}
      {renderItem(props, {
        title: '国内学会',
        bodies: [
          {
            name: 'Zihjia Liou, Masato Nomiyama, Toshiki Takeuchi, Tomohiro Tanikawa, Takuji Narumi, and Michitaka Hirose: “Study on Travel Planning Method through Must-visiting Planning by Using Bidirectional LSTM,” メディアエクスペリエンス・バーチャル環境基礎研究会（MVE） 人工現実感，エンタテインメント，メディアエクスペリエンスおよび一般，2018年6月.',
            link: 'https://www.ieice.org/ken/paper/20180614R1eV/',
            linkName: 'web',
          },
          {
            name: '野見山 真人, 竹内 俊貴, 鬼丸 寛之, 谷川 智洋, 鳴海 拓志, 廣瀬 通孝: “観光体験フィールドの提示による観光計画支援に関する研究”, 第22回日本バーチャルリアリティ学会大会，2017年9月.',
          },
          {
            name: '野見山 真人，竹内 俊貴，鬼丸 寛之，谷川 智洋，鳴海 拓志，廣瀬 通孝：“自動車の空間移動履歴に基づく体験の流れを考慮した観光計画システム”，マルチメディア・仮想環境基礎研究会 (MVE) 人工現実感および一般（VR学会，HI学会SIGDeMO，およびITE-HIと連催)，2016年7月.',
          },
        ],
      })}
      {renderItem(props, {
        title: '特許',
        bodies: [
          {
            name: '本田技研工業株式会社, 東京大学. 鬼丸 寛之, 谷川 智洋, 廣瀬 通孝, 鳴海 拓志, 竹内 俊貴, 野見山 真人: “ナビサーバ、ナビクライアントおよびナビシステム”, 特開2017-181426, 2017年10月5日.',
          },
        ],
      })}
      {renderItem(props, {
        title: 'その他',
        bodies: [
          {
            name: '野見山 真人, "SNSにまで進出した筋肉の承認欲求を満たすための画像処理技術：筋肉専用プリクラ「morimori」," ANORON: International Journal on Desire-driven Innovation Vol.2 No.1, 2016年8月',
          },
        ],
      })}
    </div>
  )
}

export default withStyles(customStyle)(HomeAchievement)
