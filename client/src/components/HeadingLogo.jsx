import React from 'react';
import EscapadeLogo from '../images/EscapadeLogo.jpeg';

export default function HeadingLogo() {
  return (
    <div className='mx-auto mt-4 mb-4 text-center h-screen pt-4'>
      <div className='flex flex-col gap-4 items-center sm:flex-row sm:justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h4 className='font-bold italic text-4xl'>Welcome To Escapade</h4>
          <p>An event organised by ECE department</p>
        </div>
        <div>
          <img src={EscapadeLogo} alt='Escapade Logo' className='w-48 sm:w-auto md:w-64 lg:w-72 xl:w-80' />
        </div>
      </div>
    </div>
  );
}
