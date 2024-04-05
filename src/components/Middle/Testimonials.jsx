import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import test1 from "../../assets/test1.png"

const Testimonials = () => {
  const data = [
    {
      img: "../assets/myimg/marqee/test1.png",
      name: "William Jackson",
      specialties: "Co-Founder and Director.USA",
    },
    {
      img: "",
      name: "Emily Williams",
      specialties: "Founder & CEO - SRS, USA",
    },
    {
      img: "",
      name: "William Jackson",
      specialties: "Senior Engineer ,USA",
    },
    {
      img: "",
      name: "William Jackson",
      specialties: "Technical Lead, USA",
    },
    {
      img: "",
      name: "Emily Williams",
      specialties: "MD - PMR Clinical Collaborator, USA",
      para: "",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
    <div className=" flex flex-col justify-center lg:px-16 px-5 mt-20">
      <div className='flex justify-center text-[#0288D1] lg:text-4xl text-3xl  mb-2 font-bold '>What Our Patients Say ?  </div>
        <div className='flex justify-center text-[#01579b] font-semibold mb-20'>TESTIMONIALS</div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="flex justify-center col-span-1">
          <button
            className="bg-[#212EA0] col-1/2 lg:mr-44 mr-10 lg:-mt-12 text-white p-3  rounded-full active:bg-[#212ea0cf] " 
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
        </div>
        <div className="col-span-1 lg:-mx-28">
          <Slider ref={slider} {...settings} className=" lg:w-[55vw] -mx-16 w-[65vw] lg:-mb-14 "> 
            {data.map((e, index) => (
              <div className="lg:h-[350px]  cursor-pointer" key={index}>
                <div className="flex flex-row justify-start items-center">
                  <img src={test1} alt="img" className="h-16  rounded-full w-18 border-4 border-blue-950" />
                  <div className="flex flex-col  ml-2 mt-4">
                    <h1 className="font-semibold text-xl text-[#212EA0]">{e.name}</h1>
                    <div className="text-sm opacity-65 ">{e.specialties}</div>
                  </div>
                </div>
                  <div className="mt-5 opacity-65 text-start">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ad. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ab deleniti expedita dignissimos placeat recusandae doloremque itaque
                    nesciunt illo praesentium laudantium?
                  </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center lg:ml-32 col-span-1">
          <button
            className="bg-[#212EA0] lg:-mt-12 lg:ml-24 ml-14 mt-1 text-white p-3 rounded-full active:bg-[#212ea0cf] " // Decreased button width
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

    </div>
    <hr className='md:my-20 my-2 border-[1.5px] bg-black' />
    </div>
  );
};

export default Testimonials;
