import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import test1 from "../../assets/test1.png";

const Testimonials = () => {
  const data = [
    {
      img: "",
      name: "Dulamani Behra",
      specialties: "Grade 3 KOA patient",
      para:
        "As someone who's tried everything from medication to physical therapy, I was pleasantly  surprised    how effective this non-invasive device has been. It's been a part of my pain management routine, and   I couldn't be happier with the results.",
    },
   
    {
      img: "",
      name: "Ahalaya Nayak",
      specialties: "Grade 2 Knee OA patient",
      para:
        "After using this device for a few weeks, I've noticed a significant reduction in knee pain and improved mobility. It's easy to use and really fits into my daily routine without any hassle.",
    },
    
    {
      img: "",
      name: "Jyoshnamayee Rath",
      specialties: "Grade 2 KOA Patient",
      para:
        "Very Good product! I was struggling with daily activities due to knee pain, but Swa-Knee has improved my mobility and reduced my discomfort.",
    },
    {
      img: "",
      name: "Mina Patra",
      specialties: "Grade 2 patient",
      para:
        "This device has not only helped with my knee pain, but it's also easy and safe to use. I appreciate that I can use it while reading or watching TV and still get relief.",
    },
    {
      img: "",
      name: "Geetanjali Rout",
      specialties: "Grade 2 KOA patient",
      para:
        "After using this device for a few weeks, I've noticed a significant reduction in knee pain and improved mobility. It's easy to use and really fits into my daily routine without any hassle.",
    },  
  ];

  const slider = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: !isSmallScreen, // Show arrows only on larger screens
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
          arrows: false, // Hide arrows on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  useEffect(() => {
    // Check screen width on component mount and on resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center lg:px-16 px-5 mt-20">
        <div className="flex justify-center text-[#0288D1] lg:text-4xl text-3xl mb-2 font-bold">
          What Our Patients Say ?
        </div>
        <div className="flex justify-center text-[#01579b] font-semibold mb-10">
          TESTIMONIALS
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex justify-center col-span-1">
            {isSmallScreen ? null : ( // Render button only on larger screens
              <button
                className="bg-[#212EA0] col-1/2 lg:mr-44 mr-10 lg:-mt-12 text-white p-3 rounded-full active:bg-[#212ea0cf]"
                onClick={() => slider.current.slickPrev()}
              >
                <FaArrowLeft size={25} />
              </button>
            )}
          </div>
          <div className="col-span-1 lg:-mx-28">
            <Slider ref={slider} {...settings} className="lg:w-[55vw] -mx-16 w-[65vw] lg:-mb-14">
              {data.map((e, index) => (
                <div className="lg:h-[350px] cursor-pointer" key={index}>
                  <div className="flex flex-row justify-start items-center">
                    <div className="flex flex-col ml-2 mt-4">
                      <h1 className="font-semibold text-xl text-[#212EA0]">{e.name}</h1>
                      <div className="text-sm opacity-65 ">{e.specialties}</div>
                    </div>
                  </div>
                  <div className="mt-5 opacity-65 text-start">{e.para}</div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center lg:ml-32 col-span-1">
            {isSmallScreen ? null : ( // Render button only on larger screens
              <button
                className="bg-[#212EA0] lg:-mt-12 lg:ml-24 ml-14 mt-1 text-white p-3 rounded-full active:bg-[#212ea0cf]"
                onClick={() => slider.current.slickNext()}
              >
                <FaArrowRight size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="my-4 border-[1.5px] bg-black" />
    </div>
  );
};

export default Testimonials;
