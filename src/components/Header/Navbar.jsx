import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import CompanyLogo from "../../assets/CompanyLogo.png";
import navbar1 from "../../assets/navbarphotos/navbar1.jpg";
import navbar2 from "../../assets/navbarphotos/navbar2.jpg";
import navbar3 from "../../assets/navbarphotos/navbar3.jpg";
import navbar4 from "../../assets/navbarphotos/navbar4.jpg";
import navbar6 from "../../assets/navbarphotos/navbar6.jpg";
import navbar10 from "../../assets/navbarphotos/navbar10.jpg";
import { Link } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";
const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setHoveredItem(item);
    }, 100);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
    setTimeoutId(id);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <div className='hidden md:block'>
        <div className='overflow-hidden z-10 fixed top-[6%] shadow-xl bg-white w-full lg:py-6 font-bold text-[#0288D1] justify-between lg:px-28 md:px-28 flex lg:text-lg md:text-sm'>
          <div className='lg:w-16 w-12 -mt-4 flex-row lg:gap-4'>
            <Link to='/' onClick={scrollToTop}  >
              <img src={CompanyLogo} alt="CompanyLogo" />
            </Link>
          </div>
        <div className='flex mt-5 lg:gap-10 gap-2'>
          <div
            className='cursor-pointer relative '
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/"> Home </Link>
            {hoveredItem === 'home' && (
              <div className={`fixed mt-5 left-0 w-full bg-[#0288D1] h-50 px-[20vw] py-[5vh] text-white ${hoveredItem === 'home' ? 'fade-in' : 'fade-out'}`}>
                <div className='grid grid-cols-4 gap-10'> 
                  <div className='grid grid-row-4 '>
                          <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className=' hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  About Us </div></div>
                          <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Swaknee </div></div>
                          <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Clinical </div></div>
                          <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Steps </div></div>
                  </div>
                  <div className='grid grid-row-4 gap-2'>
                  <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Science Behind </div></div>
                  <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Services </div></div>
                  <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  FAQ's </div></div>
                  <div className='flex  items-center hover:translate-x-1 transition duration-300 ease-in-out' > <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  Testimonials</div></div>
                  </div>
                  <div>
                    <img src={navbar1} alt="img1" />
                  </div>
                  <div>
                    <img src={navbar2} alt="img2" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/aboutus"> About </Link>
            {hoveredItem === 'about' && (
                 <div className={`fixed mt-5 left-0 w-full bg-[#0288D1] h-50 px-[20vw] py-[5vh] text-white ${hoveredItem === 'about' ? 'fade-in' : 'fade-out'}`}>
                <div className='grid grid-cols-2'>
                  
                  <div className='flex flex-col gap-2'>
                    <Link to="/aboutus">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5  hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  About Us </div></div>
                        </Link>
                    <Link to="/aboutteam">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5 hover:translate-x-1 transition duration-300 ease-in-out  hover:text-white '>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>  About Team </div></div>
                        </Link>
                  </div>
                  <div className='flex flex-row gap-10 w-52'>
                    <img src={navbar3} alt="" />
                    <img src={navbar6} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className=" cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/services"> Services </Link>
            {hoveredItem === 'services' && (
                  <div className={`fixed mt-5 left-0 w-full bg-[#0288D1] h-50 px-[20vw] py-[5vh] text-white ${hoveredItem === 'services' ? 'fade-in' : 'fade-out'}`}>
                <div className='grid grid-cols-2'>
                  <div className='grid grid-row-4 gap-2'>
                  <Link to="/services">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5 hover:translate-x-1 transition duration-300 ease-in-out  hover:text-white '>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>PEMF Therapy Devices</div></div>
                        </Link>
                  <Link to="/services">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5 hover:translate-x-1 transition duration-300 ease-in-out  hover:text-white '>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>Rehabilitation Services</div></div>
                        </Link>
                  <Link to="/services">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5 hover:translate-x-1 transition duration-300 ease-in-out  hover:text-white '>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>Educational Resources & Training</div></div>
                        </Link>
                  <Link to="/services">
                    <div className='flex items-center hover:translate-x-1 transition duration-300 ease-in-out'> <div className='hover:scale-x-130 mt-18 lg:-my-0.5 hover:translate-x-1 transition duration-300 ease-in-out  hover:text-white '>
                      <MdKeyboardArrowRight size={20}  />
                  </div><div>Consultation and Technical Support</div></div>
                        </Link>
                  </div>
                  <div className='flex flex-row-reverse ml-[34vh] gap-5'>
                  <img className='' src={navbar10} alt="img1" />
                  <img className='' src={navbar4} alt="img2" />
                </div>

                </div>
              </div>
            )}
          </div>
          {/* <div
            className="cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter('research')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/research"> Research </Link>
          </div> */}
          <div
            className={`text-[#0288D1] cursor-pointer relative ${hoveredItem === 'career' }`}
            onMouseEnter={() => handleMouseEnter('career')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/career"> Career </Link>
          </div>
          <div
            className={` cursor-pointer relative ${hoveredItem === 'product' }`}
            onMouseEnter={() => handleMouseEnter('product')}
            onMouseLeave={handleMouseLeave}>
            <Link to="/product"> Products </Link>
          </div>
          <div className='cursor-pointer'>
            <Link to="/contactus"> Contact Us </Link>
          </div>
        </div>
        <div className='mt-3'>
        <TERipple rippleColor="light">  <Link to="/booknow">
            <button className='hover:bg-[#f57b00d4] bg-[#F57C00] lg:px-7 md:px-11 py-2 ml-24 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now
            </button>
          </Link> </TERipple>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
