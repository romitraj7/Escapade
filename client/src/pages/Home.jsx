import React from 'react';
import TypeWriter from '../components/TypeWriter.jsx';
import CarouselComponent from '../components/CarouselComponent.jsx';
import download from '../images/download.png';
import PostCard from '../components/PostCard.jsx';
import HeadingLogo from '../components/HeadingLogo.jsx';
import Timeline from '../components/Timeline.jsx';

export default function Home() {
  return (
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
        <CarouselComponent />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        <div className="flex justify-center">
          <PostCard className="w-64 h-auto" />
        </div>
      </div>
      <div>
      <Timeline/>
      </div>
      
    </div>
  );
}
