import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <div className="fixed top-0 w-full z-50 bg-white text-black">
      <section className="w-full mx-auto px-4 overflow-hidden">
        <nav className="flex justify-between items-center py-6">
          <div className="flex items-center">
          <a className="text-3xl font-bold font-heading" href="/">
              <img
                src={logo}
                width={140}
                height={50}
                
                alt="Logo"
              />
            </a>
          </div>
          <button
            className="md:hidden text-xl focus:outline-none ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <ul className={`${menuOpen ? 'flex flex-col w-full items-center space-y-4 mt-4' : 'hidden'} md:hidden`}>
          <li><a className="hover:text-[#BBBC4E]" href="/">Inicio</a></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#Carta">Carta</a></li>
              <li><Link className="hover:text-[#BBBC4E]" to="/reservation">Reserva</Link></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#AboutUs">Nuestra cocina</a></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#Contacto">Contacto</a></li>
              <li><Link className="hover:text-[#BBBC4E]" to="/Grupos">Grupos</Link></li>
          </ul>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-[#BBBC4E]" href="/">Inicio</a></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#Carta">Carta</a></li>
              <li><Link className="hover:text-[#BBBC4E]" to="/reservation">Reserva</Link></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#AboutUs">Nuestra cocina</a></li>
              <li><a className="hover:text-[#BBBC4E]" href="/#Contacto">Contacto</a></li>
              <li><Link className="hover:text-[#BBBC4E]" to="/Grupos">Grupos</Link></li>

          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
