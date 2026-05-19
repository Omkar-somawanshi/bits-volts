import React, { useState } from 'react';
import logoIcon from '../assets/icon.png'; // Your asset file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-brand-dark sticky top-0 z-50 w-full">
      {/* 1440px wide desktop container framework with 100px horizontal padding matching Figma */}
      <div className="max-w-[1440px] mx-auto h-[68px] px-4 md:px-[100px] flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 h-full">
          <img 
            src={logoIcon} 
            alt="Positivus Logo" 
            className="h-9 w-auto object-contain" 
          />
          <span className="text-3xl font-bold tracking-tight font-main text-brand-dark">
            Positivus
          </span>
        </div>

        {/* Desktop Navigation Link Group (Width: 811px wrapper, Gap: 40px) */}
        <div className="hidden md:flex items-center gap-10 max-w-[811px] font-main text-[20px] font-normal leading-[28px] text-brand-dark">
          <a href="#about" className="hover:text-gray-600 transition whitespace-nowrap">About us</a>
          <a href="#services" className="hover:text-gray-600 transition whitespace-nowrap">Services</a>
          <a href="#use-cases" className="hover:text-gray-600 transition whitespace-nowrap">Use Cases</a>
          <a href="#pricing" className="hover:text-gray-600 transition whitespace-nowrap">Pricing</a>
          <a href="#blog" className="hover:text-gray-600 transition whitespace-nowrap">Blog</a>
          
          {/* Action Button inside right stack frame */}
          <button className="border border-brand-dark text-brand-dark px-7 py-3 rounded-xl text-[20px] font-normal leading-[28px] hover:bg-brand-dark hover:text-white transition duration-200 whitespace-nowrap">
            Request a quote
          </button>
        </div>

        {/* Mobile Hamburger Drawer Trigger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brand-dark focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown Grid (Displays dynamically on click toggles) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-8 space-y-4 absolute w-full left-0 z-50 font-main shadow-xl">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">About us</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Services</a>
          <a href="#use-cases" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Use Cases</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Pricing</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Blog</a>
          <button className="w-full text-center border border-brand-dark text-brand-dark py-3 rounded-xl text-[20px] font-normal mt-4">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
}