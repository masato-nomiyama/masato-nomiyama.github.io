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
      {item.link ? (
        <a href={item.link} target='_blank'>
          <Typography
            className={[
              `${props.className}-item-body`,
              props.classes.body,
              props.classes.highlightBody,
            ].join(' ')}
            variant='body2'
          >
            {item.body}
          </Typography>
        </a>
      ) : (
        <Typography
          variant='body2'
          className={[
            `${props.className}-item-body`,
            props.classes.body,
          ].join(' ')}
        >
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
