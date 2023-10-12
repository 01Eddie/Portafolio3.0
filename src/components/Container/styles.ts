import { styled } from '@mui/material'

const PREFIX = 'Container'

export const classes = {
  btnHire  : `${PREFIX}-btnHire`,
  btnResume: `${PREFIX}-btnResume`,
  floatBtn : `${PREFIX}-floatBtn`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  [`& .${classes.floatBtn}`]: {
    bottom        : '60px',
    display       : 'flex',
    height        : spacing(0),
    justifyContent: 'flex-end',
    position      : 'relative',
    right         : spacing(2)
  },
  [`& .${classes.btnResume}`]: {
    borderRadius: 50
  },
  [`& .${classes.btnHire}`]: {
    borderRadius: 50
  }
}))
