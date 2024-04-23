import React from 'react';
import training from "../../assets/training/1.jpg";
import pemf from "../../assets/Product/brace/6.jpg";
import { Link } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";

const Servicespage = () => {
    return (
        <div>
            <div className="lg:mt-[22vh] mt-[12vh] bg-[#0288d1] h-[12vh] px-[20vh] text-white font-bold text-5xl opacity-80 p-5">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repudiandae, dolorum sint distinctio quae eveniet iure esse tempora officiis rem ipsa nobis vitae, obcaecati nihil facere quisquam error suscipit aliquid.
                        </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00] mt-10 lg:px-7 md:px-11 py-2 ml-24 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
                    </div>
                </div>
                <div className="shadow-xl grid grid-cols-1 p-10 md:grid-cols-2">
                    <div className="mt-10 md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2">Rehabilitation Services</div>
                        <p className="text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente odio voluptatum, veniam perferendis pariatur veritatis quas beatae quam? Quae quod cumque iste soluta ipsam libero necessitatibus at atque perferendis.
                        </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00]  mt-10 lg:px-7 md:px-11 py-2 ml-24 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
                    </div>
                    <div className='w-full'>
                        <div className="w-full px-5">
                            <img
                                className="w-full rounded-lg"
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
                                src={training}
                                alt="Educational Resources"
                            />
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2">Educational Resources</div>
                        <p className="text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quae? Autem adipisci ratione tenetur cumque. Repellendus dolor aut ut accusantium ex quae, eligendi, deleniti ullam, numquam voluptates natus placeat delectus!
                        </p>
                        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00] mt-10   lg:px-7 md:px-11 py-2 ml-24 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
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
