// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import profile from '../../img/profile.png'
import { style } from '../theme'

const profileStyle = theme => {
  return {
    ...style,
    name: {
      color: '#000',
    },
  }
}

const renderAd = props => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title'>
        人を知り、好きを作る<br/><br/>
      </Typography>
      <Typography variant='body2'>
        私たちは自身のことでさえよく知りません<br/>
        <br/>
        なぜ楽しいと感じるのか<br/>
        なぜ思い通りに計画が進まないのか<br/>
        なぜあの人を信頼できるのか<br/>
        <br/>
        こうした仕組みを紐解くことで人の行動をデザインし<br/>
        誰もが「好き」に夢中になれる未来を作ります
      </Typography>
    </div>
  )
}

const renderMain = props => {
  return (
    <div className={`${props.className}-item`}>
      <img
        className={`${props.className}-image`}
        src={profile}
        alt='Profile'
      />
      <Typography className={props.classes.name} variant='body2'>
        野見山 真人　Design Engineer<br/>
        Takram
      </Typography>
    </div>
  )
}

const Profile = props => {
  return (
    <div className={props.className}>
      {renderAd(props)}
      {renderMain(props)}
    </div>
  )
}

export default withStyles(profileStyle)(Profile)
