import { Button } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import SliderItem from './SliderItem'
// Components
// import SliderItem from './SliderItem'
// Styles
// import { StyledSliderWrapper, StyledSlider } from './SliderStyles'
import Root, { classes, StyledSlider } from './styles'
// Types
type SliderProps = {
    children?: any;
    zoomFactor: number;
    slideMargin: number;
    maxVisibleSlides: number;
    pageTransition: number;
};

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if(windowWidth > 1200) return maxVisibleSlides
  if(windowWidth > 992) return 4
  if(windowWidth > 768) return 3

  return 2
}

const Slider: React.FC<SliderProps> = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition
}) => {
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ transformValue, setTransformValue ] = useState(`-${zoomFactor / 2}%`)
  const [ scrollSize, setScrollSize ] = useState(0)

  const sliderRef = useRef<HTMLElement>(null)

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize)
  // Pages start at 0, therefore -1 at the end here
  const totalPages: number = Math.ceil(Number(children.length) / visibleSlides) - 1

  useEffect(() => {
    // @ts-ignore
    const resizeObserver = new ResizeObserver(entries => {
      setScrollSize(entries[0].contentRect.width)
    })
    resizeObserver.observe(sliderRef.current as Element)
  }, [ sliderRef ])

  // Position slider on resize
  useEffect(() => {
    if(sliderRef && sliderRef.current) {
      if(currentPage > totalPages) setCurrentPage(totalPages)
      sliderRef.current.style.transform = `translate3D(-${currentPage * scrollSize}px, 0, 0)`
    }
  }, [ sliderRef, currentPage, scrollSize, totalPages ])

  // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if(sliderRef.current) sliderRef.current.style.pointerEvents = 'none'
    setTimeout(() => {
      if(sliderRef.current) sliderRef.current.style.pointerEvents = 'all'
    }, pageTransition)
  }

  const handleSlideMove = (forward: boolean) => {
    disableHoverEffect()
    setCurrentPage(currentPage + (forward ? 1 : -1))

    if(sliderRef.current)
      sliderRef.current.style.transform = `translate3D(-${(currentPage + (forward ? 1 : -1)) * scrollSize}px, 0, 0)`
  }

  const handleMouseOver = (id: number) => {
    if(id % visibleSlides === 1) setTransformValue('0%') // left
    if(id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`) // right
  }

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`)
  }

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = [ 'right', 'left' ]

    return classes[index % visibleSlides] || ''
  }

  return (
    <Root visibleSlides={visibleSlides} zoomFactor={zoomFactor}>
      <StyledSlider
        pageTransition={pageTransition}
        ref={sliderRef as any}
        slideMargin={slideMargin}
        transformValue={transformValue}
        visibleSlides={visibleSlides}
        zoomFactor={zoomFactor}>
        {children.map((child: any, i: any) => (
          <SliderItem
            callback={handleMouseOver}
            callbackOut={handleMouseOut}
            id={i + 1}
            key={i}
            slideClass={assignSlideClass(i + 1, visibleSlides)}
            slideMargin={slideMargin}
            visibleSlides={visibleSlides}
            zoomFactor={zoomFactor}>
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
      {currentPage > 0 && (
        <div
        // className='button-wrapper back'
          className={classes.buttonWrapper + ' ' + classes.backBtn}>
          <Button
            //   className='button back'
            className={classes.btn + ' ' + classes.backBtn}
            onClick={() => handleSlideMove(false)}>
            &#8249;
          </Button>
        </div>
      )}
      {currentPage !== totalPages && (
        <div
        // className='button-wrapper forward'
          className={classes.buttonWrapper + ' ' + classes.forwardBtn}>
          <Button
            //   className='button forward'
            className={classes.btn + ' ' + classes.forwardBtn} onClick={() => handleSlideMove(true)}>
            &#8250;
          </Button>
        </div>
      )}
    </Root>
  )
}

export default Slider
