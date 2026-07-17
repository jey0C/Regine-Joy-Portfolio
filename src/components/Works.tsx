import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Works() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
  }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 })
  ]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) {
      autoScroll.stop();
      emblaApi.scrollPrev();
      setTimeout(() => autoScroll.play(), 500);
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) {
      autoScroll.stop();
      emblaApi.scrollNext();
      setTimeout(() => autoScroll.play(), 500);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const projects = [
    { id: 1, title: 'Nexu', category: 'Presentations', image: '/works/thumbnails/nexu.png' },
    { id: 2, title: 'BMAP', category: 'Social Media Assets', image: '/works/thumbnails/bmap-1.png' },
    { id: 3, title: 'Iloilo Supermart', category: 'Video Commercials', image: '/works/thumbnails/iloilo-supermart.png' },
    { id: 4, title: 'BMAP', category: 'Stickers', image: '/works/thumbnails/BMAP.png' },
    { id: 5, title: 'BMAP Shirt', category: 'TShirt', image: '/works/thumbnails/bmap-shirt.png' },
  ];

  return (
    <section id="works" className="py-24 bg-brand-burgundy text-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <h2 className="font-title text-[2.5rem] md:text-5xl lg:text-6xl text-brand-pink mb-4 leading-tight">Things I've Loved Making</h2>
            <p className="font-subheading italic font-light text-lg md:text-xl opacity-90 max-w-2xl">A little showcase of the designs I've enjoyed creating, from presentations to social media assets, and so much more</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-brand-pink/50 flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-brand-burgundy transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-brand-pink/50 flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-brand-burgundy transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <Link to="/works" className="border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-burgundy px-6 py-2 rounded-full font-body text-sm transition-colors duration-300 whitespace-nowrap">
              View All
            </Link>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex py-4 -ml-6 md:-ml-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 pl-6 md:pl-8"
                >
                  <Link 
                    to="/works" 
                    state={{ selectedProjectTitle: project.title, selectedProjectCategory: project.category }}
                    className="group block"
                  >
                    {/* Project Image Container */}
                    <div 
                      className={`w-full aspect-video bg-brand-cream/10 rounded-sm relative overflow-hidden mb-6 shadow-xl`}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                      />

                      {/* Decorative overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      
                      {/* Simulated frame / vintage romance look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
                      
                      <div className="absolute inset-3 border border-white/30 rounded-sm pointer-events-none mix-blend-overlay" />
                      <div className="absolute inset-4 border-[0.5px] border-white/40 rounded-sm pointer-events-none mix-blend-overlay" />
                    </div>
                    
                    {/* Project Details */}
                    <div className="flex justify-between items-start px-2">
                      <h3 className="font-heading text-2xl group-hover:text-brand-pink transition-colors">{project.title}</h3>
                      <span className="font-body text-xs mt-2 tracking-widest uppercase text-brand-pink/80 whitespace-nowrap ml-4">{project.category}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative star shape */}
      <motion.div 
        animate={{ rotate: 180 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-40 right-10 md:right-20 pointer-events-none opacity-20"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-brand-pink fill-current">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </motion.div>
    </section>
  );
}
