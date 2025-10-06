import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/NEGATIVA.png';
import { useNavigate } from "react-router-dom";

// src/main.jsx o src/App.jsx



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" shadow-lg" style={{ backgroundColor: '#4A7C59' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div onClick={() => navigate("/")} className="flex items-center space-x-1 sm:space-x-2">
                <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
                <h2 className="font-Montserrat-semi-bold text-sm sm:text-lg md:text-xl text-white">CFLZ</h2>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('nosotros');
                }}
                className="font-Montserrat-semi-bold text-white hover:text-soft-cream px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              >
                NOSOTROS
              </a>
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('proyectos');
                }}
                className="font-Montserrat-semi-bold text-white hover:text-soft-cream px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              >
                PROYECTOS
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('servicios');
                }}
                className="font-Montserrat-semi-bold text-white hover:text-soft-cream px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              >
                SERVICIOS
              </a>
              
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                }}
                className="font-Montserrat-semi-bold text-white hover:text-soft-cream px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              >
                CONTACTO
              </a>
            </div>
          </div>


          <div className="hidden sm:block">
            <a  href="https://wa.me/c/573184575744" className="font-Montserrat-semi-bold text-white hover:text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105" style={{ backgroundColor: '#6B8E5A' }}>
              CONTACTANOS
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-soft-cream inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-5 w-5" />
              ) : (
                <Menu className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1" style={{ backgroundColor: '#4A7C59' }}>
            <a
              href="#nosotros"
              className="text-white hover:text-soft-cream block px-3 py-2 text-base font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('nosotros');
                setIsMenuOpen(false);
              }}
            >
              NOSOTROS
            </a>
            <a
              href="#proyectos"
              className="text-white hover:text-soft-cream block px-3 py-2 text-base font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('proyectos');
                setIsMenuOpen(false);
              }}
            >
              PROYECTOS
            </a>
            <a
              href="#servicios"
              className="text-white hover:text-soft-cream block px-3 py-2 text-base font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('servicios');
                setIsMenuOpen(false);
              }}
            >
              SERVICIOS
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-soft-cream block px-3 py-2 text-base font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
                setIsMenuOpen(false);
              }}
            >
              CONTACTO
            </a>
            <div className="px-3 py-2">
              <a href="https://wa.me/c/573184575744" className="block w-full text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md text-center hover:scale-105" style={{backgroundColor: '#6B8E5A' }}>
                CONTACTANOS
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;