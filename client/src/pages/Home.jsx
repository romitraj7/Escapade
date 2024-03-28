import React from 'react';
import CarouselComponent from '../components/CarouselComponent.jsx';
import PostCard from '../components/PostCard.jsx';
import RegisterHere from '../components/RegisterHere.jsx';
import FAQ from '../components/FAQ.jsx';
import Header from '../components/Header.jsx';
import Sponsors from '../components/Sponsors.jsx';
import HeadingLogo from '../components/HeadingLogo/HeadingLogo.jsx';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './Home.css'
import Timer from '../components/Countdown/Timer.jsx';
import escapade from '../images/escapade.png'
export default function Home() {
  const targetDate = new Date('2024-04-03T09:45:00');
  return (
    <>
    <div className='home-background'>
      <Header/>
     <div className='flex flex-col'>
      <h2 className='flex justify-center font-serif underline pt-2'>STARTS IN:</h2>
      <Timer targetDate={targetDate}/>
     </div>
        <div className='flex flex-col items-center'>
        <div>
          <img className='h-40 md:hidden' src={escapade}
          />
        </div>
      <div className='max-w-screen-xl px-4 w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <HeadingLogo/>
        </div>
      </div>
      <div className='mt-4'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4 font-luckyfarmer text-3xl md:text-5xl underline">Glimpses Of Escapade 2K23</h3>
        </div>
        <CarouselComponent />
      </div>
      <div id='Events' className='p-12'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4 font-luckyfarmer text-3xl md:text-5xl underline">EVENTS</h3>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <div className="flex justify-center">
            <PostCard className="w-64 h-auto" />
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center mt-3 gap-2 '>
         <RegisterHere/>
         <Link to={'/eventdetails'} className='text-decoration-none '>
         <Button gradientDuoTone="greenToBlue" size='lg' pill>INSTRUCTIONS</Button>
         </Link>
        </div>
      </div>
      {/* <div id='TimeLine' className='p-12'>
      <Timeline/>
      </div> */}
      </div>
      <div id='Sponsors' className='p-12'>
        <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4 font-luckyfarmer text-3xl md:text-5xl underline">SPONSORS</h3>
        </div>
        <Sponsors/>
      </div>
      <div id='Contact Us' className='p-12'>
    <div className="flex flex-col justify-center items-center">
            <h3 className=" mt-4 mb-4 font-feelfree text-6xl md:text-7xl underline">Contact Us</h3>
            <div className='text-3xl'>
              <h5 className='font-serif text-3xl mb-4'>For Any Queries Contact:- </h5>
              <p className='font-luckyfarmer'>Anuran Chatterjee (ECE 3rd Year) :- 8240489824 </p>
              <p className='font-luckyfarmer'>Swagata Mondal (ECE 3rd Year) :- 7449950207 </p>
            </div>
        </div>
    </div>
      <div id="FAQ's" className='p-10'> 
         <h3 className="flex justify-center font-bold mt-4 mb-4 font-luckyfarmer text-4xl md:text-5xl underline">Frequently Asked Questions?</h3>
        <FAQ/>
      </div>
        </div>
      </>
  );
}
