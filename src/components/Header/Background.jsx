import{ useState, useEffect } from 'react';
import banner5 from '../../assets/4.jpg';
import banner5mobile from '../../assets/banner5mobile.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";

const Background = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    setShouldAnimate(true); // Trigger animation on component mount
    const timeout = setTimeout(() => {
      setShouldAnimate(false); // Reset animation after a delay
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <div className='relative'>
      {/* Background Image */}
      <div className='hidden md:block h-screen bg-cover md:mt-[13%] lg:mt-[13%]' style={{ backgroundImage: `url(${banner5})` }}>
      </div>
      <div className='sm:block md:hidden h-screen bg-cover' style={{ backgroundImage: `url(${banner5mobile})` }}></div>
      {/* Circle */}
      {/* <div 
        className={`hidden lg:block absolute cursor-pointer transition left-[54%] top-[40%] duration-500 ease-in-out ${isHovered ? 'scale-150' : ''} ${shouldAnimate ? 'translate-[50%] scale-0' : 'left-[54%] top-[40%] scale-1'}`}
        style={{
     
          background: '#DE222D',
          opacity: '0.75',
          width: '6vw',
          height: '6vw',
          borderRadius: '50%',
        
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      ></div> */}
      {/* Text */}
      {/* <div className='absolute md:top-[10%] lg:top-[6%] lg:left-[19.5%] md:left-[23%] bg-white rounded-md font-bold text-[#0288D1] md:text-[3.8vw] lg:text-[2.8vw] text-[6.5vw] top-[15%] left-[10%]  leading-none tracking-tighter'>Find information <br /> about knee  </div> */}
      {/* Information Box */}
      <div className='absolute rounded-sm shadow-md cursor-pointer bg-[#FFFFFF] lg:h-[68vh] md:h-[72vh] w-[90%] lg:w-[21vw] md:w-[30vw] text-start  md:text-center  md:top-[23%] lg:top-[22%] lg:left-[30%] md:left-[39%] left-[50%] top-[90%]  -translate-x-1/2'>
        <div className='border-b shadow-sm p-[3vw] md:p-[1.5vw]   font-bold text-[#00B0FF] lg:text-[1.9vw] text-[5.6vw] md:text-lg tracking-tighter '> About Your Knee </div>
        <div className='hidden md:block border-b shadow-sm ml-2 p-[3vw] md:p-[1vw]  text-start lg:text-[1vw] '> <span className='text-[#c2185b] '> Diseases and CONDITIONS </span> <br /> <span className='font-bold'>Rotator Cuff Tears</span> </div>
        <div className='border-b shadow-sm ml-2 p-[3vw] text-start lg:text-[1vw]  md:p-[1vw]'> <span className='text-[#c2185b] '> Diseases and CONDITIONS </span> <br /> <span className='font-bold'>Bicep Tendon tear at <br /> shoulder</span> </div>
        <div className='border-b shadow-sm ml-2 p-[3vw] text-start lg:text-[1vw]  md:p-[1vw]'> <span className='text-[#F57C00] '> TREATMENT </span> <br /> <span className='font-bold'>Shoulder Arthroscopy</span> </div>
        <div className='border-b shadow-sm p-[3vw] text-start ml-2 lg:text-[1vw]  md:p-[1vw]'> <span className='text-[#512DA8] '> RECOVERY </span> <br /> <span className='font-bold'>Rotator Cuff Shoulder Repairing Program</span> </div>
        <div className='shadow-sm gap-[.4vh] p-[4vw] md:p-[1vw] flex md:gap-[0.2vw] justify-end  font-bold text-[#0288D1]  lg:text-[1.2vw] '> See more <span className='text-[#00B0FF]'> knee </span> topics   <span className='hidden md:block hover:scale-105  text-[#05a7ff] hover:translate-x-[0.3vw] lg:-mx-1 transition duration-300 ease-in-out'>
            <MdKeyboardArrowRight size='1.6vw' />
        </span>  
      </div>
      </div>
    </div>
  );
};

export default Background;
