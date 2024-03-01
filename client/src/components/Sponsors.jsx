import React from 'react';
import download from '../images/download.png';
import { Link } from 'react-router-dom';

export default function Sponsors() {
  return (
    <div className="flex justify-center items-center">
      <div className='flex flex-col items-center'>
        <div className="flex">
          <div className="mx-6 ">
          <Link to={''}>
            <img src={download} alt="Sponsor Logo" className="w-28  h-28 rounded-full" />
          </Link>
            <h1 className="text-center mt-2">Sponsor 1</h1>
          </div>
          <div className="mx-4">
          <Link to={''}>
            <img src={download} alt="Sponsor Logo" className="w-28 h-28 rounded-full" />
          </Link>
            <h1 className="text-center mt-2">Sponsor 2</h1>
          </div>
          <div className="mx-4">
          <Link to={''}>
            <img src={download} alt="Sponsor Logo" className="w-28 h-28 rounded-full" />
          </Link>
            <h1 className="text-center mt-2">Sponsor 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
