import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-burgundy flex items-center justify-center overflow-hidden pt-20">
      {/* Polka dot background pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-brand-dark) 3px, transparent 3px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-brand-cream max-w-2xl"
        >
          <h2 className="font-heading text-3xl md:text-4xl mb-2 opacity-90 ml-2 md:ml-6">
            Hey there<span className="font-body">!</span> I am
          </h2>
          <div className="mb-8 relative w-full max-w-[22rem] sm:max-w-md md:max-w-lg lg:max-w-[600px] drop-shadow-lg -ml-2 md:-ml-4">
            <img 
              src="/images/primary logo.png?v=3" 
              alt="Regine Moises" 
              className="w-full h-auto scale-110 origin-left"
            />
          </div>
          
          <p className="font-body font-light text-lg md:text-xl leading-relaxed text-brand-cream/80 max-w-md">
            I create visual identities, campaigns and digital assets that help brands communicate their story with clarity, warmth, and beauty.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 font-body">
            <Link 
              to="/works" 
              className="bg-brand-cream text-brand-burgundy px-8 py-3 rounded-full hover:bg-brand-pink hover:text-brand-dark transition-all duration-300 shadow-md transform hover:-translate-y-1"
            >
              View My Works
            </Link>
            <Link 
              to="/contact" 
              className="border border-brand-cream text-brand-cream px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Heart Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center items-center relative hidden lg:flex"
        >
          <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
            <img 
              src="/images/heart_pic.png" 
              alt="Regine Moises" 
              className="w-full h-auto drop-shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative bottom wavy edge or lace could go here */}
    </section>
  );
}
