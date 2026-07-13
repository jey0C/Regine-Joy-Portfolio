import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function PlaylistPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-[#1e488f]">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/playlist_bg.png')" }}
      />
      
      {/* Left Text */}
      <div className="absolute left-6 md:left-20 lg:left-32 top-[30%] md:top-[40%] -translate-y-1/2 flex flex-col text-[#fbdfe8] z-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-2"
        >
          <span className="font-heading text-xl md:text-3xl font-medium tracking-wide mb-2 md:mb-4">My</span>
          <span className="font-title text-6xl md:text-8xl lg:text-[140px] -mb-2 md:-mb-8 leading-none drop-shadow-md">Girly</span>
        </motion.div>
        <motion.span 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-title text-6xl md:text-8xl lg:text-[140px] ml-8 md:ml-24 -mb-2 md:-mb-4 leading-none drop-shadow-md"
        >
          Girl
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-xl md:text-3xl font-bold tracking-wide mt-2 md:mt-6 ml-24 md:ml-48"
        >
          Playlist
        </motion.span>
      </div>

      {/* Center/Right Content Area */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        
        {/* Pocket */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-[-5%] md:bottom-0 left-[50%] -translate-x-[50%] w-[120%] md:w-[800px] lg:w-[1000px] z-30 pointer-events-auto"
        >
          <div className="relative w-full">
            <img
              src="/images/pantspocket.png?v=2"
              alt="Pocket"
              className="w-full object-cover md:object-contain object-top pointer-events-none"
            />
            {/* Spotify Embed on iPod Screen */}
            <div className="absolute top-[17%] left-[28.5%] w-[43%] h-[42%] overflow-hidden rounded-xl">
              <iframe
                src="https://open.spotify.com/embed/playlist/2OquGdhjhwZ85DzRfrUhM0?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Cat */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-[-5%] right-[5%] md:bottom-0 md:right-[10%] lg:right-[15%] z-40 flex flex-col items-center pointer-events-auto"
        >
          <img
            src="/images/cat.png"
            alt="Cat with headphones"
            className="w-40 md:w-56 lg:w-[300px] object-contain"
          />
        </motion.div>
      </div>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/about')}
        className="absolute top-10 left-10 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

    </div>
  );
}
