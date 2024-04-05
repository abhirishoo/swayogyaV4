import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IoPlayCircle } from "react-icons/io5";

const BlogCard = ({img}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="w-full lg:w-[80vh]  shadow-[rgba(0,_0,_0,_0.54)_0px_3px_8px] space-y-2 cursor-pointer hover:scale-105 transition duration-300 ease-in-out ">
      {isVideoPlaying ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=IfQyVm8Kftc"
          controls
          width="100%"
          height="380px"
        />
      ) : (
        <>
          <img
            onClick={handleVideoClick}
            className="h-64 md:h-96 lg:h-33 w-full   cursor-pointer"
            src={img}
            alt="Blog Image"
          />
          <div
            onClick={handleVideoClick}
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          >
            <IoPlayCircle className="text-white text-8xl cursor-pointer opacity-85" />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCard;
