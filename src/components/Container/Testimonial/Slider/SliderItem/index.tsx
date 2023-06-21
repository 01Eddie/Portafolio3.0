import React from 'react'
// Styles
import Root from './styles'

type SliderItemProps = {
    slideClass: string;
    zoomFactor: number;
    id: number;
    callback: (id: number) => void;
    callbackOut: () => void;
    slideMargin: number;
    visibleSlides: number;
    children: React.ReactNode;
};

const SliderItem: React.FC<SliderItemProps> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children
}) => (
  <Root
    className={slideClass}
    onMouseOut={callbackOut}
    onMouseOver={() => callback(id)}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    zoomFactor={zoomFactor}>
    {children}
  </Root>
)

export default SliderItem
