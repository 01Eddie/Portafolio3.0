import { styled } from '@mui/material'

const PREFIX = 'Footer'

export const classes = {
  address    : `${PREFIX}-address`,
  icon       : `${PREFIX}-icon`,
  left       : `${PREFIX}-left`,
  name       : `${PREFIX}-name`,
  phoneNumber: `${PREFIX}-phoneNumber`,
  right      : `${PREFIX}-right`,
  social     : `${PREFIX}-social`,
  socialMedia: `${PREFIX}-socialMedia`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing, palette } }) => ({
  backgroundColor       : palette.grey['A400'],
  display               : 'flex',
  flexWrap              : 'wrap',
  padding               : spacing(1, 0),
  [`& .${classes.left}`]: {
    alignItems    : 'center',
    display       : 'flex',
    flex          : .5,
    flexDirection : 'column',
    justifyContent: 'center'
  },
  [`& .${classes.right}`]: {
    alignItems   : 'flex-start',
    display      : 'flex',
    flex         : .5,
    flexDirection: 'column'
  },
  [`& .${classes.name}`]: {
    alignItems: 'center',
    display   : 'flex',
    margin    : spacing(1, 0)
  },
  [`& .${classes.phoneNumber}`]: {
    alignItems: 'center',
    display   : 'flex',
    margin    : spacing(1, 0)
  },
  [`& .${classes.address}`]: {
    alignItems: 'center',
    display   : 'flex',
    margin    : spacing(1, 0)
  },
  [`& .${classes.socialMedia}`]: {
    color : palette.secondary.main,
    cursor: 'pointer',
    margin: spacing(1, 0, 1, '25%')
  },
  [`& .${classes.social}`]: {
    margin: spacing(1, 0, 1, '20%')
  },
  [`& .${classes.icon}`]: {
    marginRight: spacing(1)
  }
}))
