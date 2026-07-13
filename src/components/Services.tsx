import { motion } from 'motion/react';

export default function Services() {
  const services = [
    { title: "Brand Identity", image: "/images/lips.png", description: "Logos, colour systems, typography, and brand guidelines that build lasting recognition." },
    { title: "Visual Design", image: "/images/eye.png", description: "Posters, social media assets, and ad creatives that stop the scroll and tell your story." },
    { title: "Video Ads", image: "/images/camera.png", description: "Short-form video content and ad sequences optimised for Instagram, TikTok, and beyond." },
  ];

  return (
    <section className="relative bg-[#eae0d2] text-brand-burgundy pb-24 overflow-hidden pt-0">
      {/* Seamless striped background */}
      <div 
        className="absolute inset-0 opacity-40 z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #dcb9bc 0px, #dcb9bc 60px, transparent 60px, transparent 120px)'
        }}
      />

      {/* Marquee Header Layer - Bridges seamlessly with Hero section */}
      <div className="relative z-20 w-full mb-16 flex flex-col mt-[-1px]">
        {/* Deep red strip to ensure a solid background above the lace */}
        <div className="w-full bg-[#6b1b26] h-10 md:h-12" />
        
        {/* Top Ornate Graphic Border */}
        <div className="w-full h-12 sm:h-16 md:h-[72px] z-20 relative pointer-events-none -mt-[30px] sm:-mt-[40px] md:-mt-[48px]" style={{
          backgroundImage: 'url("/images/top_border.png")',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'repeat-x'
        }}></div>
        
        {/* Marquee Band */}
        <div className="w-full bg-[#f8f4ef] py-3 sm:py-4 flex overflow-hidden relative z-10 -mt-[18px] sm:-mt-[24px] md:-mt-[24px]">
          <motion.div
             animate={{ x: [ "-50%", "0%" ] }}
             transition={{ ease: "linear", duration: 25, repeat: Infinity }}
             className="flex whitespace-nowrap w-max items-center"
          >
            {Array.from({ length: 2 }).map((_, i) => (
               <div key={i} className="flex">
                  {Array.from({ length: 12 }).map((_, j) => (
                     <div key={j} className="flex items-center text-[#6b1b26]">
                       <span 
                         style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontStyle: 'italic' }} 
                         className="text-xl md:text-2xl px-5 tracking-wide pt-1"
                       >
                         What I d<span style={{ fontStyle: 'italic' }}>o</span>
                       </span>
                       <svg className="w-4 h-4 md:w-5 md:h-5 fill-[#6b1b26] opacity-90 mx-2" viewBox="0 0 24 24">
                          <path d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z" />
                       </svg>
                     </div>
                  ))}
               </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Ornate Graphic Border */}
        <div className="w-full h-12 sm:h-16 md:h-[72px] z-20 relative pointer-events-none -mt-[26px] sm:-mt-[34px] md:-mt-[38px]" style={{
          backgroundImage: 'url("/images/bottom_border.png")',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'left top',
          backgroundRepeat: 'repeat-x'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover="hover"
              className="relative w-full max-w-[340px] md:w-[32%] aspect-[5/3] group cursor-pointer p-2 sm:p-4 lg:p-6"
              style={{ perspective: 1000 }}
            >
              <motion.div
                variants={{
                  initial: { rotateY: 0 },
                  hover: { rotateY: 180 }
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                  {/* Elegant SVG Vintage Label Background */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_20px_40px_rgba(107,27,38,0.45)]" 
                    preserveAspectRatio="none" 
                    viewBox="0 0 300 180" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path id={`ticket-base-front-${index}`} d="M -125 -90 L 125 -90 A 25 25 0 0 0 150 -65 Q 158 0 150 65 A 25 25 0 0 0 125 90 L -125 90 A 25 25 0 0 0 -150 65 Q -158 0 -150 -65 A 25 25 0 0 0 -125 -90 Z" />
                      <path id={`ticket-thick-border-front-${index}`} d="M -120.4 -85 L 120.4 -85 A 30 30 0 0 0 145 -60.4 Q 153 0 145 60.4 A 30 30 0 0 0 120.4 85 L -120.4 85 A 30 30 0 0 0 -145 60.4 Q -153 0 -145 -60.4 A 30 30 0 0 0 -120.4 -85 Z" />
                      <path id={`ticket-thin-border-front-${index}`} d="M -115 -78 L 115 -78 A 37 37 0 0 0 138 -55 Q 146 0 138 55 A 37 37 0 0 0 115 78 L -115 78 A 37 37 0 0 0 -138 55 Q -146 0 -138 -55 A 37 37 0 0 0 -115 -78 Z" />
                    </defs>
                    <g transform="translate(150 90)">
                      <use href={`#ticket-base-front-${index}`} fill="#f8f4ef" />
                      <use href={`#ticket-thick-border-front-${index}`} fill="none" stroke="#6b1b26" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                      <use href={`#ticket-thin-border-front-${index}`} fill="none" stroke="#6b1b26" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </g>
                  </svg>
                  
                  {/* Foreground Content */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                     {/* Vintage texture overlay over the card (optional) */}
                     <div className="absolute inset-0 bg-brand-burgundy/5 opacity-40 mix-blend-multiply pointer-events-none rounded-[20px]" />
                     
                     <img 
                       src={service.image} 
                       alt={service.title} 
                       className="h-[40%] sm:h-[45%] md:h-[50%] w-auto object-contain mix-blend-multiply opacity-[0.85] saturate-[0.8] contrast-[1.2] drop-shadow-[0_4px_8px_rgba(107,27,38,0.25)]" 
                     />
                     <h3 className="font-heading text-base sm:text-lg md:text-[20px] lg:text-[22px] tracking-wide text-brand-burgundy leading-tight mt-1 sm:mt-2">
                       {service.title}
                     </h3>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  {/* Elegant SVG Vintage Label Background */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_20px_40px_rgba(107,27,38,0.45)]" 
                    preserveAspectRatio="none" 
                    viewBox="0 0 300 180" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path id={`ticket-base-back-${index}`} d="M -125 -90 L 125 -90 A 25 25 0 0 0 150 -65 Q 158 0 150 65 A 25 25 0 0 0 125 90 L -125 90 A 25 25 0 0 0 -150 65 Q -158 0 -150 -65 A 25 25 0 0 0 -125 -90 Z" />
                      <path id={`ticket-thick-border-back-${index}`} d="M -120.4 -85 L 120.4 -85 A 30 30 0 0 0 145 -60.4 Q 153 0 145 60.4 A 30 30 0 0 0 120.4 85 L -120.4 85 A 30 30 0 0 0 -145 60.4 Q -153 0 -145 -60.4 A 30 30 0 0 0 -120.4 -85 Z" />
                      <path id={`ticket-thin-border-back-${index}`} d="M -115 -78 L 115 -78 A 37 37 0 0 0 138 -55 Q 146 0 138 55 A 37 37 0 0 0 115 78 L -115 78 A 37 37 0 0 0 -138 55 Q -146 0 -138 -55 A 37 37 0 0 0 -115 -78 Z" />
                    </defs>
                    <g transform="translate(150 90)">
                      <use href={`#ticket-base-back-${index}`} fill="#f8f4ef" />
                      <use href={`#ticket-thick-border-back-${index}`} fill="none" stroke="#6b1b26" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                      <use href={`#ticket-thin-border-back-${index}`} fill="none" stroke="#6b1b26" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </g>
                  </svg>
                  
                  {/* Foreground Content */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-10 sm:px-12 md:px-14 py-6 sm:py-8 text-center text-[#6b1b26]">
                     <div className="absolute inset-0 bg-brand-burgundy/5 opacity-40 mix-blend-multiply pointer-events-none rounded-[20px]" />
                     <p className="font-sans text-[11px] sm:text-xs md:text-[13px] leading-relaxed opacity-90">
                       {service.description}
                     </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
