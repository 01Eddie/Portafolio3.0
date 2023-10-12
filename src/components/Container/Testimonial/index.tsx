import { useSnapshot } from 'valtio'
import { headerStore } from '../../../store/portfolio'
import TestimonialCard from './TestimonialCard'
import Root, { classes } from './styles'
import IMAGES from '../../../images'

const Testimonial = () => {
  const { testimonial } = useSnapshot(headerStore)

  return (

    <Root>
      <div className={classes.testimonials}>
        {
          testimonial?.comments?.map(comment => (
            <TestimonialCard
              comment={comment.comment} key={comment.idC} subtitle={comment.subTitle}
              title={comment.title} />
          ))
        }
      </div>
      <div className={classes.divImg}>
        <img
          alt='background' src={IMAGES[2].image}
          width='100%' />
      </div>
    </Root>

  )}

export default Testimonial
