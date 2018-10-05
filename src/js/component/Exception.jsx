// Copyright (C) 2018-Present Masato Nomiyama

import React from 'react'
import Typography from '@material-ui/core/Typography'

const Exception = () => {
  return (
    <div className='exception'>
      <Typography variant='title'>
        404 Not Found
      </Typography>
      <Typography variant='body2'>
        The requested URL was not found on this server.
      </Typography>
    </div>
  )
}

export default Exception
