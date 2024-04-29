import React from 'react';
import training from "../../assets/Product/brace/rehablitation.png";
import education from "../../assets/training/1.jpg";
import pemf from "../../assets/Product/brace/pemf.png";
import { Link } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";

const Servicespage = () => {
    return (
        <div>
            <div className="lg:mt-[22vh] mt-[8vh] bg-[#0288d1] lg:h-[12vh] h-[10vh]  lg:px-[20vh] text-white font-bold text-5xl  opacity-80 p-5">
                Services
            </div>

            <div className=''>
            </div>
            <div className="p-5 py-10 md:px-8 lg:px-32">
                {/* block */}
                <div className="shadow-xl grid grid-cols-1 p-10 md:grid-cols-2">
                    <div className='w-full'>
                        <div className="w-full px-5">
                            <img
                                className="w-full rounded-lg"
                                src={pemf}
                                alt="PEMF Therapy Devices"
                            />
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2">PEMF Therapy Devices</div>
                        <p className="text-base md:text-lg">
                        Experience the benefits of our PEMF (Pulsed Electromagnetic Field) Therapy Devices, designed to enhance cellular repair and overall wellness. Our devices leverage patentedtechnology to deliver pain relief and improved mobility without drugs or invasive methods, ensuring a natural and holistic approach to health.         </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className= ' hover:bg-[#f57b00d4] bg-[#F57C00] mt-10 lg:px-7 md:px-11 py-2 px-10 ml-12 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
                    </div>
                </div>
                <div className="shadow-xl grid grid-cols-1 p-10 md:grid-cols-2">
                    <div className="mt-10 md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2">Rehabilitation Services</div>
                        <p className="text-base md:text-lg">
                        Our comprehensive rehabilitation services include a range of products that support recoveryand improve physical capabilities. Whether recovering from injury or managing chronicconditions, our tailored solutions help individuals regain strength and mobility throughstate-of-the-art rehabilitation techniques.
                        </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00]  mt-10 lg:px-7 md:px-11 px-10 py-2 ml-12 mb-10 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
                    </div>
                    <div className='w-full'>
                        <div className="w-full px-5">
                            <img
                                className="w-full h-[80vh] rounded-lg"
                                src={training}
                                alt="Educational Resources"
                            />
                        </div>
                    </div>
                </div>
                <div className="shadow-xl grid grid-cols-1 p-10 md:grid-cols-2">
                    <div className='w-full'>
                        <div className="w-full px-5">
                            <img
                                className="w-full rounded-lg"
                                src={education}
                                alt="Educational Resources"
                            />
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2">Educational Resources</div>
                        <p className="text-base md:text-lg">
                        Stay ahead with our education and training programs focusing on cutting-edge technologiessuch as AI/ML, Digital Signal Processing in healthcare, and rapid prototyping. These programs are designed to empower healthcare professionals and enthusiasts with the skillsand knowledge to implement the latest advancements in their practices effectively
                        </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00] mt-10   lg:px-7 md:px-11 px-10 py-2 ml-12 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicespage;
