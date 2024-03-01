import React from 'react';
import { Link } from 'react-router-dom';
import download from '../images/download.png'
import round3 from '../images/round3.jpg'
export default function PostCard() {
  return (
    <div className='flex flex-wrap gap-2 mt-4'>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[320px] overflow-hidden rounded-lg sm:w-[380px] md:w-[280px] lg:w-[380px] transition-all'>
        <Link to={'/events'}>
          <img
            src={download}
            alt='post cover'
            className='h-[200px] w-full object-cover group-hover:h-[160px] transition-all duration-300 z-20'
          />
        </Link>
        <div className='p-3 flex flex-col items-center font-semibold'>
          <p className='text-lg font-semibold line-clamp-2'>IQ ODYSSEY</p>
          <span className='italic text-sm'>Test your mental agility and problem-solving skills in a battle of wits.</span>
          <Link
            to={'/events'}
            className='z-10 group-hover:bottom-0 absolute bottom-[-160px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          >
            Know More
          </Link>
        </div>
      </div>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[320px] overflow-hidden rounded-lg sm:w-[380px] md:w-[280px] lg:w-[380px] transition-all'>
        <Link to={'/events'}>
          <img
            src={download}
            alt='post cover'
            className='h-[200px] w-full object-cover group-hover:h-[160px] transition-all duration-300 z-20'
          />
        </Link>
        <div className='p-2 flex flex-col items-center font-semibold'>
          <p className='text-lg font-semibold line-clamp-2'>QUIZ</p>
          <span className='italic text-sm '>Dive into a whirlwind of knowledge across diverse genres in a quest for supremacy.</span>
          <Link
            to={'/events'}
            className='z-10 group-hover:bottom-0 absolute bottom-[-160px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          >
            Know More
          </Link>
        </div>
      </div>
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[320px] overflow-hidden rounded-lg sm:w-[380px] md:w-[280px] lg:w-[380px] transition-all'>
        <Link to={'/events'}>
          <img
            src={round3}
            alt='post cover'
            className='h-[200px] w-full object-cover group-hover:h-[160px] transition-all duration-300 z-20'
          />
        </Link>
        <div className='p-3 flex flex-col items-center font-semibold'>
          <p className='text-lg font-semibold line-clamp-2'>Treasure Hunt</p>
          <span className='italic text-sm'>Embark on an exhilarating adventure to uncover hidden treasures and solve riddles along the way</span>
          <Link
            to={'/events'}
            className='z-10 group-hover:bottom-0 absolute bottom-[-160px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
