import React, { useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollHideDiv = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Initialize as 0
  const [isVisible, setIsVisible] = useState(true);

  const springProps = useSpring({
    height: isVisible ? '60px' : '5px',
    config: { tension: 300, friction: 30 }
  });

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (prevScrollPos !== null) {
      const shouldHide = currentScrollPos > prevScrollPos && currentScrollPos > 100; // Adjust the threshold as needed
      setIsVisible(!shouldHide);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <animated.div
      className="hidden md:hidden z-10 lg:block fixed lg:top-[18.3%] bg-white w-full px-24 md:px-46 lg:pt-1 overflow-hidden"
      style={{
        height: springProps.height,
        boxShadow: '0px 3px 1px rgba(0, 0, 4, 0.01)',// Added box-shadow CSS property
        overflowY: 'hidden' // Hide overflow vertically
      }}
    >
      <div className="font-bold text-[#01579B] text-lg md:text-[10px] lg:text-4xl lg:px-36 ml-24  tracking-tighter">
        Our knowledge of orthopaedics. Your best health.
      </div>
    </animated.div>
  );
};

export default ScrollHideDiv;
