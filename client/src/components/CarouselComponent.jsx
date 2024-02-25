import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import download from '../../src/images/download.png'

export default function CarouselComponent() {
  return (
    <div>
    <Carousel className='' slide={false}>
      <Carousel.Item>
      <img
        style={{height:'50vh'}} 
        className=' w-full'
        src={download}
        alt='' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        style={{height:'50vh'}}
        className=' w-100 h'
        src={download}
        alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        style={{height:'50vh'}}
        className=' w-100'
        src={download}
        alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
