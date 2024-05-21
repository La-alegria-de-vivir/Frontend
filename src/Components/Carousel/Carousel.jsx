import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516102055_IMG_1256.JPG?alt=media&token=3b8f273f-2ff6-4ca4-a844-86fa6a715a67",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516102256_IMG_1260.JPG?alt=media&token=e105d936-e692-4211-9326-f11e840a9ac9",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516102803_IMG_1267.JPG?alt=media&token=9c044a2d-7e31-4a6d-82fc-afddac2547ab",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516104854_IMG_1301.JPG?alt=media&token=d3c871b9-ef1b-403d-a7d0-16ec8504e184",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516113409_IMG_1490.JPG?alt=media&token=6a914c51-01cf-41f6-a863-06054592d3e2",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/20240516114156_IMG_1539.JPG?alt=media&token=e72ab46e-689f-4343-9203-986d7e41ecbf",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/IMG_6912.JPG?alt=media&token=5d5319d9-d481-4e82-afd1-364cc2dee0c6",
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
