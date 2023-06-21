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
    display       : 'flex',
    justifyContent: 'flex-end',
    margin        : spacing(2, 0)
  },
  [`& .${classes.btnResume}`]: {
    borderRadius: 50
  },
  [`& .${classes.btnHire}`]: {
    borderRadius: 50
  }
}))
