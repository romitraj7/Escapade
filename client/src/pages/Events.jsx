import React, { useRef, useEffect } from 'react';
import download from '../images/download.png';
import { EventCard } from './EventCard/EventCard';
import HeaderEvent from './EventCard/HeaderEvent';
import RegisterHere from '../components/RegisterHere';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import './Event.css'
import FAQEvent from '../components/FAQEvent';
import apti from '../images/general aptitude.png'
import audiovisual from '../images/audio visual.png'
import thunt from '../images/treasure hunt.png'

export default function Events() {
  const roundRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const handleScroll = () => {
      roundRefs.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='event-background'>
      <HeaderEvent/>
      <div className='flex justify-center mt-4 mb-4'>
      <h1 id='Rounds' className='mt-16 font-feelfree text-6xl md:text-7xl underline '>Escapade Rounds</h1>
      </div>
      <div>
      <div id='Rounds' ref={roundRefs[0]} className='flex justify-center items-center '>
      <EventCard  image={apti} title={'Round 1 - Aptitude'} content={<ul className=''>
        <li>Each team will be given 60 Questions to solve in the stipulated time.The questions will be a mix of aptitude and  programming.</li>
        <li>Top teams will go to the next round.</li>
        <li>In case of tie breaker the team with better time will be considered. </li>
      </ul>}/>
      </div>


      <div ref={roundRefs[1]} className='flex justify-center items-center'>
      <EventCard image={audiovisual} title={'Round-2 Audio-Visual'} content={<ul>
        <li>Audio-visual setup with buzzard questions.</li>
        <li>First team to press the buzzer will get the chance to answer.</li>
        <li>Correct answer will earn 5 points, but an incorrect response will result in a negative 2 points.</li>
      </ul>}/>
      </div>

      <div ref={roundRefs[2]} className='flex justify-center items-center '>
      <EventCard image={thunt} title={'Round 3-Treasure Hunt'} content={<ul>
        <li>Participants will receive clues leading to the final treasure..</li>
        <li>Teams must search and find the final clue to win the round..</li>
      </ul>}/>
      </div>
      <div className='flex flex-wrap justify-center items-center mt-3 gap-2 '>
        <RegisterHere />
        <Link to={'/eventdetails'} className='text-decoration-none '>
         <Button gradientDuoTone="greenToBlue" size='lg' pill>INSTRUCTIONS</Button>
         </Link>
      </div>
    </div>
    <div id='Prizes' className='p-16'>
    <div className="flex flex-col justify-center items-center">
            <h3 className="font-feelfree text-6xl md:text-7xl underline mt-4 mb-4">Prizes</h3>
            <div>
              <p className='font-luckyfarmer text-4xl'>Exciting prizes for the winners , to be revealed soon!!</p>
            </div>
    </div>
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
    <div id="FAQ's">
        <FAQEvent/>
    </div>
    </div>
  );
}
