// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'

const customStyle = theme => {
  return {
    ...style,
    highlightBody:  {
      transition: 'color 0.1s ease',
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
    },
  }
}

const renderItem = (props, content) => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='title'>
        {content.title}
      </Typography>
      {content.link ? (
        <a href={content.link} target='_blank'>
          <Typography
            className={[
              'home-contact-body',
              props.classes.highlightBody,
            ].join(' ')}
            variant='body2'
          >
            {content.item}
          </Typography>
        </a>
      ) : (
        <Typography variant='body2'>
          {content.item}
        </Typography>
      )}
    </div>
  )
}

const Contact = props => {
  return (
    <div className={props.className}>
      {renderItem(props, {
        title: 'Email',
        item: 'nomy[at]takram.com',
      })}
      {renderItem(props, {
        title: 'Twitter',
        link: 'https://twitter.com/masatonomiyama',
        item: '@masatonomiyama',
      })}
    </div>
  )
}

export default withStyles(customStyle)(Contact)
