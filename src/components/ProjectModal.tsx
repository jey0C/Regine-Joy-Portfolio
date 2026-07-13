import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const images = project.popoutImages && project.popoutImages.length > 0 
    ? project.popoutImages 
    : [project.image];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-end justify-center pt-12 md:pt-24 px-4 bg-brand-burgundy/90 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[95vw] xl:max-w-[1600px] h-[95vh] md:h-[90vh] bg-brand-cream rounded-t-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close button for mobile (absolute top right) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-brand-burgundy/60 hover:text-brand-burgundy bg-brand-cream/80 backdrop-blur-sm rounded-full md:hidden"
          >
            <X size={24} />
          </button>

          {/* Left: Image Carousel */}
          <div className="w-full h-[45vh] md:h-auto md:w-[65%] lg:w-2/3 bg-black/5 relative group flex items-center justify-center flex-shrink-0">
            <img 
              src={images[currentImageIndex]} 
              alt={`${project.title} - image ${currentImageIndex + 1}`} 
              className="w-full h-full object-contain p-4 md:p-8"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-[35%] lg:w-1/3 p-6 md:p-12 flex flex-col relative overflow-y-auto flex-1">
            {/* Close button for desktop */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 hidden md:block text-brand-burgundy/40 hover:text-brand-burgundy transition-colors"
            >
              <X size={28} />
            </button>

            <div className="mt-4 md:mt-8">
              <h2 className="font-heading text-4xl md:text-[3.5rem] text-[#301014] leading-tight mb-2">{project.title}</h2>
              <p className="font-subheading text-[#301014]/70 text-xl mb-8">{project.category}</p>
              
              <div className="prose prose-brand-burgundy max-w-none font-body text-[#301014]/90 mb-8 text-base md:text-lg">
                {project.description ? (
                  project.description.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p>Project Overview here<br/>A detailed look into the creative process and execution of this project. Focusing on conveying the core message effectively through thoughtful design and layout.</p>
                )}
              </div>

              <button className="bg-[#301014] hover:bg-brand-burgundy text-white font-heading font-medium tracking-wide py-3 px-8 rounded-full transition-colors inline-block mt-auto self-start">
                View this work
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
