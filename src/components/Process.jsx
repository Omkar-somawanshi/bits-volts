import React, { useState } from 'react';

export default function Process() {
  const [openStep, setOpenStep] = useState(0); // Default open first step

  const steps = [
    { num: "01", title: "Consultation", content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { num: "02", title: "Research and Strategy Development", content: "We deep dive into market trends, evaluate competitor structures, and build out a customized strategic implementation roadmap tailored to your exact conversion targets." },
  ];

  return (
    <section className="py-16 bg-white w-full" id="process">
      {/* Outer block restricted to standard 1440px desktop grid width layout guidelines */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[100px]">
        
        {/* Section Title Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[40px] mb-20 select-none">
          {/* Header Title Badge */}
          <div className="w-full md:w-[412px] h-[51px] bg-[#B9FF66] border-2 border-[#191A23] rounded-[7px] shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center px-[7px]">
            <h2 className="text-[26px] font-bold text-[#191A23] font-main text-center whitespace-nowrap">
              Our Working Process
            </h2>
          </div>
          
          <p className="text-[#191A23] max-w-xs text-sm font-main leading-snug">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Process Steps Accordion List Group */}
        <div className="flex flex-col gap-[30px] w-full max-w-[1234px]">
          {steps.map((step, index) => {
            const isOpen = openStep === index;
            return (
              <div 
                key={index}
                className={`${isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'} border-2 border-[#191A23] rounded-[45px] p-6 md:p-[50px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] transition-all duration-300 flex flex-col`}
              >
                
                {/* 1. Open Expanded Content State: Rendered on TOP layer per your blueprint */}
                {isOpen && (
                  <div className="w-full mb-6">
                    {/* Top Accent Horizontal Border Line Asset */}
                    <div className="w-full border-t border-[#191A23] mb-[30px] h-0 opacity-100"></div>
                    
                    <p className="text-[#191A23] font-main text-[16px] md:text-[18px] leading-relaxed max-w-[1117px]">
                      {step.content}
                    </p>
                  </div>
                )}

                {/* 2. Main Identity Action Row: Resides at the BOTTOM layer when expanded */}
                <div 
                  className="w-full min-h-[77px] flex justify-between items-center cursor-pointer select-none gap-4 mt-auto"
                  onClick={() => setOpenStep(isOpen ? -1 : index)}
                >
                  <div className="flex items-center gap-[25px]">
                    {/* Step Index Number */}
                    <span className="text-[30px] md:text-[60px] font-bold text-[#191A23] font-main tracking-tighter">
                      {step.num}
                    </span>
                    {/* Step Title Label */}
                    <span className="text-[20px] md:text-[30px] font-bold text-[#191A23] font-main leading-tight">
                      {step.title}
                    </span>
                  </div>

                  {/* High Contrast Toggle Button Matching Screenshot Sizes */}
                  <button className="w-[58px] h-[58px] min-w-[58px] bg-[#F3F3F3] border-2 border-[#191A23] rounded-full flex items-center justify-center font-extrabold text-[32px] text-[#191A23] shadow-[1px_2px_0px_0px_rgba(25,26,35,1)] pointer-events-none">
                    {isOpen ? '−' : '+'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}