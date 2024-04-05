import React, { useRef, useState } from 'react';
import vedio1 from "../../assets/steps/step1.mp4";
import vedio2 from "../../assets/steps/step2.mp4"; 
import vedio3 from "../../assets/steps/step3.mp4"; 

const Steps = () => {
  const [progress, setProgress] = useState(Array(4).fill(0));
  const videos = useRef([]);

  const captions = [
    "Step 1- Brace",
    "Step 2-Switch On",
    "Step 3- Relax"
  ];

  const handleProgress = (index, event) => {
    const video = videos.current[index];
    const duration = video.duration;
    const currentTime = video.currentTime;
    const percent = (currentTime / duration) * 100;

    setProgress(prevProgress => {
      const newProgress = [...prevProgress];
      newProgress[index] = percent;
      return newProgress;
    });
  };



  return (
    <div className='text-4xl  text-[#000F38] lg:mt-24 mt-20 text-center p-4 font-bold'>
      How to use?
      <div className=' h-300px  px-10 mt-10 grid-cols-3 flex gap-1 flex-col lg:flex-row ml-32 overflow-hidden'>
        {[vedio1, vedio2, vedio3].map((videoSrc, index) => (
          <div key={index} className="relative">
            <video
              ref={(el) => (videos.current[index] = el)}
              width="400"
              height="400"
              muted
              loop
              onTimeUpdate={(event) => handleProgress(index, event)}
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div
              className="absolute  bottom-0 left-0 w-full h-2 bg-red-600"
              style={{ width: `${progress[index]}%` }}
            ></div>
            <div className="absolute bottom-0 left-0 my-1  right-0 text-lg bg-gray-900 text-white  text-center">
              {captions[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;