import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const imageUrls = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  const slideStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${imageUrls[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 5s ease-in-out",
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center" style={slideStyle}>
        {/* Navigation buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handlePrevSlide}
        >
          <FiArrowLeft />
        </button>
        <h2 className="text-carousel text-black font-bold p-2 pr-4 pl-4 rounded lg:text-6xl md:text-5xl sm:text-4xl bg-opacity-80 bg-white border-4 border-[#BBBC4E]">
          ¡Disfruta la Cocina Viva y en Constante Evolución!
        </h2>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white  text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handleNextSlide}
        >
          <FiArrowRight />
        </button>
      </div>
      {/* Indicators */}
      <div className="flex justify-center mt-2">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full bg-gray-800 ${
              index === currentIndex ? "bg-[#BBBC4E]" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
