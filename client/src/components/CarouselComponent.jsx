import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import glimpses1 from '../images/glimpses1.jpeg';
import glimpses2 from '../images/glimpses2.jpeg';
import glimpses3 from '../images/glimpses3.jpeg';
import glimpses4 from '../images/glimpses4.jpeg';
import glimpses5 from '../images/glimpses5.jpeg';
import glimpses6 from '../images/glimpses6.jpeg';
import glimpses7 from '../images/glimpses7.jpeg';
import glimpses8 from '../images/glimpses8.jpeg';

export default function CarouselComponent() {
  return (
    <Carousel className='mx-auto' slide={false}>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses1}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses2}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses3}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses4}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses5}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses6}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses7}
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '50vh', width: '100%', objectFit: 'cover' }}
          src={glimpses8}
          alt=''
        />
      </Carousel.Item>
    </Carousel>
  );
}
