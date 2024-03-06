import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import download from '../images/download.png';

const Sponsors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '25%',
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%'
        }}
      >
        <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>{dots}</ul>
      </div>
    )
  };

  return (
    <div className="relative ">
      <Slider {...settings}>
        <div>
          <img src={download} alt="Quiz 1" className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2">Sponsor 1</p> {/* Add margin top */}
        </div>
        <div>
          <img src={download} alt="Quiz 2" className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2">Sponsor 2</p> {/* Add margin top */}
        </div>
        <div>
          <img src={download} alt="Quiz 3" className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2 mb-8 ">Sponsor 3</p> {/* Add margin top */}
        </div>
      </Slider>
    </div>
  );
};

export default Sponsors;
