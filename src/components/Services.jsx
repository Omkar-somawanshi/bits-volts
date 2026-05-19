import React from 'react';
import arrowIcon from '../assets/Arrow 1.png';

export default function Services() {
  const servicesData = [
    {
      titleLine1: "Search engine",
      titleLine2: "optimization",
      bgClass: "bg-[#F3F3F3]",         // Soft Grey Card background
      badgeClass: "bg-[#B9FF66]",       // Neon green title badge
    },
    {
      titleLine1: "Pay-per-click",
      titleLine2: "advertising",
      bgClass: "bg-[#B9FF66]",         // Neon Green Card background
      badgeClass: "bg-white",          // White title badge
    },
  ];

  return (
    <section className="py-16 bg-white w-full" id="services">
      {/* Outer block constraint ensuring layout lines up with navigation rules */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[100px]">
        
        {/* Section Heading & Description Subtitle */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-14">
          {/* Header Title Badge matching your exact Figma dimension token parameters */}
          <div className="w-[178px] h-[51px] bg-[#B9FF66] border-2 border-[#191A23] rounded-[7px] shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center p-0">
            <h2 className="text-[26px] font-bold text-[#191A23] font-main text-center">
              Services
            </h2>
          </div>
          
          {/* Accompanying Subtitle Paragraph Block */}
          <p className="text-[#191A23] max-w-xl text-base font-main leading-relaxed pt-1">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          </p>
        </div>

        {/* Flex layout handling multiple 600px cards cleanly across screens */}
        <div className="flex flex-wrap gap-[40px] justify-start items-center">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgClass} w-full md:w-[600px] h-[310px] p-[50px] rounded-[45px] border border-[#191A23] shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] flex flex-col justify-between`}
            >
              {/* Top Section: Title Badges */}
              <div>
                <span className={`${service.badgeClass} text-[#191A23] font-main block text-[26px] font-bold px-2 py-0.5 rounded-md w-fit mb-1`}>
                  {service.titleLine1}
                </span>
                <span className={`${service.badgeClass} text-[#191A23] font-main block text-[26px] font-bold px-2 py-0.5 rounded-md w-fit`}
                >
                  {service.titleLine2}
                </span>
              </div>

              {/* Bottom Section: Footer Action Button & Link Wrapper */}
             <div className="flex items-center gap-4 mt-6 select-none">
  {/* The circular button matching your exact 41px specification */}
  <button className="w-[41px] h-[41px] rounded-full bg-[#191A23] border-[3px] border-[#191A23] flex items-center justify-center hover:scale-105 transition duration-150 ease-in-out cursor-pointer">
    
    {/* Clean rendering of your local arrow image asset */}
    <img 
      src={arrowIcon} 
      alt="Arrow link indicator" 
      className="w-auto h-auto max-w-[20px] max-h-[20px] object-contain"
    />

  </button>
  
  {/* Link label text */}
  <span className="font-main font-medium text-[20px] text-[#191A23]">
    Learn more
  </span>
</div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}