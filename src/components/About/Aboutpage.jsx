import React from 'react';
import scienceminister from "../../assets/aboutus/AppreciatedbyScienceMinister.mp4";
import p1 from "../../assets/aboutus/P -1.mp4";
import p2 from "../../assets/aboutus/P -2.mp4";
import CompanyLogo from "../../assets/navbarphotos/CompanyLogo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import aboutusimg from "../../assets/aboutus/aboutusimg.png"
import swakneeimg from "../../assets/aboutus/swakneeimg.png"
const Aboutpage = () => {
  return (
    <div>
      <div className="lg:mt-[22vh] mt-[8vh] bg-[#0288D1] lg:h-[12vh] h-[10vh] px-[10vh] w-full text-white font-bold text-5xl  opacity-80 p-5 ">
        <div>About Us</div>
      </div>
      <div className='lg:h-[39vh] w-full lg:flex  lg:flex-cols-2 lg:w-[70%] mx-auto mt-10'>
            <div className='lg:w-[200vh] w-[20vh] mx-auto lg:mx-0 lg:mr-12'><img src={CompanyLogo} alt="" /></div>
        <div className="shadow-xl grid grid-cols-1">
          <div className="mt-10 md:mt-0 px-5 md:px-8">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-base md:text-lg">
              At <i>Swayogya, </i> we believe in the transformative power of technology to redefine healthcare. Driven by a commitment to innovation and a dedication to enhancing lives, we are at the forefront of development of Pulsed Electromagnetic Field (PEMF) therapy devices for knee osteoarthritis. With a keen focus on research and development, Swayogya stands at the intersection of science and societal benefit, striving to deliver not just healthcare solutions, but hope and improved quality of life to individuals suffering from chronic conditions. Join us on this journey as we push the boundaries of medical technology, making accessible, high-quality, and effective treatment a reality for all.
              <br /> <br />        
                         </p>
          </div>
        </div>
      </div>
      <div className='h-[45vh] w-full lg:flex lg:flex-cols-1 lg:ml-40  lg:w-[70%]  mt-20'>
        <div className="shadow-xl  lg:grid  lg:grid-cols-1 ">
          <div className="mt-10 md:mt-0 px-5 md:px-8">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-base md:text-lg">
            In our journey to innovate, the 'SWA-KNEE' device underwent rigorous design, prototyping, and testing phases, leading to the determination of optimal PEMF parameters for knee OA treatment. Through our clinical trials, we observed significant improvements in pain reduction, knee functionality, and quality of life among participants, demonstrating the efficacy of PEMF therapy. Our work is grounded in the belief that everyone deserves access to advanced, safe, and effective medical care. We invite you to explore how Swayogya is making a difference in the lives of individuals around the globe.  
                      
                         </p>
          </div>
        </div>
            <div className='lg:w-[400vh] w-[30vh] mx-auto lg:mx-0 mt-4 lg:mt-0 lg:ml-20 '><img src={swakneeimg} alt="" /></div>
        </div>

     
      <div className='px-10'>
      <div className="shadow-xl grid grid-cols-1 mt-[25vh]   w-full lg:w-[40%] lg:mx-auto lg:mt-[10vh] h-[40vh] lg:h-[70vh] mb-10">
        <div className=" ">
          <div className="rounded-md ">
            <video
              controls={true}
              className="w-[90vh]"
              src={scienceminister}
              alt="Science Minister"
            />
          </div > </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl text-center font-bold leading-tight text-neutral-800">
              Appreciated by Science Minister
            </h5>
            <p className="mb-4 text-center  text-neutral-600">
              Some quick example text to the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1  mt-[10vh] md:grid-cols-2 gap-5 overflow-hidden px-[5vh] md:px-[15vh]'>
        <div className='w-full shadow-xl rounded-md mb-10'>
          <div className="rounded-md mx-auto">
            <video
              controls={true}
              className="w-full"
              src={p1}
              alt="Patient Feedback"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800">
              Patient Feedback
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              Some quick example text to the card's content.
            </p>
          </div>
        </div>
        <div className='w-full shadow-xl rounded-md mb-10'>
          <div className="rounded-md mx-auto">
            <video
              controls={true}
              className="h-[50.5vh] w-full"
              src={p2}
              alt="Patient Feedback"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800">
              Patient Feedback
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              Some quick example text to the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage;
