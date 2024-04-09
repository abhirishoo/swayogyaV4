import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const BlueStrip = () => {
  return (
    <div className='hidden md:flex z-10 flex-row w-full fixed top-0 bg-[#0288D1] text-white px-44 font-regular  justify-end  p-2.5 text-md'>
        <span>
        Forget Pain Walk and Run Again with Swaknee device
        </span>
      <Link to={"/product"}> 
       <div className='hover:scale-x-130 lg:-my-0.5 text-[#05a7ff]  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
            <MdKeyboardArrowRight size={30}  />
        </div> 
        </Link>
    </div>
  );
};

export default BlueStrip;
