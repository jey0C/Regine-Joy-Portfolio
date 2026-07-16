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
      
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-brand-cream max-w-2xl lg:-ml-16 xl:-ml-32"
        >
          <h2 className="font-heading text-3xl md:text-4xl mb-2 opacity-90 ml-2 md:ml-6">
            Hey there<span className="font-body">!</span> I am
          </h2>
          <div className="mb-8 relative w-full max-w-[24.2rem] sm:max-w-[495px] md:max-w-[563px] lg:max-w-[660px] drop-shadow-lg">
            <img 
              src="/images/primary logo.png?v=3" 
              alt="Regine Moises" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="font-body font-light text-base md:text-lg leading-relaxed text-brand-cream/90 max-w-[24.2rem] sm:max-w-[495px] md:max-w-[563px] lg:max-w-[660px] mb-6">
            <p className="italic mb-4 font-bold text-[15px] sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl whitespace-nowrap text-brand-pink/90">
              I turn brands into something people can't help but notice.
            </p>
            <p className="opacity-90">
              Think of me as your go-to girl for scroll-stopping visuals from logo design and brand collateral to posters, digital graphics, and video advertisements. I create work that's polished, purposeful, and unmistakably on-brand.
            </p>
          </div>
          
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
