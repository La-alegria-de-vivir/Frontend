import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-4.jpg?alt=media&token=7bc60ba0-367c-4cd4-8ab9-1ace22002ec9",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-2.jpg?alt=media&token=39933a13-707d-48f3-a880-67c0debfdec4",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-3.jpg?alt=media&token=aa0a1c7a-1af2-4771-9644-ca6910bca226",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-5.jpg?alt=media&token=966bef8e-5e3c-4469-8922-060f70bd7c30",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-6.jpg?alt=media&token=ddba7a21-8367-4dbb-ad93-f501a54b20d3",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-7.jpg?alt=media&token=1ffea73d-985e-44f3-91c5-66eec48db10d",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-8.jpg?alt=media&token=b78f19f9-7a31-4eb3-a536-4b5c5bacbd7d",
  "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-1.jpg?alt=media&token=3ad2e858-b812-4a40-becc-1d92b248a6c8",
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
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  const slideStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${imageUrls[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 6s ease-in-out",
  };

  return (
    <div className="relative">
      <div
        id="carousel-slide"
        className="flex justify-center items-center"
        style={slideStyle}
      >
        {/* Navigation buttons */}
        <button
          id="prev-slide"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handlePrevSlide}
        >
          <FiArrowLeft />
        </button>
        <h2 className="text-carousel text-black font-bold p-2 pr-4 pl-4 rounded lg:text-6xl md:text-5xl sm:text-4xl bg-opacity-80 bg-white border-4 border-[#BBBC4E]">
          ¡Disfruta la Cocina Viva y en Constante Evolución!
        </h2>
        <button
          id="next-slide"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white  text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handleNextSlide}
        >
          <FiArrowRight />
        </button>
      </div>
      {/* Indicators */}
      <div id="indicators" className="flex justify-center mt-2">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full bg-gray-800 ${
              index === currentIndex ? "bg-lime-600" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
export { imageUrls };
