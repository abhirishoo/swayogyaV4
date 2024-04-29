import { Link } from 'react-router-dom';
import logo from '../../assets/marquee/SWA-KNEE - _Forget Pain Walk and Run Again” (online-video-cutter.com).mp4';
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='lg:-mt-5 mt-[30vh]'>
      <div className='mb-1 md:mb-5 ml-8 md:ml-[12%]   md:mt-16 font-bold text-[#0288D1] text-3xl lg:text-5xl tracking-tight'>
        Welcome to Swayogya Rehab Solution
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%]  md:ml-[11%] ml-5 h-[50%] md:h-[49.6%] shadow-lg'>
       
        <div className='flex flex-col  px-4 md:px-8 py-4 md:py-7'>
          <div className='font-bold text-xl md:text-3xl text-[#263238] tracking-tight mb-4'>
            About Swayogya
          </div>
          <div className='text-sm md:text-lg text-[#263238] mb-4'>
            At <i>Swayogya</i>, we explore PEMF therapy for knee osteoarthritis, blending innovation and compassion to transform healthcare. With a focus on R&D, we bridge science and societal well-being, offering hope and improved quality of life to those with chronic conditions. Join us as we redefine medical technology, making high-quality treatment accessible to all.
          </div>
          <div className=' flex cursor-pointer hover:text-[#00b0ff] '>
          <div className=' flex px-5 md:ml-[75%] md:mt-[11%]  font-bold text-[#0288D1] text-[0.1vw] lg:text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '> <Link to={"/aboutus"}>Know more </Link>
            </div>
            <span className='  -ml-[3%] md:mt-[11%] text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'  /></span>
          </div>
        </div>
        <div className=' '>
        <div className="w-full px-5">
       
        <div className="w-full  -mt-10 lg:mt-0  shadow-[rgba(0,_0,_0,_0.58)_0px_3px_8px]  rounded-lg transition duration-300 ease-in-out ">
          <video
            autoPlay
            muted
            className=" mt-10 rounded-lg"
            src={logo}
            alt="video"
          />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
