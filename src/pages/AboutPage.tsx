import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const services = [
    { title: "Brand Identity", image: "/images/lips.png", description: "Logos, colour systems, typography, and brand guidelines that build lasting recognition." },
    { title: "Visual Design", image: "/images/eye.png", description: "Posters, social media assets, and ad creatives that stop the scroll and tell your story." },
    { title: "Video Ads", image: "/images/camera.png", description: "Short-form video content and ad sequences optimised for Instagram, TikTok, and beyond." },
  ];

  return (
    <div className="flex flex-col w-full bg-[#e8cdcf]">
      {/* First Section */}
      <div className="pt-24 pb-12 w-full min-h-[100vh] flex flex-col items-center justify-center bg-[#f9e7e9] relative overflow-hidden shrink-0">
        
        <div className="w-full max-w-[1500px] mx-auto px-6 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
          
          {/* Left Side: Text */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[45%] shrink-0 -mt-10 lg:-mt-20">
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center lg:text-left flex flex-col items-center w-full lg:items-start"
             >
               <img src="/images/red logo.png" alt="Hey there! I'm Regine Moises" className="w-full max-w-[450px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain mb-8" />
               
               <div className="w-full max-w-[450px] lg:max-w-[700px] xl:max-w-[800px] flex flex-col gap-6 text-[#2b0402] text-sm md:text-base lg:text-lg leading-relaxed px-4 lg:px-0">
                 <p className="italic font-medium">
                   A marketing enthusiast passionate about helping brands communicate their ideas clearly and creatively.
                 </p>
                 <p>
                   I specialize in brand design and marketing asset creation, from presentation decks and posters to digital visuals that help brands tell meaningful stories and connect with their audiences. Through academic projects and hands-on creative work, I've developed strong skills in marketing strategy, creative conceptualization, storyboarding, and visual content creation, with a focus on turning ideas into campaigns that strengthen brand identity and capture attention.
                 </p>
                 <p>
                   I'm always excited to collaborate with businesses, teams, and organizations looking to grow their brand presence through thoughtful, creative marketing. If you're looking for someone who can bring your marketing ideas to life through strong visuals and storytelling, I'd love to connect.
                 </p>
                 <p>
                   When I'm not designing, you'll find me singing a little too loudly, dancing around my room, or rewatching a film. I love a good movie or series, dogs and cats, crafting random things, and trying new food whenever I can.
                 </p>
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
                  className="w-full max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer" 
                />
             </motion.div>
          </div>

        </div>

        {/* Tickets Row Removed */}
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
          <div className="flex flex-col text-[#6b1b26] z-30 drop-shadow-sm md:w-[45%] xl:pl-20 translate-x-5 md:translate-x-10 lg:translate-x-16 -mt-32 md:-mt-48 lg:-mt-64">
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
             <motion.div 
                initial={{ opacity: 0, y: -50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 right-0 md:-top-10 md:-right-20 lg:-right-40 xl:-right-56 w-40 md:w-64 z-30 group cursor-pointer" 
              >
                <img 
                  src="/images/coffee.png" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105" 
                  alt="Iced Coffee" 
                />
                
                {/* Popout Text */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl border border-[#f9e7e9] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap z-40" style={{ transform: "translate(-50%, 0) rotate(-10deg)" }}>
                  <p className="font-sans text-sm md:text-base font-medium text-[#6b1b26]">
                    1 Caramel Macchiato for Regine
                  </p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-b border-r border-[#f9e7e9] transform rotate-45"></div>
                </div>
              </motion.div>

             {/* iPod */}
             <motion.div 
                initial={{ opacity: 0, x: -50, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-5 -left-5 md:bottom-0 md:-left-[250px] lg:-left-[400px] xl:-left-[480px] z-30 cursor-pointer group flex items-center gap-2 md:gap-4"
                onClick={() => navigate('/playlist')}
              >
                <img
                  src="/images/ipod.png" 
                  className="w-32 md:w-48 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform" 
                  alt="iPod" 
                />
                
                <div className="hidden sm:block font-sans text-sm md:text-base lg:text-lg font-medium text-[#6b1b26] italic max-w-[150px] md:max-w-[180px] drop-shadow-sm -ml-4 mt-20 lg:mt-32" style={{ transform: "rotate(-5deg)" }}>
                  <div className="translate-y-16 md:translate-y-20 lg:translate-y-28 translate-x-3 md:translate-x-4 lg:translate-x-6">
                    "Tap the iPod, my playlist says a lot about me"
                  </div>
                  <svg className="w-6 h-6 md:w-8 md:h-8 absolute -bottom-6 -left-4 text-[#6b1b26] opacity-60 transform -scale-x-100 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                </div>
              </motion.div>

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
