import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import glimpses1 from '../images/glimpses1.jpeg'
import glimpses2 from '../images/glimpses2.jpeg'
import glimpses3 from '../images/glimpses3.jpeg'
import glimpses4 from '../images/glimpses4.jpeg'
import glimpses5 from '../images/glimpses5.jpeg'
import glimpses6 from '../images/glimpses6.jpeg'
import glimpses7 from '../images/glimpses7.jpeg'
import glimpses8 from '../images/glimpses8.jpeg'
export default function CarouselComponent() {
  return (
    <div>
    <Carousel className='' slide={false}>
      <Carousel.Item>
      <img
        style={{height:'50vh'}} 
        className=' w-full'
        src={glimpses1}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img 
        style={{height:'50vh'}}
        className=' w-100 h'
        src={glimpses2}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses3}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses4}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses5}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses6}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses7}
        alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={glimpses8}
        alt='' />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
