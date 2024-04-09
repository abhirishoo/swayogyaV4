import React from 'react';
import scienceminister from "../../assets/aboutus/AppreciatedbyScienceMinister.mp4";
import p1 from "../../assets/aboutus/P -1.mp4";
import p2 from "../../assets/aboutus/P -2.mp4";
import CompanyLogo from "../../assets/navbarphotos/CompanyLogo.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Aboutpage = () => {
  return (
    <div>
      <div className="lg:mt-[22vh] mt-[12vh] bg-[#0288D1] h-[12vh] px-[20vh] text-white font-bold text-5xl opacity-80 p-5 ">
        About Us
      </div>
      <div className='h-screen w-full lg:w-[50%] mx-auto mt-10'>
        <div className="shadow-xl grid grid-cols-1">
          <div className="mt-10 md:mt-0 px-5 md:px-8">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-base md:text-lg">
              <li> An ISO 13485 certified private limited company </li>
              <li> Registered under DIPP, The Ministry of Commerce and Industry, Govt of India, and The Department of MSME, Start-UP Odisha.</li> <br />
              At <i>Swayogya, </i> we believe in the transformative power of technology to redefine healthcare. Driven by a commitment to innovation and a dedication to enhancing lives, we are at the forefront of development of Pulsed Electromagnetic Field (PEMF) therapy devices for knee osteoarthritis. With a keen focus on research and development, Swayogya stands at the intersection of science and societal benefit, striving to deliver not just healthcare solutions, but hope and improved quality of life to individuals suffering from chronic conditions. Join us on this journey as we push the boundaries of medical technology, making accessible, high-quality, and effective treatment a reality for all.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-xl grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-[80%] mx-auto lg:-mt-[30vh] h-[90vh] lg:h-[50vh] mb-10">
        <div className="">
          <img
            className="lg:w-[30vh] w-[20vh] mx-auto rounded-lg"
            src={CompanyLogo}
            alt="Company Logo"
          />
        </div>
        <div className="md:mt-0 p-10">
          <div className="font-bold text-xl mb-2 ">Lorem, ipsum dolor.</div>
          <p className="text-base md:text-lg ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab quasi quas dolor doloribus quaerat ut, dolorem blanditiis nesciunt! Dicta, sed quaerat. Maxime, cumque aspernatur tempore nihil distinctio aliquam iusto delectus porro culpa expedita quae nemo nesciunt magni? Eius mollitia aut eaque consectetur recusandae velit repellendus laboriosam quos sapiente officia.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden px-[5vh] md:px-[15vh]'>
        <div className='w-full shadow-xl rounded-md mb-10'>
          <div className="rounded-md mx-auto">
            <video
              controls={true}
              className=""
              src={scienceminister}
              alt="Science Minister"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800">
              Science Minister
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
              className=""
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
              className="h-[33.8vh] w-full"
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
