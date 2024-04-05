import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
    
const Whatsapp = () => {
  return (
    <div className='flex  flex-row'>
      <div className="fixed bottom-[32px] right-[67px]">
        <a
            target="_blank"
            rel="noopener noreferrer" 
         href="https://wa.me/9079938655" className="p-2 shadow-md text-black bg-slate-100  text-sm rounded-l-xl">

          <span className='font-semibold'> Chat with us </span>
        </a>
      </div>
      <a
        href="https://wa.me/9079938655"
        className="fixed w-14 h-14 bottom-4 right-4 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl shadow-md z-50 transition-all duration-300 hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
