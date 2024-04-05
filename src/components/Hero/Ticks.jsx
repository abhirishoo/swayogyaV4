import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Ticks = () => {
  return (
    <div className="mt-20 lg:mt-20 w-full h-auto md:h-40 flex flex-col md:flex-row md:px-36 px-5 text-lg font-semibold justify-between">
      <div className="md:w-1/3 w-full lg:ml-20 mb-5 md:mb-0">
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircle color='#ffa405' size='50' />
          <div className='lg:text-2xl'>
            Excellence Research 
            <div className='text-sm opacity-75 font-normal mt-1'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Ut elit tellu.</div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full mb-5 md:mb-0">
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircle color='#ffa405' size='50' />
          <div className='lg:text-2xl'>
            Professional Therapist
            <div className='text-sm opacity-75 font-normal mt-1'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Ut elit tellu.</div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full mb-5 md:mb-0">
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircle color='#ffa405' size='50' />
          <div className='lg:text-2xl'>
            Personal Treatment
            <div className='text-sm opacity-75 font-normal mt-1'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit Ut elit tellu.</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Ticks;
