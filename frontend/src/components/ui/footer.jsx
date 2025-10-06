import React from 'react';
import logo from '../../assets/NEGATIVA.png';

import { Facebook, Instagram, MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className="">
            <footer className="text-white relative overflow-hidden mt-auto border-t border-white/20" style={{ backgroundColor: '#4A7C59' }}>
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-opacity-10" style={{ backgroundColor: '#4A7C59' }}></div>
                {/* Contenido del footer */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-18 w-auto" />
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                        <a href="https://www.facebook.com/profile.php?id=61558841382897" className="flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium hover:text-soft-cream">
                            <Facebook size={16} className="sm:w-5 sm:h-5" />
                            <span className="font-Montserrat-semi-bold hidden sm:inline">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/lacasade_las.flores/" className="flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium hover:text-soft-cream">
                            <Instagram size={16} className="sm:w-5 sm:h-5" />
                            <span className="font-Montserrat-semi-bold hidden sm:inline">Instagram</span>
                        </a>
                        <a href="https://wa.me/c/573184575744" className="font-Montserrat-semi-bold flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium hover:text-soft-cream">
                            <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                        <a href="#" className="font-Montserrat-semi-bold flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium hover:text-soft-cream">
                            <Linkedin size={16} className="sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
