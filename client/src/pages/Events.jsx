import React, { useRef, useEffect } from 'react';
import download from '../images/download.png';
import { EventCard } from './EventCard/EventCard';
import HeaderEvent from './EventCard/HeaderEvent';
import FAQ from '../components/FAQ';
import RegisterHere from '../components/RegisterHere';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

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
    <>
      <HeaderEvent/>
      <div className='flex justify-center mt-4 mb-4'>
      <h1 id='Rounds' className='p-16'>Escapade Rounds</h1>
      </div>
      <div>
      <div id='Rounds' ref={roundRefs[0]} className='flex justify-center items-center h-screen'>
      <EventCard  image={download} title={'Round 1 -IQ ODYSSEY'} content={<ol>
        <li>1. Each team will be given 60 Questions to solve in x minutes. The questions will be a mix of aptitude and  programming. </li>
        <li>
         2.Top x teams will go to the next round.
        </li>
        <li>3.In case of tie breaker the team with better time will be considered </li>
      </ol>}/>
      </div>


      <div ref={roundRefs[1]} className='flex justify-center items-center h-screen'>
      <EventCard image={download} title={'Round-2'} content={<ul>
        <li>1.Audio-visual setup with buzzard questions.</li>
        <li>2.First team to press the buzzer gets the chance to answer.</li>
        <li>3.Correct answers earn 5 points, but an incorrect response results in a negative 2 points.</li>
      </ul>}/>
      </div>

      <div ref={roundRefs[2]} className='flex justify-center items-center h-screen'>
      <EventCard image={download} title={'ROUND 3 - ESCAPADE'} content={<ul>
        <li>1.Participants receive clues leading to the final treasure..</li>
        <li>2.Teams must search and find the final clue to win the round..</li>
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
    <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Prizes</h3>
    </div>
    </div>
    <div id='Contact Us' className='p-16'>
    <div className="flex justify-center items-center">
            <h3 className="font-bold mt-4 mb-4">Contact Us</h3>
        </div>
    </div>
    <div id="FAQ's">
    <FAQ/>
    </div>
    </>
  );
}
