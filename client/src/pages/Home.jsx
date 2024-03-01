import React from 'react';
import CarouselComponent from '../components/CarouselComponent.jsx';
import PostCard from '../components/PostCard.jsx';
import HeadingLogo from '../components/HeadingLogo.jsx';
import Timeline from '../components/Timeline.jsx';
import RegisterHere from '../components/RegisterHere.jsx';
import FAQ from '../components/FAQ.jsx';
import Header from '../components/Header.jsx';
import Sponsors from '../components/Sponsors.jsx';


export default function Home() {
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center'>
      <div className='max-w-screen-xl mx-auto px-4 w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <HeadingLogo/>
        </div>
      </div>
      <div className=''>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Glimpses Of Escapade 2K23</h3>
        </div>
        <CarouselComponent />
      </div>
      <div id='Events' className='p-12'>
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
      {/* <div id='TimeLine' className='p-12'>
      <Timeline/>
      </div> */}
      </div>
      <div id='Sponsors' className='p-12'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">SPONSORS</h3>
        </div>
        <Sponsors/>
      </div>
      <div id="FAQ's" className='p-12'> 
        <FAQ/>
      </div>
      </>
  );
}
