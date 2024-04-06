import { useState } from 'react';
import CompanyLogo from "../../assets/CompanyLogo.png";
import { Link } from 'react-router-dom';
import navbar1 from "../../assets/navbarphotos/navbar1.jpg"
import navbar2 from "../../assets/navbarphotos/navbar2.jpg"
import navbar3 from "../../assets/navbarphotos/navbar3.jpg"
import navbar4 from "../../assets/navbarphotos/navbar4.jpg"
import navbar6 from "../../assets/navbarphotos/navbar6.jpg"
import navbar10 from "../../assets/navbarphotos/navbar10.jpg"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId); // Clear any existing timeout
    const id = setTimeout(() => {
      setHoveredItem(item);
    }, 100); // Delay the hover effect by 100 milliseconds
    setTimeoutId(id); // Store the timeout ID
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    // Set a timeout to reset hoveredItem to null after 300 milliseconds
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
    setTimeoutId(id); // Store the timeout ID
  };

  return (
    <div className='hidden md:block '>

    <div className=' overflow-hidden z-10 fixed top-[6%] bg-white w-full  lg:py-6  font-bold text-[#0288D1] justify-between  lg:px-28 md:px-28  flex lg:text-lg md:text-sm  '>
      <div className='lg:w-16 w-12 -mt-4 flex-row lg:gap-4'>
        <img src={CompanyLogo} alt="CompanyLogo" />
      </div>
    <div className='flex mt-5  lg:gap-10  gap-2   '>
      <div
          className={`cursor-pointer relative ${hoveredItem === 'home' ? 'text-[#F57C00]' : 'text-[#0288D1]'}`}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
 
          >
         <Link to="/"> Home </Link>
          {hoveredItem === 'home' && (
            <div>
              <div className='bg-[#F57C00] relative rounded-md w-full h-1'>
              </div>
              <div className='fixed mt-3 left-0 w-full bg-[#F57C00] h-50 px-[20vw] py-[5vh] text-white '>
                <div className='grid grid-cols-4 gap-10'> 
               
                <div className='grid grid-row-4 gap-2'>

                <div className='hover:'>About Us</div>
                <div>Swaknee</div>
                <div>Clinical</div>
                <div>Steps</div>
                </div>

                
                <div className='grid grid-row-4 gap-2'>

                <div>Science Behind</div>
                <div>Services</div>
                <div>FAQ's</div>
                <div>Testimonials</div>
                </div>

                <div className=''>
                <img src={navbar1} alt="img1" />
                </div>

                <div className=''>
                <img src={navbar2} alt="img2" />
                </div>
                </div>

              </div>
            </div>
          )}
        </div>
      <div
        className={`hover:text-[#C2185B] cursor-pointer relative ${hoveredItem === 'about' ? 'text-[#C2185B]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
        >
             <Link to="/about"> About </Link>
        {hoveredItem === 'about' && (
          <div>
            <div className='bg-[#C2185B] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full px-[20vw] py-[5vh] bg-[#C2185B] h-52 text-white'>
            <div className='grid grid-cols-2'>

            <div className='flex flex-col gap-3'>
            <div>About Us</div>
            <div>About Team</div>
            </div>

            <div className='flex flex-row gap-10 w-52'>
            <img src={navbar3} alt="" />
            <img src={navbar6} alt="" />
            </div>
            

           </div>  
             
            </div>
          </div>
        )}
      </div>
      <div
        className={`hover:text-[#F57C00] cursor-pointer relative ${hoveredItem === 'services' ? 'text-[#F57C00]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('services')}
        onMouseLeave={handleMouseLeave}
        >
                 <Link to="/services"> Services </Link>
        {hoveredItem === 'services' && (
          <div>
            <div className='bg-[#F57C00] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#F57C00] h-50  px-[20vw] py-[5vh] h-42 text-white'>
                
                <div className='grid grid-cols-3 '> 
               
                <div className='grid grid-row-4 gap-2'>
                <div>PEMF Therapy Devices</div>
                <div>Rehabilitation Services</div>
                <div>Educational Resources & Training</div>
                <div>Personalized Consultation and Technical Support</div>
                </div>

                
                
<div className='ml-24 flex flex-row gap-5'>
                <img className='' src={navbar10} alt="img1" />

                <img className='' src={navbar4} alt="img2" />
                </div>
                </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`hover:text-[#512DA8] cursor-pointer relative ${hoveredItem === 'research' ? 'text-[#512DA8]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('research')}
        onMouseLeave={handleMouseLeave}
        >
               <Link to="/research"> Research </Link>
        {/* {hoveredItem === 'research' && (
          <div>
            <div className='bg-[#512DA8] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#512DA8] h-60 text-white'></div>
          </div>
        )} */}
      </div>
      <div
        className={`hover:text-[#00897b] cursor-pointer relative ${hoveredItem === 'career' ? 'text-[#00897b]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('career')}
        onMouseLeave={handleMouseLeave}
        >
            <Link to="/career"> Career </Link>
        {/* {hoveredItem === 'career' && (
          <div>
            <div className='bg-[#00897b] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#00897b] h-60 text-white'></div>
          </div>
        )} */}
      </div>
      <div
        className={`hover:text-[#3362C2] cursor-pointer relative ${hoveredItem === 'career' ? 'text-[#00897b]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('product')}
        onMouseLeave={handleMouseLeave}
        >
            <Link to="/product"> Products </Link>

      </div>
      <div className='cursor-pointer '>
       <Link to="/contactus"> Contact Us </Link>
        </div>
   </div>  
   <div className='mt-3'>

   <button className='  hover:bg-[#212ea0] bg-[#f57c00]   lg:px-7 md:px-11 py-2  ml-24 lg:ml-0 rounded-full items-center font-semibold text-white' type='submit'>
              Book Now 
            </button>
   </div>
    </div>
 </div>
  );
};

export default Navbar;