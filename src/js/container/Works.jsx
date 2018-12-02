// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import { style } from '../theme'
import dressOfGhosts from '../../img/dress-of-ghosts.png'

export const worksStyle = theme => {
  return {
    ...style,
    description: {
      margin: '0 0 16px',
    },
    header: {
      margin: '12px 0',
    },
  }
}

export default class Works extends PureComponent {
  constructor() {
    super()
    this.title = null
    this.image = null
    this.descriptions = []
    this.productions = []
    this.exhibitions = []
    this.movie = null
  }

  renderTitle() {
    return (
      <div className='works-item'>
        <Typography variant='display1' className='works-title'>
          {this.title}
        </Typography>
        <img
          className='works-image'
          src={this.image}
          alt={this.title}
        />
      </div>
    )
  }

  renderDescriptions() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.descriptions.length; i += 1) {
      components.push(
        <Typography
          key={`description${i}`}
          variant='body2'
          className={[
            'works-description',
            classes.description,
          ].join(' ')}
        >
          {this.descriptions[i]}
        </Typography>
      )
    }

    return (
      <div className='works-item'>
        {components}
      </div>
    )
  }

  renderProductions() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.productions.length; i += 1) {
      components.push(
        <Typography
          key={`production${i}`}
          variant='body2'
          className='works-body'
        >
          {this.productions[i]}
        </Typography>
      )
    }
    return (
      <div className='works-item'>
        <Typography
          variant='title'
          className={[
            'works-header',
            classes.header,
          ].join(' ')}
        >
          PRODUCTION
        </Typography>
        {components}
      </div>
    )
  }

  renderExhibition() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.exhibitions.length; i += 1) {
      components.push(
        <Typography
          key={`exhibition${i}`}
          variant='body2'
          className='works-body'
        >
          {this.exhibitions[i]}
        </Typography>
      )
    }
    return (
      <div className='works-item'>
        <Typography
          variant='title'
          className={[
            'works-header',
            classes.header,
          ].join(' ')}
        >
          EXHIBITION
        </Typography>
        {components}
      </div>
    )
  }

  renderMovie() {
    const { classes } = this.props
    if (this.movie) {
      return (
        <div className='works-item'>
          <Typography
            variant='title'
            className={[
              'works-header',
              classes.header,
            ].join(' ')}
          >
            MOVIE
          </Typography>
          <YouTube
            className='works-movie'
            containerClassName='works-movie-wrapper'
            videoId={this.movie}
            opts={{
              playerVars: { autoplay: 0, rel: 0 },
            }}
          />
        </div>
      )
    }
    return <div />
  }

  render() {
    return (
      <div className='works'>
        {this.renderTitle()}
        {this.renderDescriptions()}
        {this.renderProductions()}
        {this.renderExhibition()}
        {this.renderMovie()}
      </div>
    )
  }
}
