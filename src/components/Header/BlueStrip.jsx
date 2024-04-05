import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const BlueStrip = () => {
  return (
    <div className='hidden md:flex z-10 flex-row w-full fixed top-0 bg-[#0288D1] text-white px-44 font-regular  justify-end  p-2.5 text-md'>
        <span>
            from the American Academy of Orthopaedic Surgeons
        </span>
        <div className='hover:scale-x-130 lg:-my-0.5 text-[#05a7ff]  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
            <MdKeyboardArrowRight size={30}  />
        </div> 
    </div>
  );
};

export default BlueStrip;
