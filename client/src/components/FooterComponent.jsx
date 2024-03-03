import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center pt-4 ">
      <div className="mb-2 text-2xl font-sans">Escapade</div>
      <div className="mb-2">MCKVIE</div>
        <div className='flex justify-center gap-2'>
        <p className='text-lg'>Follow Us on :- </p>
        <a href="https://www.instagram.com/escapadeece?igsh=cDIwam52OTZkYW5j" target="_blank" rel="noopener noreferrer" className="mr-4 flex">
          <FaInstagram className="text-white text-2xl" />
        </a>
        </div>
        <div className="flex justify-center items-center gap-2">
        <h3>Join :- </h3>
        <a href="https://chat.whatsapp.com/CjY7jx9tQXB93ePsoUsWrC" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
      
    </footer>
  );
};

export default FooterComponent;
