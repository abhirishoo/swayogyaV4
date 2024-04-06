  import React, { useRef, useState, useEffect } from 'react';
  import vedio1 from "../../assets/steps/step1.mp4";
  import vedio2 from "../../assets/steps/step2.mp4"; 
  import vedio3 from "../../assets/steps/step3.mp4"; 
  import vedio3poster from "../../assets/clinical/step3.jpg"

  const Steps = () => {
    const [progress, setProgress] = useState(Array(3).fill(0));
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videos = useRef([null, null, null]);

    const captions = [
      "Step 1- Brace",
      "Step 2-Switch On",
      "Step 3- Relax"
    ];

    const handleProgress = (index, event) => {
      const video = videos.current[index];
      if (!video) return; // Check if video ref is available
      const duration = video.duration;
      const currentTime = video.currentTime;
      const percent = (currentTime / duration) * 100;

      setProgress(prevProgress => {
        const newProgress = [...prevProgress];
        newProgress[index] = percent;
        return newProgress;
      });
    };

    useEffect(() => {
      const handleEnded = () => {
        if (currentVideoIndex < videos.current.length - 1) {
          setCurrentVideoIndex(prevIndex => prevIndex + 1);
        } else {
          setCurrentVideoIndex(0); // Reset to the first video
        }
      };

      // Add event listeners for video ended event
      videos.current.forEach((video, index) => {
        if (!video) return; // Check if video ref is available
        video.addEventListener('ended', handleEnded);
        return () => {
          video.removeEventListener('ended', handleEnded);
        };
      });

      // Clean up event listeners when component unmounts
      return () => {
        videos.current.forEach((video, index) => {
          if (!video) return; // Check if video ref is available
          video.removeEventListener('ended', handleEnded);
        });
      };
    }, [currentVideoIndex]);

    useEffect(() => {
      // Pause all videos
      videos.current.forEach(video => {
        if (!video) return; // Check if video ref is available
        video.pause();
      });

      // Play the current video
      if (videos.current[currentVideoIndex]) {
        videos.current[currentVideoIndex].play();
      }
    }, [currentVideoIndex]);

    return (
      <div className='text-4xl text-[#000F38] lg:mt-24 mt-20 text-center p-4 font-bold'>
        How to use?
        <div className='md:h-300px md:px-10 mt-10 grid-cols-3 flex gap-1 flex-col lg:flex-row md:ml-32 overflow-hidden'>
          {[vedio1, vedio2, vedio3].map((videoSrc, index) => (
            <div key={index} className="relative">
              <video
                ref={(el) => (videos.current[index] = el)}
                width="400"
                height="400"
                muted
                onTimeUpdate={(event) => handleProgress(index, event)}
                poster={index === 2 ? vedio3poster : null} // Add poster for vedio3 only
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div
                className="absolute bottom-0 left-0 w-full h-2 bg-red-600"
                style={{ width: `${progress[index]}%` }}
              ></div>
              <div className="absolute bottom-0 left-0 my-1 right-0 text-lg bg-gray-900 text-white text-center">
                {captions[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Steps;
