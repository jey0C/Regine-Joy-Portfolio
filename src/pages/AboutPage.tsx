import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const services = [
    { title: "Brand Identity", image: "/images/lips.png" },
    { title: "Visual Design", image: "/images/eye.png" },
    { title: "Video Ads", image: "/images/camera.png" },
  ];

  return (
    <div className="flex flex-col w-full bg-[#e8cdcf]">
      {/* First Section */}
      <div className="pt-24 pb-12 w-full lg:h-[90vh] lg:min-h-[800px] lg:max-h-[1000px] flex items-center justify-center bg-[#f9e7e9] relative overflow-hidden shrink-0">
        
        <div className="w-full max-w-[1500px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
          
          {/* Left Side: Text and Tickets */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[45%] shrink-0 pt-10 lg:-ml-10 xl:-ml-20">
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center lg:text-left flex flex-col items-center w-full lg:items-start"
             >
               <img src="/images/red logo.png" alt="Hey there! I'm Regine Moises" className="w-full max-w-[450px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain" />
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mt-16 md:mt-24 lg:mt-32 flex flex-col items-center lg:items-start w-full lg:pl-12 xl:pl-24"
             >
               <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#6b1b26] mb-8 font-medium">What I do</h3>
               
               {/* Tickets Row */}
               <div className="flex flex-row justify-center items-center gap-4 md:gap-8 w-full max-w-3xl lg:justify-start">
                 {services.map((service, index) => (
                   <div key={service.title} className="relative w-[120px] md:w-[180px] lg:w-[200px] xl:w-[220px] aspect-[5/3]">
                      {/* SVG Vintage Label Background */}
                      <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_10px_20px_rgba(107,27,38,0.25)]" 
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
                          <use href={`#ticket-thick-border-front-${index}`} fill="none" stroke="#6b1b26" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                          <use href={`#ticket-thin-border-front-${index}`} fill="none" stroke="#6b1b26" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                        </g>
                      </svg>
                      
                      {/* Foreground Content */}
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
                         <img 
                           src={service.image} 
                           alt={service.title} 
                           className="h-[40%] w-auto object-contain mix-blend-multiply opacity-[0.85] saturate-[0.8] contrast-[1.2] drop-shadow-[0_4px_8px_rgba(107,27,38,0.25)]" 
                         />
                         <h3 className="font-heading font-medium text-[10px] md:text-sm lg:text-base tracking-wide text-[#6b1b26] leading-tight mt-1 md:mt-2 text-center whitespace-nowrap">
                           {service.title}
                         </h3>
                      </div>
                   </div>
                 ))}
               </div>
             </motion.div>
          </div>

          {/* Right Side: Passport Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end shrink-0 relative z-20">
             <motion.div
               initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
               animate={{ opacity: 1, scale: 1, rotate: 2 }}
               transition={{ duration: 1, type: "spring", stiffness: 50 }}
               className="lg:-mt-48 xl:-mt-64 lg:-mr-4 xl:-mr-10"
             >
                <img 
                  src="/images/passport.png" 
                  alt="Regine Moises Passport" 
                  className="w-[500px] lg:w-[650px] xl:w-[750px] max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]" 
                />
             </motion.div>
          </div>

        </div>
      </div>

      {/* Second Section: Book */}
      <div className="py-24 w-full min-h-screen flex items-center justify-center relative overflow-hidden shrink-0 z-10 bg-[#6b2029]">
        
        {/* Book Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[1400px] aspect-[1.65] z-20 mx-4 mt-10 md:mt-0"
        >
          {/* Floating Images */}
          <motion.img 
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src="/images/boardingpass.png" 
            className="absolute top-10 -left-5 md:top-16 md:-left-36 w-32 md:w-[400px] object-contain z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] pointer-events-none" 
            alt="Boarding Pass" 
          />
          <motion.img 
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/glasses.png" 
            className="absolute -top-10 -right-5 md:-top-16 md:-right-16 w-48 md:w-[500px] object-contain z-30 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] pointer-events-none rotate-[15deg]" 
            alt="Glasses" 
          />
          <motion.img 
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/images/digicam.png" 
            className="absolute bottom-0 -left-16 md:bottom-12 md:-left-64 w-48 md:w-[400px] object-contain z-30 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] pointer-events-none -rotate-[82deg]" 
            alt="Camera" 
          />
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src="/images/film.png" 
            className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-24 w-28 md:w-[240px] object-contain z-30 drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] pointer-events-none" 
            alt="Film" 
          />

          <img src="/images/book.png" className="absolute inset-0 w-full h-full object-fill drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] pointer-events-none z-20" alt="Book Background" />

        </motion.div>
      </div>

      {/* Third Section: Girl Dinner */}
      <div className="w-full min-h-screen py-20 flex items-center justify-center relative overflow-hidden bg-white shrink-0 border-t-8 border-[#f9e7e9]">
        <div className="absolute inset-0 bg-gingham pointer-events-none opacity-80" />
        
        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex flex-col md:flex-row items-center justify-between z-10 -translate-x-5 md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-24">
          
          {/* Left Text */}
          <div className="flex flex-col text-[#6b1b26] z-30 drop-shadow-sm md:w-[45%] mt-10 md:-mt-20 xl:pl-20 translate-x-5 md:translate-x-10 lg:translate-x-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-end gap-2 md:gap-4"
            >
              <span className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide mb-1 md:mb-4 lg:mb-6">My</span>
              <span className="font-title text-7xl md:text-[140px] lg:text-[170px] -mb-2 md:-mb-8 lg:-mb-12 leading-none">Girl</span>
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-title text-7xl md:text-[140px] lg:text-[170px] -ml-2 md:-ml-6 leading-none"
            >
              Dinner
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-center mt-2 ml-10 md:ml-32"
            >
              lately
            </motion.span>
          </div>

          {/* Center/Right Items Canvas */}
          <div className="relative w-full md:w-[55%] h-[600px] md:h-[800px] flex items-center justify-center mt-10 md:mt-0">
             {/* Heart Tray */}
             <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: 'spring' }}
                src="/images/heart tray.png?v=2" 
                className="absolute w-[95%] max-w-[750px] lg:max-w-[900px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] z-20" 
                alt="Heart Tray" 
              />
              
             {/* Coffee */}
             <motion.img 
                initial={{ opacity: 0, y: -50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/images/coffee.png" 
                className="absolute top-0 right-0 md:-top-10 md:-right-20 lg:-right-40 xl:-right-56 w-40 md:w-64 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] z-30" 
                alt="Iced Coffee" 
              />

             {/* iPod */}
             <motion.img 
                initial={{ opacity: 0, x: -50, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src="/images/ipod.png" 
                className="absolute -bottom-5 -left-5 md:bottom-0 md:-left-[250px] lg:-left-[400px] xl:-left-[480px] w-32 md:w-48 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] z-30 cursor-pointer hover:scale-105 transition-transform" 
                alt="iPod" 
                onClick={() => navigate('/playlist')}
              />

             {/* Liptint */}
             <motion.img 
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src="/images/liptint.png" 
                className="absolute bottom-16 right-0 md:bottom-32 md:-right-10 lg:-right-20 xl:-right-24 w-36 md:w-[200px] lg:w-[225px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] z-30" 
                alt="Lip Tint" 
              />
          </div>
        </div>
      </div>

      {/* Fourth Section: Process */}
      <div className="w-full relative flex flex-col bg-[#fbf5f2]">
        {/* Top Lace Border Area */}
        <div className="w-full bg-[#6b1b26] flex items-end">
          <div 
            className="w-full h-12 md:h-16 lg:h-20 translate-y-3 md:translate-y-4 lg:translate-y-5 z-10"
            style={{ 
              backgroundImage: "url('/images/top_border.png')", 
              backgroundRepeat: 'repeat-x', 
              backgroundSize: 'auto 100%',
              backgroundPosition: 'bottom'
            }}
          />
        </div>
        
        <div className="w-full py-16 md:py-24 px-6 lg:px-12 flex flex-col items-center">
          <div className="w-full max-w-[1400px]">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#6b1b26] mb-12 flex items-center gap-3 lg:gap-4"
            >
              <span className="text-4xl lg:text-5xl">✦</span> How I bring your vision to life
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                {
                  title: "Let's get to know each other",
                  text: "We start with a conversation about your brand, your goals, and what you're hoping to feel when it's all done. This is where I listen closely before anything else happens."
                },
                {
                  title: "Shaping the vision",
                  text: "I take what we've discussed and begin sketching out ideas such as moodboards, color direction, and early concepts that reflect who you are."
                },
                {
                  title: "Making sure we're aligned",
                  text: "Before diving into the work, we agree on scope, timeline, and budget together so everything moving forward feels clear and considered."
                },
                {
                  title: "Bringing it to life",
                  text: "This is where the work happens thoughtfully, carefully, and with attention to every detail that makes it feel right."
                },
                {
                  title: "Sharing the finished work",
                  text: "You receive the final pieces, I walk you through everything, and we make sure it's exactly what you envisioned."
                }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-[#6b1b26] rounded-[2rem] p-6 lg:p-8 flex flex-col text-[#fbf5f2] shadow-lg h-full"
                >
                  <div className="h-[4.5rem] lg:h-[7rem] mb-4 lg:mb-6">
                    <h3 className="font-heading text-xl md:text-2xl font-medium leading-snug">
                      {step.title.split("'").map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="font-sans">'</span>}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <p className="font-sans text-sm lg:text-base opacity-90 leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Lace Border Area */}
        <div className="w-full bg-[#6b1b26]">
          <div 
            className="w-full h-12 md:h-16 lg:h-20 -translate-y-[18px] md:-translate-y-[26px] lg:-translate-y-[34px] z-10"
            style={{ 
              backgroundImage: "url('/images/bottom_border.png')", 
              backgroundRepeat: 'repeat-x', 
              backgroundSize: 'auto 100%',
              backgroundPosition: 'top'
            }}
          />
          <div className="h-16 md:h-24 lg:h-32 w-full"></div>
        </div>
      </div>

    </div>
  );
}
