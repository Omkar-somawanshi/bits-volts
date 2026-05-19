import React, { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp"
    },
    {
      quote: "Their tailored PPC strategies and meticulous attention to analytical data completely transformed our conversion rates. Working with them feels less like dealing with an external vendor and more like collaborating with an internalized growth team.",
      name: "Sarah Jenkins",
      role: "CEO at NovaRetail"
    },
    {
      quote: "The content creation strategy they laid down gave our brand a unified, authoritative tone across channels. Organic discovery traffic spiked significantly within the first 90 days of implementation.",
      name: "Michael Chang",
      role: "Founder at FinTech Flow"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white w-full" id="testimonials">
      {/* Outer block aligned cleanly to your standard 1440px layout width configuration */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[100px]">
        
        {/* --- Section Title Header Block --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[40px] mb-20 select-none">
          {/* Header Title Badge matching your exact 255px x 51px Figma parameters */}
          <div className="w-[255px] h-[51px] bg-[#B9FF66] border-2 border-[#191A23] rounded-[7px] shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center p-0">
            <h2 className="text-[26px] font-bold text-[#191A23] font-main text-center">
              Testimonials
            </h2>
          </div>
          
          {/* Accompanying subtitle text description */}
          <p className="text-[#191A23] max-w-md text-sm font-main leading-snug">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* --- Main Outer Slider Layout Panel (width: 1240px; min-height: 625px) --- */}
        <div className="w-full max-w-[1240px] min-h-[625px] bg-[#191A23] rounded-[45px] pt-[84px] pb-[68px] px-6 md:px-[100px] flex flex-col justify-between items-center relative overflow-hidden mx-auto">
          
          {/* Slider Cards Container Grid */}
          <div className="w-full flex items-start justify-center gap-8 md:gap-12 w-full">
            {testimonialsData.map((item, index) => {
              // Simple slider visibility math to show active card in center with partial siblings flanking it
              let position = "nextSlide opacity-40 scale-95 hidden md:flex";
              if (index === activeIndex) {
                position = "activeSlide opacity-100 scale-100 flex";
              } else if (index === activeIndex - 1 || (activeIndex === 0 && index === testimonialsData.length - 1)) {
                position = "prevSlide opacity-40 scale-95 hidden md:flex";
              }

              return (
                <div 
                  key={index}
                  className={`flex-col items-start transition-all duration-500 ease-in-out max-w-[606px] w-full ${position}`}
                >
                  {/* Speech Bubble Quote Card Box (width: 606px; height: 266px) */}
                  <div className="relative border border-[#B9FF66] rounded-[45px] p-8 md:p-[50px] w-full md:w-[606px] md:h-[266px] bg-transparent flex items-center">
                    <p className="text-white font-main text-[16px] md:text-[18px] font-normal leading-relaxed">
                      "{item.quote}"
                    </p>
                    
                    {/* The speech bubble notch tail at the bottom left-center */}
                    <div className="absolute bottom-[-13px] left-[60px] w-6 h-6 bg-[#191A23] border-b border-r border-[#B9FF66] transform rotate-45"></div>
                  </div>

                  {/* Profile Identification Meta Row positioned safely beneath the bubble tail notch */}
                  <div className="mt-8 ml-[75px] flex flex-col">
                    <span className="text-[#B9FF66] font-main font-bold text-[18px] md:text-[20px]">
                      {item.name}
                    </span>
                    <span className="text-white font-main text-[14px] md:text-[16px] font-light mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- Navigation Controls & Pagination Row --- */}
          <div className="w-full flex items-center justify-between mt-12 select-none px-4 max-w-[606px]">
            {/* Previous Arrow Button */}
            <button 
              onClick={handlePrev}
              className="text-white text-[24px] hover:text-[#B9FF66] transition duration-150 cursor-pointer p-2"
              aria-label="Previous Testimonial"
            >
              ←
            </button>

            {/* Custom Pagination Center Indicator Panel (width: 146px; height: 14px) */}
            <div className="w-[146px] h-[14px] flex items-center justify-center gap-[10px]">
              {testimonialsData.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  onClick={() => setActiveIndex(dotIndex)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    dotIndex === activeIndex ? 'bg-[#B9FF66] scale-110' : 'bg-white opacity-40'
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow Button */}
            <button 
              onClick={handleNext}
              className="text-white text-[24px] hover:text-[#B9FF66] transition duration-150 cursor-pointer p-2"
              aria-label="Next Testimonial"
            >
              →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}