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
    <div className="lg:mt-[22vh] mt-[8vh] overflow-hidden  bg-[#0288d1] lg:h-[12vh] h-[10vh] lg:px-[20vh] text-white font-bold text-5xl opacity-80 p-5 ">
    Product
     </div>
    <div className='lg:min-h-screen  lg:mt-[0vh]  lg:px-[15vh] lg:grid lg:grid-cols-2 '>
        <div className='lg:p-10 p-5 lg:mt-6 rounded-md'>
        
          <div className="mt-10 lg:mt-0 w-full z-0  h-50    rounded-lg transition duration-300 ease-in-out lg:relative ">
          <img
            className=" w-full rounded-lg"
            src={product1}
            alt=""
          />
        </div>
        </div>
        <div className='lg:p-10 p-5'>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>Swaknee</div>
            <div className='font-semibold text-4xl  mb-3 text-[#02569C] tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>Dimensions: 10 cm length x 10 cm breadth x 6.5 cm height</div>
            <div>Weight: 200 gm</div>
            <div>Battery: Lithium-ion, 10000 mAh, provides up to 10 hours of continuous use</div>
            <div>Material: Biocompatible materials ensure safety and comfort during use</div>
            <div>Technology: Incorporates high-efficiency electromagnets for effective PEMF therapy</div>
            <div>Operation: Simple one-click operation for ease of use</div>
            <div>Warranty: 1-year comprehensive coverage</div>
            <div>Package Includes: SWA-KNEE1 device, charging cable, user manual</div>
            <div>Special Features: Lightweight design suitable for active and sedentary lifestyles alike</div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white lg:w-[30%] ' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
         <div className='lg:p-10 p-5 '>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>SWA-KNEE module with screen</div>
            <div className='font-semibold text-4xl text-[#02569C] mb-3 tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>Dimensions: 20 cm length x 20 cm breadth x 12 cm height</div>
            <div>Weight: 500 gm</div>
            <div>Battery: Lithium-ion, 10000 mAh, up to 15 hours of operation</div>
            <div>Material: High-grade biocompatible materials with enhanced durability</div>
            <div>Technology: Advanced IoT capabilities for smart monitoring and control
</div>
            <div>Interface: User-friendly touch interface for adjusting settings</div>
            <div>Operation: One-click startup with additional touch controls</div>
            <div>Package Includes: SWA-KNEE2 device, USB charging cable, comprehensive user guide</div>
            <div>Special Features: IoT enabled for integration with other smart devices and health apps, robust construction suitable for varying climatic conditions </div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white lg:w-[30%]' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
        <div className='lg:p-10 p-5 mt-6  '>
            <img className='shadow-2xl border rounded-md' src={product2} alt="" />
        </div>
      
        <div className='lg:p-10 p-5 mt-6  '>
        <Slider {...carouselSettings} className="transition duration-300 h-[58vh] ease-in-out shadow-xl">
          {carouselData.map(item => (
            <div key={item.id}>
              <img src={item.image} alt="img" className="w-full lg:h-[58vh]" />
            </div>
          ))}
        </Slider>

        </div>
        <div className='lg:p-10 p-5 '>
            <div className='font-bold text-5xl tracking-tighter text-[#02569C] mb-2'>Electromagnetic Knee Brace</div>
            <div className='font-semibold text-4xl text-[#02569C] mb-3 tracking-tight'>Product Specification</div>
            <div className='bg-zinc-600 h-[0.5px] w-[50%]'></div>
            <div className='flex flex-col gap-2 mt-3 font-semibold'>
            <div>Material: Lightweight, durable fabric integrated with biocompatible components.</div>
            <div>Technology: Embedded with electromagnetic coils that generate therapeutic pulsed electromagnetic fields (PEMF).</div>
            <div>Operation: One-click operation with LED indicators for therapy settings.</div>
            <div>Battery: Rechargeable lithium-ion battery capable of several hours of continuous operation.</div>
            <div>Therapeutic Benefits: Helps to reduce inflammation, promote circulation, and accelerate recovery.</div>
            <div>Size Options: Available in various sizes to ensure a proper fit for all users.
</div>
            <div>Special Features: Designed for both active and sedentary lifestyles, can be worn discreetly under clothing.</div>
            <div>Warranty: Comes with a minimum one-year warranty covering defects and functionality.
</div>
            <div>Package Includes: Electromagnetic knee brace, electronic controller, charging cable, and user manual.</div>
            <button className='  hover:bg-[#212ea0] bg-[#f57c00] mt-3   px-7 py-2   rounded-full items-center font-semibold text-white lg:w-[30%]' type='submit'>
                 Book Now 
                </button>

            </div>
         </div>
       
        </div>
          </div>
  )
}

export default Producthero