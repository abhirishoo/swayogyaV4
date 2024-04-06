
import React from 'react';
import Marquee from "react-fast-marquee";

import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/clinical/7.jpeg";
import image2 from "../../assets/clinical/6.jpeg";
import image3 from "../../assets/clinical/5.jpeg";
import image4 from "../../assets/clinical/4.jpg";
import image5 from "../../assets/clinical/3.jpeg";
import image6 from "../../assets/clinical/2.jpeg";
import image7 from "../../assets/clinical/1.jpeg";
import Partners from './Partners';

const Clinical = () => {

  const carouselData = [
    { id: 1, image: image1, title: "Title 1", description: "Description 1" },
    { id: 2, image: image2, title: "Title 2", description: "Description 2" },
    { id: 3, image: image3, title: "Title 3", description: "Description 3" },
    { id: 4, image: image4, title: "Title 4", description: "Description 4" },
    { id: 5, image: image5, title: "Title 5", description: "Description 5" },
    { id: 6, image: image6, title: "Title 6", description: "Description 6" },
    { id: 7, image: image7, title: "Title 7", description: "Description 7" }
  ];
  

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='   '>
      <div className='mb-1 md:mb-5 ml-8 md:ml-[12%] mt-[80%] md:mt-16 font-bold text-[#0288D1] text-3xl lg:text-5xl tracking-tight'>
        Clinically Proven Device
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%]  md:ml-[11%] ml-5 h-[50%] md:h-[49.6%] shadow-lg'>
      
        <div className='flex flex-col  px-4 md:px-8 py-4 md:py-7'>
          <div className='font-bold text-xl md:text-3xl text-[#263238] tracking-tight mb-4'>
            Swaknee
          </div>
          <div className='text-sm md:text-lg text-[#263238] mb-4'>
          The<i> Swaknee</i> device offers safe and effective relief from knee pain, making it ideal for individuals with osteoarthritis seeking alternatives to medication and surgery. Its low-frequency electromagnetic waves promote healing, reduce inflammation, and enhance circulation. Convenient and non-invasive, it improves knee functionality and overall joint health while being easy to use with its one-button operation. With a portable, biocompatible knee brace included, it's clinically proven to reduce pain and enhance range of motion.
          </div>
          <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
            <div className=' flex px-5 md:ml-[75%] md:mt-[11%]  font-bold text-[#0288D1] text-[0.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>About Us 
            </div>
            <span className='  -ml-[3%] md:mt-[11%] text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'  /></span>
          
          </div>
          
        </div>
        <div className=' '>
          <div className="w-full px-5">
            <div className="w-full">
              {/* <Slider {...carouselSettings} className="w-full hover:scale-105 transition duration-300 ease-in-out  lg:h-[60vh] shadow-xl rounded-xl">
                {carouselData.map(item => (
                  <div key={item.id}>
                    <img src={item.image} alt="img" className="w-full lg:h-[58vh]" />
                  </div>
                ))}
              </Slider> */}
              {/* <Partners/> */}
              <Marquee speed={60} gradientWidth={20}  gradient={true} className="mt-10">
                <div className="md:gap-10 mt-12 gap-5 flex flex-row">
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image1} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image2} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image3} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image4} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image5} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image6} alt="" /> </div>
        <div> <img className="md:w-30 md:h-60 w-15 h-12 px-2 " src={image7} alt="" /> </div>
     
        </div>
        </Marquee>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clinical;
