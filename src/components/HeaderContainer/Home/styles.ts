import { styled } from '@mui/material'

const PREFIX = 'Home'

export const classes = {
  btnHire     : `${PREFIX}-btnHire`,
  btnResume   : `${PREFIX}-btnResume`,
  container   : `${PREFIX}-container`,
  containerBtn: `${PREFIX}-containerBtn`,
  contents    : `${PREFIX}-contents`,
  divImg      : `${PREFIX}-divImg`,
  logoImg     : `${PREFIX}-logoImg`,
  subtitle    : `${PREFIX}-subtitle`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing, palette, breakpoints } }) => ({
  alignItems                 : 'center',
  display                    : 'flex',
  justifyContent             : 'center',
  [`& .${classes.container}`]: {
    textAlign: 'center'
  },
  [`& .${classes.logoImg}`]: {
    backgroundSize: 'cover',
    borderRadius  : '50%',
    height        : '92%',
    width         : '92%'
  },
  [`& .${classes.logoImg}:hover`]: {
    transform : 'scale(1.07)',
    transition: '1s ease-out'
  },
  [`& .${classes.divImg}`]: {
    alignItems    : 'center',
    borderRadius  : '50%',
    boxShadow     : '0 1px 0 0 rgba(255,255,255,255)',
    display       : 'flex',
    height        : 380,
    justifyContent: 'center',
    marginLeft    : spacing(10)
  },
  [`& .${classes.containerBtn}`]: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  [`& .${classes.btnResume}`]: {
    backgroundColor: palette.primary.main,
    borderRadius   : 50,
    marginLeft     : spacing(2)
  },
  [`& .${classes.btnHire}`]: {
    // backgroundColor: palette.secondary.main,
    borderRadius: 50
  },
  [`& .${classes.subtitle}`]: {
    marginBotton: spacing(2)
  },
  [`& .${classes.contents}`]: {
    margin: spacing(2, 0, 3)
  },
  [breakpoints.down('md')]: {
    flexDirection           : 'column-reverse',
    [`& .${classes.divImg}`]: {
      margin: spacing(0, 10, 3, 10)
    }
  }
}))
