import React from 'react';
import { FaFish, FaEgg, FaWineGlassAlt } from 'react-icons/fa';
import { GiWheat, GiPeanut, GiSadCrab, GiAlmond, GiSesame, GiHerbsBundle, GiBrandyBottle, GiJellyBeans ,GiShrimp} from 'react-icons/gi';
import { LuMilk} from 'react-icons/lu';
import { PiBeerBottleFill } from "react-icons/pi";

const allergenIcons = {
  gluten: <GiWheat />,
  marisco: <GiShrimp />,
  huevos: <FaEgg />,
  pescado: <FaFish />,
  cacahuetes: <GiPeanut />,
  soja: <GiBrandyBottle />,
  lácteos: <LuMilk />,
  frutos: <GiAlmond />,
  apio: <GiHerbsBundle />,
  mostaza: <PiBeerBottleFill />, 
  sésamo: <GiSesame />,
  sulfitos: <FaWineGlassAlt />,
  altramuces: <GiJellyBeans />, 
  moluscos: <GiSadCrab />,
  consultar: "Consultar con cocina"
};

const Modal = ({ dish, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 relative w-full max-w-md mx-4">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2">{dish.title}</h2>
        <div className="flex justify-center mb-2">
          <img src={dish.url} alt={dish.title} className="w-30 h-30 object-cover rounded" />
        </div>
        <p className="mb-2">{dish.description}</p>
        <ul className="list-disc list-inside mb-2">
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="allergens">
          <h3 className="text-lg font-bold mb-1">Alérgenos</h3>
          <ul className="list-none flex flex-wrap gap-2">
            {dish.allergens.map((allergen, index) => (
              <li key={index} className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
                {allergenIcons[allergen.trim().toLowerCase()] && (
                  <span className="text-lg">{allergenIcons[allergen.trim().toLowerCase()]}</span>
                )}
                <span className="text-sm hidden">{allergen}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;