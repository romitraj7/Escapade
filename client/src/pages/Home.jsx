import React from 'react';
import CarouselComponent from '../components/CarouselComponent.jsx';
import download from '../images/download.png';
import PostCard from '../components/PostCard.jsx';
import HeadingLogo from '../components/HeadingLogo.jsx';
import Timeline from '../components/Timeline.jsx';
import RegisterHere from '../components/RegisterHere.jsx';
import FAQ from '../components/FAQ.jsx';


export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='max-w-screen-xl mx-auto px-4 w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* <div className='flex flex-col mb-2 md:mb-0 md:mr-4 w-full md:w-auto'>
            <div>
              <TypeWriter className="text-sm md:text-base" />
            </div>
            <div className='p-2 text-sm md:text-base'>
              Welcome to escapde
            </div>
          </div> */}
          <HeadingLogo/>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Glimpses Of Escapade 2.0</h3>
        </div>
        <CarouselComponent />
      </div>
      <div className='event'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">EVENTS</h3>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <div className="flex justify-center">
            <PostCard className="w-64 h-auto" />
          </div>
        </div>
        <div className='flex justify-center items-center mt-3'>
         <RegisterHere/>
        </div>
      </div>
      <div>
      <Timeline/>
      </div>
      </div>
      <div> 
        <FAQ/>
      </div>
      </>
  );
}
