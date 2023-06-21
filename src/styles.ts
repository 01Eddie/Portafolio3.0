import { styled } from '@mui/material'

const PREFIX = 'App'

export const classes = {
  root: `${PREFIX}-root`
}

export default styled('div', {
  name: PREFIX
})(() => ({
  [`&.${classes.root}`]: {
    display      : 'flex',
    flex         : 1,
    flexDirection: 'column'
  }
}))
