import React from 'react';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full bg-white pt-16" id="footer">
      {/* Outer grid alignment wrapper enforcing standard 1440px desktop side margins */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[100px]">
        
        {/* --- Main Outer Dark Layout Panel Container (1241px × 514px) --- */}
        <div className="w-full max-w-[1241px] min-h-[514px] bg-[#191A23] border-t-2 border-x-2 border-[#191A23] rounded-t-[45px] pt-[55px] pb-[50px] px-6 md:px-[60px] flex flex-col justify-between mx-auto select-none">
          
          {/* Top Layer Matrix Block (Width: 1121px) */}
          <div className="w-full flex flex-col gap-[66px]">
            
            {/* Row 1: Brand Navigation Bar */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6 md:pb-0 md:border-none">
              {/* Logo Identity */}
              <div className="flex items-center gap-2">
                <div className="text-white text-2xl font-black font-main tracking-tight flex items-center gap-1.5">
                  {/* Simplistic representation of the star logo shape asset */}
                  <span className=" text-3xl">✦</span>
                  Positivus
                </div>
              </div>

              {/* Central Text  */}
              <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-[40px] text-white font-main text-base font-normal">
                <a href="#about" className="hover:text-[#B9FF66] transition duration-150 underline decoration-1 underline-offset-4">About us</a>
                <a href="#services" className="hover:text-[#B9FF66] transition duration-150 underline decoration-1 underline-offset-4">Services</a>
                <a href="#use-cases" className="hover:text-[#B9FF66] transition duration-150 underline decoration-1 underline-offset-4">Use Cases</a>
                <a href="#pricing" className="hover:text-[#B9FF66] transition duration-150 underline decoration-1 underline-offset-4">Pricing</a>
                <a href="#blog" className="hover:text-[#B9FF66] transition duration-150 underline decoration-1 underline-offset-4">Blog</a>
              </nav>

              {/* Social Media Link  */}
              <div className="flex items-center gap-[20px]">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[#191A23] text-sm font-bold hover:bg-[#B9FF66] transition duration-150">
                  in
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[#191A23] text-sm font-bold hover:bg-[#B9FF66] transition duration-150">
                  f
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[#191A23] text-sm font-bold hover:bg-[#B9FF66] transition duration-150">
                  𝕏
                </a>
              </div>
            </div>

            {/* Row 2: Info Split Block (Width: 1120px) */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[50px]">
              
              {/* Contact Particulars Node Block */}
              <div className="flex flex-col items-start font-main text-white">
                <div className="bg-[#B9FF66] text-[#191A23] font-bold text-base px-[7px] py-[2px] rounded-[7px] mb-7">
                  Contact us:
                </div>
                <div className="flex flex-col gap-[12px] text-base font-normal tracking-wide">
                  <p>Email: <a href="mailto:info@positivus.com" className="hover:text-[#B9FF66] transition">info@positivus.com</a></p>
                  <p>Phone: 555-567-8901</p>
                  <p className="max-w-[300px] leading-relaxed">
                    Address: 1234 Main St<br />
                    Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>

              {/* Embedded Interactive Subscription Banner (634px × 184px) */}
              <form 
                onSubmit={handleSubmit}
                className="w-full lg:w-[634px] min-h-[184px] bg-[#292A32] rounded-[14px] py-[58px] px-6 md:px-[40px] flex flex-col sm:flex-row items-center gap-[20px]"
              >
                {/* Text Form Input Area */}
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="w-full h-[58px] bg-transparent border border-white rounded-[14px] px-[20px] text-white font-main placeholder-white/60 outline-none focus:border-[#B9FF66] transition-colors"
                />
                
                {/* High Contrast Call-to-Action Submit Button */}
                <button 
                  type="submit" 
                  className="w-full sm:w-auto sm:whitespace-nowrap h-[58px] bg-[#B9FF66] text-[#191A23] px-[35px] font-bold text-lg rounded-[14px] hover:bg-[#a6e655] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Subscribe to news
                </button>
              </form>

            </div>

          </div>

          {/* Bottom Layer Attribution Meta Block */}
          <div className="w-full border-t border-white/20 pt-[30px] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[40px] text-white font-main text-sm font-normal">
            <span>© 2023 Positivus. All Rights Reserved.</span>
            <a href="#privacy" className="underline hover:text-[#B9FF66] transition duration-150">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}