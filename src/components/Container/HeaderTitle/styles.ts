import { styled } from '@mui/material'

const PREFIX = 'Home'

export const classes = {
  headerContainer: `${PREFIX}-headerContainer`,
  separatator    : `${PREFIX}-separatator`,
  separatatorLine: `${PREFIX}-separatatorLine`,
  squadre        : `${PREFIX}-squadre`,
  squadreColor   : `${PREFIX}-squadreColor`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  alignItems                   : 'center',
  backgroundColor              : 'white',
  display                      : 'flex',
  flexDirection                : 'column',
  margin                       : spacing(6.25, 0),
  [`& .${classes.separatator}`]: {
    alignItems               : 'center',
    display                  : 'flex',
    margin                   : spacing(1.25, 0, 0),
    position                 : 'relative',
    width                    : 180,
    [`& .${classes.squadre}`]: {
      display                       : 'flex',
      height                        : 10,
      justifyContent                : 'center',
      position                      : 'absolute',
      width                         : '100%',
      [`& .${classes.squadreColor}`]: {
        backgroundColor: '#ff5823',
        borderRadius   : spacing(1.25),
        width          : 35
      }
    },
    [`& .${classes.separatatorLine}`]: {
      backgroundColor: '#1f221f',
      height         : 2,
      width          : '100%'
    }
  }
}))
