import React, { useState } from 'react';

const Carrusel = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "src/assets/1.jpg", "src/assets/2.jpg", "src/assets/3.jpg",
        "src/assets/4.jpg", "src/assets/5.jpg", "src/assets/6.jpg",
        "src/assets/7.jpg", "src/assets/8.jpg", "src/assets/9.jpg",
        "src/assets/10.jpg", "src/assets/11.jpg", "src/assets/12.jpg",
        "src/assets/13.jpg", "src/assets/14.jpg", "src/assets/15.jpg",
        "src/assets/16.jpg"
    ];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // avanzar 
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // retroceder 
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                <img src={images[index]} alt={`Foto ${index + 1}`} className="w-full" />
            </div>
            <div className="flex justify-center space-x-2">
                <button onClick={prevSlide} className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
                    Anterior
                </button>
                <button onClick={nextSlide} className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Carrusel;
