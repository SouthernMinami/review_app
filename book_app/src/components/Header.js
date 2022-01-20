import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'


export const Header = (props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div">
            {props.logo}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
