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
            Experience the benefits of our PEMF (Pulsed Electromagnetic Field) Therapy Devices, designedtoenhance cellular repair and overall wellness. Our devices leverage patented technology to deliver painrelief and improved mobility without drugs or invasive methods, ensuring a natural and holistic approachto health.
            </p>  <Link to={"/services"}> 
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
             <div className=' flex px-6 md:ml-[65%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer  hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Explore 
            </div>
            <span className='  lg:-ml-[8%] -ml-[6%] mt-0.5 text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div> </Link>
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
            Our comprehensive rehabilitation services include a range of products that support recovery and improve physical capabilities. Whether recovering from injury or managing chronic conditions, our tailored solutions help individuals regain strength and mobility through state-of-the-art rehabilitation techniques.    </p> <Link to={"/services"}> 
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-6 md:ml-[65%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Explore 
            </div>
            <span className='  lg:-ml-[8%] -ml-[6%] mt-0.5 text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div></Link>
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
            <p className="mb-4 text-base text-neutral-600  dark:text-neutral-200">
            Stay ahead with our education and training programs focusing on cutting-edge technologies such as AI/ML, DSP in healthcare, and rapid prototyping. These programs are designed to empower healthcare professionals and enthusiasts with the skills and knowledge to implement the latest advancements in their practices.     </p> <Link to={"/services"}> 
            <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-6 md:ml-[65%]   ml-[75%]   font-bold text-[#0288D1] text-[4.1vw] lg:text-[1vw] tracking-tight cursor-pointer  hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out '>Explore 
            </div>
            <span className='  lg:-ml-[8%] -ml-[6%]  text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'    /></span>
          </div></Link>
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
