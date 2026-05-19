import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // The high-fidelity black star/cross logo asset from the Positivus design specs encoded as an inline SVG Data URI
  const designLogoSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23191A23'><path d='M16 0C16 8.83656 8.83656 16 0 16C8.83656 16 16 23.1634 16 32C16 23.1634 23.1634 16 32 16C23.1634 16 16 8.83656 16 0Z'/></svg>";

  return (
    <nav className="bg-white text-brand-dark sticky top-0 z-50 w-full">
      {/* Main Container constrained to 1440px wide max, 
          matching Figma's h-68 (h-[68px]) and px-100 (px-[100px]) on desktop.
      */}
      <div className="max-w-[1440px] mx-auto h-[68px] px-4 md:px-[100px] flex items-center justify-between">
        
        {/* Logo Brand Group */}
        <div className="flex items-center gap-3 h-full">
          <img 
            src={designLogoSvg} 
            alt="Positivus Logo" 
            className="h-9 w-auto object-contain" 
          />
          <span className="text-3xl font-black tracking-tight font-main text-[#191A23]">Positivus</span>
        </div>

        {/* Desktop Navigation Menu 
            Matches Figma specs: width: 811px wrapper, gap: 40px (gap-10), font size: 20px, line-height: 28px
        */}
        <div className="hidden md:flex items-center gap-10 max-w-[811px] font-main text-[20px] font-normal leading-7 text-brand-dark">
          <a href="#about" className="hover:text-gray-600 transition whitespace-nowrap">About us</a>
          <a href="#services" className="hover:text-gray-600 transition whitespace-nowrap">Services</a>
          <a href="#use-cases" className="hover:text-gray-600 transition whitespace-nowrap">Use Cases</a>
          <a href="#pricing" className="hover:text-gray-600 transition whitespace-nowrap">Pricing</a>
          <a href="#blog" className="hover:text-gray-600 transition whitespace-nowrap">Blog</a>
          
          {/* Action Button embedded inside the right cluster wrapper */}
          <button className="border border-brand-dark text-brand-dark px-7 py-3 rounded-xl text-[20px] font-normal leading-7 hover:bg-brand-dark hover:text-white transition duration-200 whitespace-nowrap cursor-pointer">
            Request a quote
          </button>
        </div>

        {/* Mobile Menu Toggler Button (Hidden on Desktop) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brand-dark focus:outline-none cursor-pointer"
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

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-8 space-y-4 shadow-xl absolute w-full left-0 z-50 font-main">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">About us</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Services</a>
          <a href="#use-cases" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Use Cases</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Pricing</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="block py-2 text-[20px] font-normal hover:text-gray-600">Blog</a>
          <button className="w-full text-center border border-brand-dark text-brand-dark py-3 rounded-xl text-[20px] font-normal mt-4 cursor-pointer">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
}