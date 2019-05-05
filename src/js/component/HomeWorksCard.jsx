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
    actionArea: {
      fontSize: '100%',
      color: 'rgb(0, 0, 0, 0.99)',
    },
    card: {
      maxWidth: 316,
    },
    media: {
      height: 237,
      objectFit: 'cover',
    },
    content: {
      backgroundColor: theme.palette.background.default,
    },
    caption: {
      color: '#000',
      padding: '2px 0 8px'
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
    <Card
      className={[
          className,
          classes.card,
        ].join(' ')}
      elevation={0}
    >
      <Link to={link}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            component='img'
            alt={title}
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent className={classes.content}>
              <Typography variant='display1'>
                {title}
              </Typography>
              <Typography variant='body2' className={classes.caption}>
                {caption}
              </Typography>
              <Typography variant='caption'>
                {keywords.join('/')}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default withStyles(cardStyle)(HomeWorksCard)
