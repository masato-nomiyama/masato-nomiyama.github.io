// Copyright (C) 2018-Present Masato Nomiyama

import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { theme } from '../theme'

const styles = theme => {
  return {
    line: {
      background: `linear-gradient(
        45deg,
        ${theme.palette.secondary.A200},
        ${theme.palette.secondary.A400}
      )`
    },
    titleText: {
      color: theme.palette.primary[800],
      fontVariantLigatures: 'none',
      letterSpacing: '1.8px',
    },
  }
}

class Container extends PureComponent {
  renderItemTitle({ title }) {
    return (
      <div className='container-item-title'>
        <Typography
          className={this.props.classes.titleText}
          id={`${title}`}
          variant='title'
        >
          {title}
        </Typography>
        <div
          className={[
            this.props.classes.line,
            'container-item-title-line',
          ].join(' ')}
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
       {this.renderItemTitle({ title: 'contact' })}
      </div>
    )
  }
}

export default withStyles(styles)(Container)
