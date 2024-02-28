import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center pt-4 ">
      <div className="mb-2">Escapade</div>
      <div className="mb-2">Some lines under it</div>
      <div className="flex justify-center items-center">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaInstagram className="text-white text-2xl" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
