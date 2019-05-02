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

const renderItem = (props, item) => {
  return (
    <div className={`${props.className}-item`}>
      <Typography variant='subheading'>
        {item.title}
      </Typography>
      {item.link ? (
        <a href={item.link} target='_blank'>
          <Typography
            className={[
              'home-contact-body',
              props.classes.highlightBody,
            ].join(' ')}
            variant='body2'
          >
            {item.body}
          </Typography>
        </a>
      ) : (
        <Typography variant='body2'>
          {item.body}
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
        body: 'nomy[at]takram.com',
      })}
      {renderItem(props, {
        title: 'Twitter',
        link: 'https://twitter.com/masatonomiyama',
        body: '@masatonomiyama',
      })}
    </div>
  )
}

export default withStyles(customStyle)(Contact)
