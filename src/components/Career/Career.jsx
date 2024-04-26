import React from 'react';
import Jobapply from "../Career/Jobapply";

const Career = () => {
    return (
        <div>
            <div className="lg:mt-[22vh] mt-[8vh] bg-[#0288d1] lg:h-[12vh] h-[10vh] lg:px-[20vh] text-white font-bold text-5xl opacity-80 p-5 ">
                Career
            </div>
            <div className="h-auto lg:w-[80%]   mx-auto lg:mt-10 p-4 lg:mb-10 md:px-0">
                <div className="shadow-xl lg:h-[64vh] h-[140vh] grid grid-cols-1">
                        <div className='flex mx-auto text-5xl font-bold'>Why Join Us?</div>
                    <div className=" md:mt-0 px-5 md:px-8">
                        <div className="font-bold text-xl mb-2"></div>
                        <div className=" md:text-lg">
                        <div>At Swayogya, we develop advanced PEMF devices that enhance the quality of life for individuals with Knee OA. Our dedicated team includes rehabilitation professionals, doctors, and engineers working together to push the boundaries of medical and technological advancements.
                       
                        "If you're eager to learn, innovate, and grow in a field that blends technology with healthcare, we want you on our team. We are specifically looking for candidates with expertise in electronics, medical technology, and patient care to help us expand the horizons of health and wellness."
                        </div><br />
                        <div> <span className='flex mx-auto text-2xl font-bold'>Ongoing Opportunities </span> <br />

                        We are on the lookout for young and dynamic individuals who are eager to learn and innovate in the fields of Electrical and Electronics Engineering, as well as in the rehabilitation domain. Join our team at Swayogya Rehab Solutions Pvt Ltd if you're passionate about pushing the boundaries of medical technology and improving patient outcomes. We value curiosity, creativity, and the drive to make a meaningful impact in healthcare. Explore our opportunities to kickstart your career in an environment where your work truly makes a difference.
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div><Jobapply></Jobapply> </div>
        </div>
    );
};

export default Career;
