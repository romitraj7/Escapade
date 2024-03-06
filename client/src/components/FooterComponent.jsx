import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center pt-4">
     <div className='flex flex-col mt-4'>
        <div className=" text-4xl font-dealoras">ESCAPADE</div>
        <p className='text-lg font-sans '>An event Organised By ECE Department MCKVIE , Liluah - Howrah , West Bengal 711202.</p>
     </div>
        <div className='flex justify-center gap-2'>
        <p className='text-lg font-sans '>Follow Us On :- </p>
        <a href="https://www.instagram.com/escapadeece?igsh=cDIwam52OTZkYW5j" target="_blank" rel="noopener noreferrer" className="mr-4 flex">
          <FaInstagram className="text-white text-2xl" />
        </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className='font-sans text-lg'>Join the Whatsapp Group:- </p>
        <a href="https://chat.whatsapp.com/CjY7jx9tQXB93ePsoUsWrC" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl mb-3" />
        </a>
      </div>
      
    </footer>
  );
};

export default FooterComponent;
