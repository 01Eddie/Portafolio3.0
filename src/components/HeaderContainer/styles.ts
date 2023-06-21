import { styled } from '@mui/material'

const PREFIX = 'HeaderContainer'

export const classes = {
  divImg: `${PREFIX}-divImg`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { palette } }) => ({
  backgroundColor         : palette.secondary.main,
  [`& .${classes.divImg}`]: {
    alignItems: 'flex-end',
    display   : 'flex'
  }
}))
