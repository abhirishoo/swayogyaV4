import { IoIosCheckmarkCircle } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Whyswaknee = () => {
  return (
    <div>
      {/* Section heading */}
      <div className='mb-1 md:mb-5 ml-8 md:ml-0 mt-10 md:mt-16 font-bold text-[#0288D1] text-3xl lg:text-5xl tracking-tight text-center'>
        Why Swaknee?
      </div>
      
      {/* Marquee with uniform gap */}
      <Marquee speed={100} gradient={true} className="mt-10 ">
        {/* Content */}
        <div className="px-5 md:px-8 lg:-px-10 ">
          {/* Grid with four columns */}
          <div className="grid grid-cols-4 -px-[40vh]">

            {/* Item 1 */}
            <div className="flex flex-col items-center p-2 ml-5 mr-10"> {/* Add mr-10 for right margin */}
              <IoIosCheckmarkCircle color='#ffa405' size='50' />
              {/* Title */}
              <div className="text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Clinically Proven  </div>
              {/* Description */}
              <p className="opacity-90 text-center w-[50vh]"> Efficacy and safety validated through rigorous clinical trials</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center p-2 ml-5 mr-10"> {/* Add mr-10 for right margin */}
              <IoIosCheckmarkCircle color='#ffa405' size='50' />
              <div className="text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Non Invasive  </div>
              <p className="opacity-90 text-center w-[50vh]">Enhances health without penetrating the skin or body</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center p-2 ml-5 mr-10"> {/* Add mr-10 for right margin */}
              <IoIosCheckmarkCircle color='#ffa405' size='50' />
              <div className="text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  Patented Technology  </div>
              <p className="opacity-90 text-center w-[50vh]">Features exclusive, proprietary technological advancements. </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center p-2 ml-5"> {/* No right margin for the last item */}
              <IoIosCheckmarkCircle color='#ffa405' size='50' />
              <div className="text-2xl mt-3 mb-2 font-semibold gap-2 flex items-center">  100 % Drug Free </div>
              <p className="opacity-90 text-center w-[50vh]">Completely devoid of chemicals or pharmaceutical substances.</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Whyswaknee;
