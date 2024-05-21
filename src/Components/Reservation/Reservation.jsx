import React from 'react';
import { Link } from'react-router-dom';
import './Reservation.css';

const ReservationSection = () => {
  return (
    <div className="">
      <div className='section-AboutUs-div1'>
        <h2>Reser<span className='title-2-word'>vas</span></h2>
      </div>
        <hr className='hr1'/>
        <hr className='hr2'/>

      <p className="mt-4 text-gray-600 text-lg" style={{textAlign: 'center', margin: '0 4rem',textAlign: 'justify'}}>
        Disfruta de una experiencia inolvidable en nuestro restaurante, ya sea en el elegante interior o en la acogedora terraza. Perfecto para cenas románticas, reuniones familiares o eventos especiales. No te pierdas la oportunidad de crear momentos memorables con nosotros.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <div className="max-w-xs"> 
          
          <img src="/images/terraza.JPG" alt="Terraza" className="w-1/1 self-center rounded-lg shadow-lg border-4 border-yellow-400"/>
          <p className="text-center mt-2">Nuestra Terraza</p>
        </div>
        <div className="max-w-xs"> 
        <img src="/images/salon.JPG" alt="Salón" className="rounded-lg shadow-lg border-4 border-yellow-400"/>
          <p className="text-center mt-2">Salón Principal</p>
          <button className="mt-8 mx-auto block px-4 py-2 text-white font-bold rounded transition-colors duration-300 transform bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] disabled:opacity-50">
          <Link to="/reservation">Reservar</Link>
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default ReservationSection;
