import swaknee from '../../assets/Product/swaknee.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { TEInput, TERipple } from 'tw-elements-react';
import BlogCard from './BlogCard';

const Swaknee = () => {
  return (
    <div className='   '>
    <hr className='md:my-5 my-2 border-[1.5px] bg-black' />
        
      <div className='mb-1 md:mb-5 ml-8 md:ml-[12%] mt-[80%] md:mt-16 font-bold text-[#C2185B] text-3xl lg:text-5xl tracking-tight'>
        Swaknee
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%]  md:ml-[11%] ml-5 h-[50%] md:h-[54.6vh] shadow-lg'>
        <div className=' '>
        <TERipple rippleColor="light">   <BlogCard img={swaknee}/> </TERipple>
        </div>
        <div className='flex flex-col  px-4 md:px-8 py-4 md:py-7'>
          <div className='font-bold text-xl md:text-3xl text-[#263238] tracking-tight mb-4'>
          Swaknee - the Knee Osteoarthritis Relief System!
          </div>
          <div className='text-sm md:text-lg text-[#263238] mb-4'>
          Introducing<i> Swaknee</i> the portable, IoT-enabled device harnessing advanced PEMF technology to reduce knee pain, improve functionality, and promote overall joint health. With its rechargeable battery and user-friendly design, SWA-KNEE offers a convenient solution for those seeking relief and mobility. Say goodbye to discomfort and hello to freedom with SWA-KNEE.
          </div>
          <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-5 md:ml-[75%] md:mt-[5%]  font-bold text-[#0288D1] text-[0.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>Swaknee
            </div>
            <span className='  -ml-[3%] md:mt-[5%] text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'  /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swaknee;
