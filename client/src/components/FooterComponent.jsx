import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center pt-4">
     <div className='flex flex-col'>
        <div className=" text-2xl font-serif italic">ESCAPADE</div>
        <p className='text-lg italic'>An event Organised By ECE Dept. MCKVIE</p>
     </div>
        <div className='flex justify-center gap-2'>
        <p className='text-xl italic'>Follow Us On :- </p>
        <a href="https://www.instagram.com/escapadeece?igsh=cDIwam52OTZkYW5j" target="_blank" rel="noopener noreferrer" className="mr-4 flex">
          <FaInstagram className="text-white text-2xl" />
        </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className='italic text-xl'>Join the Whatsapp Group:- </p>
        <a href="https://chat.whatsapp.com/CjY7jx9tQXB93ePsoUsWrC" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl mb-3" />
        </a>
      </div>
      
    </footer>
  );
};

export default FooterComponent;
