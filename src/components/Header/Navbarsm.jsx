import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger menu icon
import CompanyLogo from "../../assets/CompanyLogo.png";

const Navbarsm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white p-4 shadow-xl md:hidden z-50">
      <div className="flex justify-between items-center">
        <div>
          <img src={CompanyLogo} alt="CompanyLogo" className="h-11" />
        </div>
        <div className='text-blue-500 text-2xl font-semibold '>Swayogya </div>
        <div className="rounded-full p-2 text-blue-400 ">
          {isDrawerOpen ? (
            <FaTimes className="text-blue-400 text-2xl cursor-pointer" onClick={toggleDrawer} />
          ) : (
            <FaBars className="text-blue-400 text-2xl cursor-pointer" onClick={toggleDrawer} />
          )}
        </div>
      </div>
      {isDrawerOpen && (
        
        <div>
          <ul className="mt-4 space-y-2 text-center  text-blue-400">
            <li>
              <Link to="/" onClick={toggleDrawer}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleDrawer}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleDrawer}>Services</Link>
            </li>
            <li>
              <Link to="/research" onClick={toggleDrawer}>Research</Link>
            </li>
            <li>
              <Link to="/career" onClick={toggleDrawer}>Career</Link>
            </li>
            <li>
              <Link to="/product" onClick={toggleDrawer}>Products</Link>
            </li>
            <li>
              <Link to="/contactus" onClick={toggleDrawer}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbarsm;
