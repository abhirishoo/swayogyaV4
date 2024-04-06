import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollHideDiv = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(null); // Initialize as null
  const [isVisible, setIsVisible] = useState(true);

  const springProps = useSpring({
    height: isVisible ? '75px' : '8px',
    config: { tension: 300, friction: 30 }
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos !== null) { 
      const shouldHide = currentScrollPos > prevScrollPos;
      setIsVisible(!shouldHide);
    }
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <animated.div
      className="hidden md:hiddden z-10 lg:block fixed lg:top-[23.5%]   bg-white w-full px-24  md:px-46  lg:pt-1   overflow-hidden"
      style={{
        height: springProps.height,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 1.9)' // Added box-shadow CSS property
      }}
    >
      <div className="font-bold text-[#01579B] text-xl md:text-[20px] lg:text-[42px]   lg:px-28  mt-3  tracking-tighter">
        Our knowledge of orthopaedics. Your best health.
      </div>
    </animated.div>
  );
};

export default ScrollHideDiv;
