import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollHideDiv = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(null); // Initialize as null
  const [isVisible, setIsVisible] = useState(true);

  const springProps = useSpring({
    height: isVisible ? '40px' : '0px',
    config: { tension: 300, friction: 30 }
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos !== null) {
      const shouldHide = currentScrollPos > prevScrollPos && currentScrollPos > 100; // Adjust the threshold as needed
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
      className="hidden md:hiddden z-10 lg:block fixed lg:top-[18.3%]   bg-white w-full px-24  md:px-46  lg:pt-1   overflow-hidden"
      style={{
        height: springProps.height,
        boxShadow: '0px 11px 10px rgba(0, 0, 0, 0.5)',// Added box-shadow CSS property
      }}
    >
      <div className="font-bold text-[#01579B] text-lg md:text-[10px] lg:text-4xl   lg:px-36 ml-24  -mt-1  tracking-tighter">
        Our knowledge of orthopaedics. Your best health.
      </div>
    </animated.div>
  );
};

export default ScrollHideDiv;
