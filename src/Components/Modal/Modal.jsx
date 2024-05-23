import React from 'react';

const Modal = ({ dish, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative max-w-lg mx-auto">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{dish.title}</h2>
        <img src={dish.url} alt={dish.title} className="w-full h-auto mb-4 rounded" />
        <p className="mb-4">{dish.description}</p>
      
        <ul className="list-disc list-inside">
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;