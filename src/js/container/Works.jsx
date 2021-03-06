// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import DocumentTitle from 'react-document-title'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import { style } from '../theme'
import dressOfGhosts from '../../img/dress-of-ghosts.png'

export const worksStyle = theme => {
  return {
    ...style,
    title: {
      margin: '0 0 16px',
    },
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
    this.images = []
    this.descriptions = []
    this.creators = []
    this.exhibitions = []
    this.movies = []
    this.technology = null
    this.technologyImage = null
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }

  renderTitle() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.images.length; ++i) {
      components.push(
        <img
          key={`image${i}`}
          className='works-image'
          src={this.images[i]}
          alt={`${this.title}${i}`}
        />
      )
    }
    return (
      <div className='works-item'>
        <Typography variant='display1' className={[
          'works-title',
          classes.title,
        ].join(' ')}>
          {this.title}
        </Typography>
        {components}
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

  renderCreators() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.creators.length; i += 1) {
      components.push(
        <Typography
          key={`creator${i}`}
          variant='body2'
          className='works-body'
        >
          {this.creators[i]}
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
          CREATOR
        </Typography>
        {components}
      </div>
    )
  }

  renderExhibitions() {
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
    if (this.exhibitions.length > 0) {
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
    } else {
      <div />
    }
  }

  renderMovies() {
    const { classes } = this.props
    const components = []
    for (let i = 0; i < this.movies.length; ++i) {
      components.push(
        <YouTube
          key={`movie${i}`}
          className='works-movie'
          containerClassName='works-movie-wrapper'
          videoId={this.movies[i]}
          opts={{
            playerVars: { autoplay: 0, rel: 0 },
          }}
        />
      )
    }
    if (this.movies.length > 0) {
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
          {components}
        </div>
      )
    }
    return <div />
  }

  renderTechnology() {
    const { classes } = this.props
    if (this.technology || this.technologyImage) {
      return (
        <div className='works-item'>
          <Typography
            variant='title'
            className={[
              'works-header',
              classes.header,
            ].join(' ')}
          >
            TECHNOLOGY
          </Typography>
          <div className='works-inner-item'>
            {this.technologyImage ? (
              <img
                className='works-inner-image'
                src={this.technologyImage}
                alt='technology'
              />
            ) : (<div />)}
            {this.technology ? (
              <Typography
                variant='body2'
                className='works-body'
              >
                {this.technology}
              </Typography>
            ) : (<div />)}
          </div>
        </div>
      )
    }
    return <div />
  }

  render() {
    return (
      <DocumentTitle title={`${this.title} | Masato Nomiyama`}>
        <div className='works'>
          {this.renderTitle()}
          {this.renderDescriptions()}
          {this.renderCreators()}
          {this.renderExhibitions()}
          {this.renderMovies()}
          {this.renderTechnology()}
        </div>
      </DocumentTitle>
    )
  }
}
