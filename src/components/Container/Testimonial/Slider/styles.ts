import { styled } from '@mui/material'

const PREFIX = 'SliderTestimonial'

type SliderWrapperProps = {
    zoomFactor: number;
    visibleSlides: number;
};

type SliderProps = {
    visibleSlides: number;
    transformValue: string;
    zoomFactor: number;
    slideMargin: number;
    pageTransition: number;
    ref: any;
};

export const classes = {
  backBtn      : `${PREFIX}-backBtn`,
  btn          : `${PREFIX}-btn`,
  buttonWrapper: `${PREFIX}-buttonWrapper`,
  forwardBtn   : `${PREFIX}-forwardBtn`
}

export const StyledSlider = styled('div', {
  name: PREFIX
})(({ visibleSlides, transformValue, zoomFactor, slideMargin, pageTransition }: SliderProps) => ({
  ':hover': {
    transform: `translateX(${() => transformValue})`
  },
  display: 'flex',
  padding: '0 55px',

  transition: `transform ${() => pageTransition}ms ease`
}))

export default styled('div', {
  name: PREFIX
})(({ zoomFactor, visibleSlides }: SliderWrapperProps) => ({
}) => ({
  background                     : 'black',
  overflow                       : 'hidden',
  padding                        : `${() => (zoomFactor / visibleSlides) * 0.7 + '%'} 0`,
  position                       : 'relative',
  [`& .${classes.buttonWrapper}`]: {
    boxSizing: 'border-box',
    height   : '100%',
    padding  : `${() => zoomFactor / 7 + '%'} 0`,
    position : 'absolute',
    top      : 0,
    width    : 55
  },
  [`& .${classes.btn}`]: {
    '&:hover': {
      opacity: 0.5
    },
    background: 'rgb(0, 0, 0, 0.7)',
    border    : 0,
    color     : '#ffffff',
    cursor    : 'pointer',
    display   : 'block',
    fontSize  : '3rem',
    fontWeight: 800,
    height    : '100%',
    outline   : 'none',
    top       : 0,
    transition: 'all 0.7s',
    userSelect: 'none',
    width     : '100%'
  },
  [`& .${classes.backBtn}`]: {
    borderRadius: '0 1.5vw 1.5vw 0',
    left        : 0
  },
  [`& .${classes.forwardBtn}`]: {
    borderRadius: '1.5vw 0 0 1.5vw',
    right       : 0
  }
}))
