import { IoIosCheckmarkCircle } from "react-icons/io";
import Marquee from "react-fast-marquee";
const Whyswaknee = () => {
  return (
    <div className=''>
      <div className='mb-1 md:mb-5 ml-8 md:ml-0  mt-10 md:mt-16 font-bold text-[#0288D1] text-3xl lg:text-5xl tracking-tight text-center'>
       Why Swaknee?
      </div>
      
      <Marquee speed={100} gradient={true} className="mt-10 gap-[10vh]">

      <div className=" px-5 md:px-8 lg:-px-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-4 -px-[40vh]">

        <div className="flex flex-col items-center p-2 ml-5">
        <IoIosCheckmarkCircle color='#ffa405' size='50' />
        <div className=" text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Clinically Proven  </div>
        <p className="opacity-90 text-center w-[50vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur!</p>
        </div>

        <div className="flex flex-col items-center p-2 ml-5">
        <IoIosCheckmarkCircle color='#ffa405' size='50' />
        <div className=" text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Non Invasive  </div>
        <p className="opacity-90 text-center w-[50vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur!</p>
        </div>

        <div className="flex flex-col items-center p-2 ml-5">
        <IoIosCheckmarkCircle color='#ffa405' size='50' />
        <div className=" text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Patented Technology  </div>
        <p className="opacity-90 text-center w-[50vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur!</p>
        </div>

        <div className="flex flex-col items-center p-2 ml-5">
        <IoIosCheckmarkCircle color='#ffa405' size='50' />
        <div className=" text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Chemical/Drug Free </div>
        <p className="opacity-90 text-center w-[50vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur!</p>
        </div>
       
       
           
        </div>
          </div>
        </Marquee>
        </div>
        
       
    
  );
}

export default Whyswaknee;
