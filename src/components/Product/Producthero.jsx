import React from 'react'
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/Product/product1.jpg"
import product2 from "../../assets/Product/product2.jpg"
import brace2 from "../../assets/Product/brace/2.jpg"
import brace4 from "../../assets/Product/brace/4.jpg"
import brace5 from "../../assets/Product/brace/5.jpg"

const Producthero = () => {
    const carouselData = [
        { id: 1, image: brace2, title: "", description: "" },
        { id: 3, image: brace4, title: "", description: "" },
        { id: 4, image: brace5, title: "", description: "" },
      ];
    
      const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div className="lg:mt-[22vh] mt-[12vh] overflow-hidden  bg-[#02569C] h-[12vh] px-[20vh] text-white font-bold text-5xl opacity-80 p-5 ">
    Product
     </div>
    <div className='min-h-screen  lg:mt-[0vh]  px-[15vh] grid grid-cols-2 '>
        <div className='p-10 mt-6 rounded-md'>
        
          <div className="mt-10 lg:mt-0 w-full z-0  h-50    rounded-lg transition duration-300 ease-in-out lg:relative ">
          <img
            className=" w-full rounded-lg"
            src={product1}
            alt=""
          />
        </div>
        </div>
        <div className='p-10'>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>Swaknee</div>
            <div className='font-semibold text-4xl  mb-3 text-[#02569C] tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>23 lb (10.4 kg)</div>
            <div>17” L x 9” W x 13.5” H</div>
            <div>Spark Gap Power</div>
            <div>Single Outlet for use of one accessory at a time</div>
            <div>Infinity Timer.</div>
            <div>Simple one-dial control for low-to-high magnetic field strength intensity</div>
            <div>Durable, high-impact pelican case</div>
            <div>100% Polyester shoulder strap for easy transport</div>
            <div>Minimal maintenance required.</div>
            <div>Compatible with our full line of exclusive accessories</div>
            <div>3-Year Limited Warranty</div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white w-[30%]' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
         <div className='p-10 '>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>Swaknee</div>
            <div className='font-semibold text-4xl text-[#02569C] mb-3 tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>23 lb (10.4 kg)</div>
            <div>17” L x 9” W x 13.5” H</div>
            <div>Spark Gap Power</div>
            <div>Single Outlet for use of one accessory at a time</div>
            <div>Infinity Timer.</div>
            <div>Simple one-dial control for low-to-high magnetic field strength intensity</div>
            <div>Durable, high-impact pelican case</div>
            <div>100% Polyester shoulder strap for easy transport</div>
            <div>Minimal maintenance required.</div>
            <div>Compatible with our full line of exclusive accessories</div>
            <div>3-Year Limited Warranty</div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white w-[30%]' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
        <div className='p-10 mt-6  '>
            <img className='shadow-2xl border rounded-md' src={product2} alt="" />
        </div>
      
        <div className='p-10 mt-6  '>
        <Slider {...carouselSettings} className="transition duration-300 h-[58vh] ease-in-out shadow-xl">
          {carouselData.map(item => (
            <div key={item.id}>
              <img src={item.image} alt="img" className="w-full lg:h-[58vh]" />
            </div>
          ))}
        </Slider>

        </div>
        <div className='p-10 '>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>Swaknee</div>
            <div className='font-semibold text-4xl text-[#02569C] mb-3 tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>23 lb (10.4 kg)</div>
            <div>17” L x 9” W x 13.5” H</div>
            <div>Spark Gap Power</div>
            <div>Single Outlet for use of one accessory at a time</div>
            <div>Infinity Timer.</div>
            <div>Simple one-dial control for low-to-high magnetic field strength intensity</div>
            <div>Durable, high-impact pelican case</div>
            <div>100% Polyester shoulder strap for easy transport</div>
            <div>Minimal maintenance required.</div>
            <div>Compatible with our full line of exclusive accessories</div>
            <div>3-Year Limited Warranty</div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white w-[30%]' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
       
        </div>
          </div>
  )
}

export default Producthero