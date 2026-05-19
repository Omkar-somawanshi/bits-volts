import React from 'react';
import heroImage from '../assets/Illustration.png'; // Your exact asset import
import vectorArrow from '../assets/Vector.png';

// Partner logo image imports
import dribbbleLogo from '../assets/dribbble.png';
import hubspotLogo from '../assets/hubspot.png';
import notionLogo from '../assets/notion.png';
import netflixLogo from '../assets/netflix.png';
import zoomLogo from '../assets/zoom.png';
import hubspotSprocket from '../assets/logo.png';

export default function Hero() {
  return (
    <section className="bg-white text-brand-dark pt-8 pb-16 md:py-20 w-full" id="home">
      {/* Container restricted to the 1440px desktop grid layout with 100px padding */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[100px]">
        
        {/* Core Layout Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Typography Headlines & CTA button */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-bold font-main text-brand-dark leading-[1.15] tracking-tight mb-6 max-w-xl">
              Navigating the digital landscape for success
            </h1>
            
            <p className="text-[16px] md:text-[18px] font-main font-normal text-gray-800 leading-relaxed mb-8 max-w-md">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            
            <div>
              {/* Using direct hex mapping values ensures your button instantly displays solid black with clear white text */}
              <button className="w-full sm:w-auto bg-[#191A23] text-[#ffffff] px-[35px] py-[20px] rounded-xl text-[20px] font-normal font-main hover:bg-opacity-90 transition duration-200">
                Book a consultation
              </button>
            </div>
          </div>

          {/* Right Column: High Fidelity Header Image Asset */}
          <div className="flex justify-center items-center w-full mt-8 md:mt-0">
            <img 
              src={heroImage} 
              alt="Positivus Hero Layout Illustration" 
              className="w-full h-auto max-w-[600px] object-contain"
            />
          </div>

        </div>

        {/* --- Partner Logos Ribbon & Vector Arrow Section --- */}
        <div className="mt-16 md:mt-[70px] flex flex-col items-center w-full">
          
          {/* Main brand logos strip container - Amazon left as raw text, others swapped to PNG tags */}
          <div className="w-full flex flex-wrap justify-between items-center gap-6 opacity-100 ">
            <span className="font-main font-extrabold text-4xl tracking-tighter text-[#191A23]">amazon</span>
            <img src={dribbbleLogo} alt="Dribbble" className="h-8 w-auto object-contain" />
{/* Unified HubSpot Logo Layout Group */}
<div className="flex items-center gap-0.5">
  <img src={hubspotLogo} alt="HubSpot" className="h-8 w-auto object-contain" />
  <img src={hubspotSprocket} alt="HubSpot Sprocket Icon" className="h-9 w-auto object-contain -ml-13" />
</div>            <img src={notionLogo} alt="Notion" className="h-8 w-auto object-contain" />
            <img src={netflixLogo} alt="Netflix" className="h-8 w-auto object-contain" />
            <img src={zoomLogo} alt="Zoom" className="h-8 w-auto object-contain" />
          </div>

          {/* Clean positioning frame for your vector arrow graphic asset right below */}
          <div className="mt-1 ml-10 flex w-full">
            <img 
              src={vectorArrow} 
              alt="Design Layout Vector Arrow" 
              className="h-auto max-w-full object-contain"
            />
          </div>

        </div>

      </div>  
    </section>
  );
}