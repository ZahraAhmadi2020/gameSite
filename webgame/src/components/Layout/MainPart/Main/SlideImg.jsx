import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const SlideImg = ({sliders}) => {
  return (
    <Carousel interval={1000} className='sliderOne'>
      {sliders && sliders.map(slide => {
        return <CarouselItem key={slide.id}>
          <img className='slideImg' src={slide.url} alt={slide.name} />

        </CarouselItem>
      })}
    </Carousel>
  )
}

export default SlideImg
