import React from 'react';
import { TERipple } from 'tw-elements-react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
         <div className='mb-1 md:mb-5 ml-8 md:ml-[13%]  mt-10 md:mt-16 font-bold text-[#F57C00] text-3xl lg:text-3xl tracking-tight'>
        Our Services
      </div>
    <div className="flex flex-wrap justify-center  md:px-[12%]">

      <div className="w-full sm:w-1/2 md:w-1/3  p-4"> {/* Adjust width for different screen sizes */}
        <div className="  bg-white shadow-lg items-center flex flex-col dark:bg-neutral-700">
        <Link to={"/services"}>  <TERipple rippleColor='Light'>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <MdHealthAndSafety size={65} className="w-full text-[#0288D1]  " />
            </div>
          </TERipple > </Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            PEMF Therapy Devices
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-6 md:ml-[55%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Explore 
            </div>
            <span className='  lg:-ml-[10%] -ml-[6%] mt-0.5 text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3  p-4"> {/* Adjust width for different screen sizes */}
        <div className="  bg-white shadow-lg items-center flex flex-col dark:bg-neutral-700">
        <Link to={"/services"}><TERipple rippleColor='Light'>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                < RiMicroscopeLine size={65} className="w-full text-[#0288D1]  " />
            </div>
          </TERipple ></Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            Rehabilitation Services
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-6 md:ml-[55%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Explore 
            </div>
            <span className='  lg:-ml-[10%] -ml-[6%] mt-0.5 text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3  p-4"> {/* Adjust width for different screen sizes */}
        <div className="  bg-white shadow-lg items-center flex flex-col dark:bg-neutral-700">
        <Link to={"/services"}>   <TERipple rippleColor='Light'>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <FaBookReader size={65} className="w-full text-[#0288D1]  " />
            </div>
          </TERipple > </Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            Educational Resources
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-6 md:ml-[55%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Explore 
            </div>
            <span className='  lg:-ml-[10%] -ml-[6%] mt-0.5 text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div>
          </div>
        </div>
      </div>

  
      
      {/* Add more card components as needed */}
    </div>
    <hr className='md:my-5  border-[1.5px] bg-black' />
    
    </div>
  );
}

export default Services;
