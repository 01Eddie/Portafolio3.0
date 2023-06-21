import { styled } from '@mui/material'

const PREFIX = 'SliderItem'

type Props = {
    zoomFactor: number;
    slideMargin: number;
    visibleSlides: number;
    className: string;
};

export const classes = {
  left : `${PREFIX}-left`,
  right: `${PREFIX}-right`
}

export default styled('div', {
  name: PREFIX
})(({ zoomFactor, slideMargin, visibleSlides }: Props) => ({
  '&:hover': {
    transform: `scale(${() => zoomFactor / 100 + 1})!important`
  },
  '&:hover ~ *': {
    transform: `translateX(${() => zoomFactor / 2 + '%'})!important`
  },
  borderRadius: '20px',
  boxSizing   : 'border-box',
  cursor      : 'pointer',
  display     : 'flex',
  flex        : `0 0 calc(100 % / ${() => visibleSlides} - ${() => slideMargin * 2}px )`,
  height      : '100%',
  img         : {
    borderRadius: '1.5vw',
    boxSizing   : 'border-box',
    height      : '100%',
    width       : '100%'
  },
  margin: `0 ${() => slideMargin}px`,

  transform: 'scale(1)',

  transition: 'transform 500ms ease',

  userSelect: 'none',

  width: '100%',

  [`&.${classes.left}`]: {
    '&:hover ~ *': {
      transform: `translateX(${() => zoomFactor + '%'})!important`
    },

    transformOrigin: 'left'
  },

  [`&.${classes.right}`]: {
    '&:hover ~ *': {
      transform: 'translateX(0%)!important'
    },
    transformOrigin: 'right'
  }

}))
