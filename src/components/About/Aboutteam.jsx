import React from 'react';

const Aboutteam = () => {
  // Define an array of board of directors with their details
  const boardOfDirectors = [
    { name: 'Pooja k Jha', role: 'Founder & CEO ', avatarSrc:"" },
    { name: 'Ankita Kumari', role: 'Director', avatarSrc: '/avatars/avatar2.jpg' },
    { name: 'Dr Vikas Kumar, PhD', role: 'Chief Technology Officer', avatarSrc: '/avatars/avatar3.jpg' },
    { name: 'Dr Jagganatha Sahoo,HOD, PMR, DEPT, AIIMS BBSR', role: 'Clinical / Collaborator', avatarSrc: '/avatars/avatar4.jpg' },
  ];

  // Define Manoh Kumar Parida in the Research and Development Unit
  const researchAndDevelopment = [
    { name: 'Dr Manoh K Parida', role: 'Technical Lead', avatarSrc: '/avatars/avatar5.jpg' },
  ];

  // Define an array of advisors with their details
  const advisors = [
    { name: 'Dr. Debashish Jena', role: 'Senior Resident & Incharge PMR, IGKC hospital, BBSR', avatarSrc: '/avatars/avatar6.jpg' },
    { name: 'Mrs Madhu Chanda', role: 'Charter Accountant, BBSR', avatarSrc: '/avatars/avatar7.jpg' },
    { name: 'Mr Asutosh Nanda', role: 'IP & Legal Advisor, BBSR', avatarSrc: '/avatars/avatar8.jpg' },
  ];

  return (
    <div>
      {/* Board of Directors Section */}
      <div className="lg:mt-[22vh] mt-[8vh] bg-[#0288D1] lg:h-[12vh] h-[10vh] lg:px-[20vh] text-white font-bold text-5xl  opacity-80 p-5">
        About Team
      </div>
      <h2 className="mt-10 text-3xl text-center font-semibold">
        Board of Directors
      </h2>
      <div className=' '>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="grid gap-x-6 md:grid-cols-2 lg:gap-32">
              {boardOfDirectors.map((member, index) => (
                <div key={index} className="mb-24 md:mb-0">
                  <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex justify-center">
                      <div className="flex justify-center -mt-[75px]">
                        <img
                          src={member.avatarSrc}
                          className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
                      <p className="mb-6">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Research and Development Unit Section */}
      <h2 className="mt-10 text-3xl text-center font-semibold">
        Research and Development Unit
      </h2>
      <div className='w-[40%] '>
        <div className="container my-24 ml-[75%] justify-center md:px-6">
          <section className=" text-center">
            <div className="">
              {researchAndDevelopment.map((member, index) => (
                <div key={index} className="mb-24 md:mb-0">
                  <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex justify-center">
                      <div className="flex justify-center -mt-[75px]">
                        <img
                          src={member.avatarSrc}
                          className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
                      <p className="mb-6">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Advisors Section */}
      <h2 className="mt-10 text-3xl text-center font-semibold">
        Advisors
      </h2>
      <div className=' '>
        <div className="container my-24 mx-auto md:px-6">
          <section className=" text-center">
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-32">
              {advisors.map((member, index) => (
                <div key={index} className="mb-24 md:mb-0">
                  <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex justify-center">
                      <div className="flex justify-center -mt-[75px]">
                        <img
                          src={member.avatarSrc}
                          className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
                      <p className="mb-6">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Aboutteam;
