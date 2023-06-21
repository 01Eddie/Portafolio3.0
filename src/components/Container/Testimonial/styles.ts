import { styled } from '@mui/material'
import IMAGES from '../../../images'

const PREFIX = 'Testimonial'

export const classes = {
  divImg      : `${PREFIX}-divImg`,
  testimonials: `${PREFIX}-testimonials`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  backgroundImage               : `url(${IMAGES[3].image})`,
  [`& .${classes.testimonials}`]: {
    alignItems    : 'center',
    display       : 'flex',
    flexDirection : 'row',
    justifyContent: 'space-around',
    paddingTop    : spacing(10),
    trasition     : 'all 0.5s ease-in-out'
  },
  [`& .${classes.divImg}`]: {
    alignItems: 'flex-end',
    display   : 'flex'
  }
}))
