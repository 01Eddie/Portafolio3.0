import { useSnapshot } from 'valtio'
import { headerStore } from '../../../store/portfolio'
import TestimonialCard from './TestimonialCard'
import Root, { classes } from './styles'
import IMAGES from '../../../images'
import Slider from './Slider'

const SliderProps = {

  // Margin on each side of slides
  maxVisibleSlides: 5,

  pageTransition: 500,
  // How much the image should zoom on hover in percent
  slideMargin   : 10,
  zoomFactor    : 30 // Transition when flipping pages
}

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
        {/* <TestimonialCard />
        <TestimonialCard /> */}

      </div>

      {/* <Slider {...SliderProps}>
        {
          testimonial?.comments?.map(character => (
            <div key={character.idC} onClick={() => console.log('hello')}>
              <img alt='character' src={IMAGES[0].image} />
            </div>
          ))
        }
      </Slider> */}

      <div className={classes.divImg}>
        <img
          alt='background' src={IMAGES[2].image}
          width='100%' />
      </div>
    </Root>

  )}

export default Testimonial
