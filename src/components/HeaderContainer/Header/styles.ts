import { styled } from '@mui/material'

const PREFIX = 'Header'

export const classes = {
  link   : `${PREFIX}-link`,
  menuHmb: `${PREFIX}-menuHmb`,
  options: `${PREFIX}-options`,
  title  : `${PREFIX}-title`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { palette, spacing, breakpoints } }) => ({
  alignItems             : 'center',
  display                : 'flex',
  justifyContent         : 'space-around',
  paddingTop             : spacing(2),
  [`& .${classes.title}`]: {
    color: palette.grey[100]
  },
  [`& .${classes.options}`]: {
    alignItems: 'center',
    display   : 'flex'
  },
  [`& .${classes.link}`]: {
    '&:active': {
      color: palette.primary.main
    },
    color : palette.grey[100],
    cursor: 'pointer',
    margin: spacing(0, 1.25)
  },
  [`& .${classes.menuHmb}`]: {
    display: 'none'
  },
  [breakpoints.down('md')]: {
    justifyContent           : 'space-between',
    margin                   : spacing(0, 2),
    [`& .${classes.options}`]: {
      display: 'none'
    },
    [`& .${classes.title}`]: {
      display: 'none'
    },
    [`& .${classes.menuHmb}`]: {
      color  : palette.grey[100],
      display: 'block'
    }
  }
}))
