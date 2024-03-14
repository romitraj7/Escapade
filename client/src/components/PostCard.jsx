import React from 'react';
import { Link } from 'react-router-dom';
import apti from '../images/general aptitude.png'
import audiovisual from '../images/audio visual.png'
import thunt from '../images/treasure hunt.png'
export default function PostCard() {
  return (
    <div className='flex flex-wrap gap-2 mt-4'>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[430px] overflow-hidden rounded-lg sm:w-[400px] transition-all'>
      <Link to={`/events`}>
        <img
          src={apti}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20 rounded-full'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='mx-auto text-3xl font-semibold line-clamp-2 font-luckyfarmer'>APTITUDE</p>
        <span className='italic text-sm font-semibold'>Test your mental agility and problem-solving skills in a battle of wits.</span>
        <Link
          to={`/events`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-white bg-teal-500  transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Know More
        </Link>
      </div>
    </div>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[430px] overflow-hidden rounded-lg sm:w-[400px] transition-all'>
      <Link to={`/events`}>
        <img
          src={audiovisual}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20 rounded-full'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='mx-auto text-3xl font-semibold line-clamp-2 font-luckyfarmer'>Audio-Visual</p>
        <span className='italic text-md font-semibold'>Dive into a whirlwind of knowledge across diverse genres in a quest for supremacy.</span>
        <Link
          to={`/events`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 bg-teal-500 text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Know More
        </Link>
      </div>
    </div>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[450px] overflow-hidden rounded-lg sm:w-[400px] transition-all'>
      <Link to={`/events`}>
        <img
          src={thunt}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20 rounded-full'
        />
      </Link>
      <div className='p-2 flex flex-col gap-2'>
        <p className='mx-auto text-3xl font-semibold line-clamp-2 font-luckyfarmer'>Treasure Hunt</p>
        <span className='italic text-sm font-semibold'>Embark on an exhilarating adventure to uncover hidden treasures and solve riddles along the way</span>
        <Link
          to={`/events`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 bg-teal-500 text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Know More
        </Link>
      </div>
    </div>
      
      </div>
  );
}
