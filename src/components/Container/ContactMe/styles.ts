import { Card, styled } from '@mui/material'

const PREFIX = 'ContactMe'

export const classes = {
  bodyContain: `${PREFIX}-bodyContain`,
  btnSend    : `${PREFIX}-btnSend`,
  cardForm   : `${PREFIX}-cardForm`,
  contentCard: `${PREFIX}-contentCard`,
  imgCard    : `${PREFIX}-imgCard`
}

export default styled(Card, {
  name: PREFIX
})(({ theme: { spacing, palette, breakpoints } }) => ({
  backgroundColor            : palette.secondary.main,
  margin                     : spacing(0, 'auto'),
  maxWidth                   : 1100,
  padding                    : spacing(1.25),
  [`.${classes.bodyContain}`]: {
    display       : 'flex',
    justifyContent: 'space-between',
    maxWidth      : 1100
  },
  [`& .${classes.btnSend}`]: {
    backgroundColor: palette.secondary.main,
    borderRadius   : 50
  },
  [`& .${classes.contentCard}`]: {
    alignSelf: 'center',
    flex     : 1
  },
  [`& .${classes.cardForm}`]: {
    borderRadius: 1.5,
    flex        : 1,
    opacity     : .9,
    width       : 500
  },
  [breakpoints.down('md')]: {
    [`& .${classes.bodyContain}`]: {
      flexDirection: 'column'
    },
    [`& .${classes.imgCard}`]: {
      display: 'none'
    },
    [`& .${classes.cardForm}`]: {
      margin: spacing(0, 'auto')
    },
    [`& .${classes.btnSend}`]: {
      width: '100%'
    }
  }
}))
