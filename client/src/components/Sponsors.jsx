import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sponsor1 from '../images/sponsor1.jpeg';
import sponsor2 from '../images/sponsor2.jpeg';
// import sponsor3 from '../images/sponsor3.jpeg';

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '9%',
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
          <img src={sponsor1} className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2 font-serif font- text-lg">S.K.Patra Clinic & Healthcare <br/> Phone:-9433988215/<br/>8240705220</p> 
        </div>
        <div>
          <img src={sponsor2} className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2 font-serif font- text-lg">Indian Meterological Department-<br/>Sukumar Roy</p>
        </div>
        {/* <div>
          <img src={sponsor3} className="rounded-full mx-auto sm:w-48 sm:h-48 w-32 h-32" />
          <p className="text-center mt-2 font-serif font- text-lg">JIO</p> 
        </div> */}
      </Slider>
    </div>
  );
};

export default Sponsors;
