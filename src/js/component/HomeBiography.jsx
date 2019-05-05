// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
    body: {
      margin: '0 0 0 16px',
    },
    emptyTitle: {
      color: '#FFFFFF',
    }
  }
}

const renderItem = (props, item) => {
  return (
    <div className={`${props.className}-item`}>
      <Typography
        variant='subheading'
        className={item.isEmptyTitle ? props.classes.emptyTitle : ''}
      >
        {item.title}
      </Typography>
      <Typography
        variant='body2'
        className={[
          `${props.className}-item-body`,
          props.classes.body,
        ].join(' ')}
      >
        {item.body}
      </Typography>
    </div>
  )
}

const HomeBiography = props => {
  return (
    <div className={props.className}>
      {renderItem(props, {
        title: '2018.11',
        body: 'Takram 参加',
      })}
      {renderItem(props, {
        title: '2018.09',
        body: '東京大学大学院 情報理工学系研究科 知能機械情報学専攻 修士号取得',
      })}
      {renderItem(props, {
        title: '2017.04',
        body: 'Takram インターン 参加',
      })}
      {renderItem(props, {
        title: '2016.11',
        body: '富士フイルム インフォマティクス研究所 インターン 参加',
      })}
      {renderItem(props, {
        title: '2016.04',
        body: '東京大学大学院 情報理工学系研究科 知能機械情報学専攻 入学',
      })}
      {renderItem(props, {
        title: '2016.04',
        body: '廣瀬・谷川・鳴海研究室 所属',
        isEmptyTitle: true,
      })}
      {renderItem(props, {
        title: '2016.03',
        body: '東京大学 工学部 機械情報工学科 学士号取得',
      })}
      {renderItem(props, {
        title: '2015.08',
        body: 'Honda Research Institutes インターン 参加',
      })}
      {renderItem(props, {
        title: '2015.04',
        body: '廣瀬・谷川・鳴海研究室 所属',
      })}
      {renderItem(props, {
        title: '2014.06',
        body: '東京大学 工学部 海外ヒストリックラリー参戦プロジェクト 参加',
      })}
      {renderItem(props, {
        title: '2014.04',
        body: '東京大学 工学部 機械情報工学科 進学',
      })}
      {renderItem(props, {
        title: '2012.09',
        body: '東京大学×博報堂 brand design studio 参加',
      })}
      {renderItem(props, {
        title: '2012.04',
        body: '東京大学 教養学部 理科一類 入学',
      })}
      {renderItem(props, {
        title: '2012.03',
        body: '海城高等学校 卒業',
      })}
      {renderItem(props, {
        title: '1993.04',
        body: '埼玉県川口市生まれ',
      })}
    </div>
  )
}

export default withStyles(customStyle)(HomeBiography)
