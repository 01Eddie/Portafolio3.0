import { Card, styled } from '@mui/material'

const PREFIX = 'CardAbout'

export const classes = {
  btnHire      : `${PREFIX}-btnHire`,
  btnResume    : `${PREFIX}-btnResume`,
  container    : `${PREFIX}-container`,
  containerBtn : `${PREFIX}-containerBtn`,
  imgCard      : `${PREFIX}-imgCard`,
  listContainer: `${PREFIX}-listContainer`
}

export default styled(Card, {
  name: PREFIX
})(({ theme: { spacing, breakpoints } }) => ({
  display                        : 'flex',
  margin                         : spacing(0, 'auto'),
  maxWidth                       : 1000,
  width                          : '70%',
  [`& .${classes.listContainer}`]: {
    margin: spacing(10, 0)
  },
  [`& .${classes.btnResume}`]: {
    borderRadius: 50
  },
  [`& .${classes.btnHire}`]: {
    borderRadius: 50
  },
  [`& .${classes.container}`]: {
    flex   : 1,
    padding: spacing(3.75)
  },
  [`& .${classes.imgCard}`]: {
    flex : 1,
    width: 151
  },
  [breakpoints.down('md')]: {
    [`& .${classes.imgCard}`]: {
      display: 'none'
    },
    [`& .${classes.containerBtn}`]: {
      justifyContent: 'center'
    },
    [`& .${classes.listContainer}`]: {
      margin: spacing(3, 0)
    }
  }
}))
