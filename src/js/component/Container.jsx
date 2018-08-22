// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { theme } from '../theme'

const styles = theme => ({
  display1: {
    color: theme.palette.primary.main,
    fontVariantLigatures: 'none',
    letterSpacing: '1.8px',
  }
})

class Container extends PureComponent {
  renderItemTitle({ title }) {
    return (
      <div className='container-item-title'>
        <Typography
          className={`${this.props.classes.display1}`}
          id={`${title}`}
          variant='display1'
        >
          {title}
        </Typography>
        <div
          className='container-item-title-line'
          style={{background: `linear-gradient(
            45deg,
            ${theme.palette.secondary.light},
            ${theme.palette.secondary.main}
          )`}}
        />
      </div>
    )
  }

  render() {
    return (
      <div className={this.props.className}>
       {this.renderItemTitle({ title: 'profile' })}
       {this.renderItemTitle({ title: 'biography' })}
       {this.renderItemTitle({ title: 'works' })}
       {this.renderItemTitle({ title: 'achievements' })}
      </div>
    )
  }
}

export default withStyles(styles)(Container)
