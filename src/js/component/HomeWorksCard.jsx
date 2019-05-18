// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { style } from '../theme'

const cardStyle = theme => {
  return {
    ...style,
    title: {
      color: theme.palette.primary.light,
      margin: '48px 0 6px',
    },
    caption: {
      color: theme.palette.primary.light,
      margin: '0 0 48px',
    },
    keyword: {
      color: theme.palette.primary[400],
    },
  }
}

const HomeWorksCard = props => {
  const {
    classes,
    className,
    link,
    image,
    title,
    caption,
    keywords,
  } = props
  return (
    <div className={className} data-delighter>
      <div className={[
        `${className}-line-top`,
        classes.verticalLine,
      ].join(' ')} />
      <div className={`${className}-box`}>
        <div className={[
          `${className}-line-left`,
          classes.horizontalLine,
        ].join(' ')} />
        <div
          className={`${className}-content`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <Link to={link}>
            <div className={`${className}-content-textbox`}>
              <Typography
                variant='display1'
                className={[
                  `${className}-content-title`,
                  classes.title,
                ].join(' ')}
              >
                {title}
              </Typography>
              <Typography
                variant='body2'
                className={[
                  `${className}-content-caption`,
                  classes.caption,
                ].join(' ')}
              >
                {caption}
              </Typography>
              <Typography
                variant='caption'
                className={[
                  `${className}-content-keyword`,
                  classes.keyword,
                ].join(' ')}
              >
                {keywords.join(' / ')}
              </Typography>
            </div>
          </Link>
        </div>
        <div className={[
          `${className}-line-right`,
          classes.horizontalLine,
        ].join(' ')} />
      </div>
      <div className={[
        `${className}-line-bottom`,
        classes.verticalLine,
      ].join(' ')} />
    </div>
  )
}

export default withStyles(cardStyle)(HomeWorksCard)
