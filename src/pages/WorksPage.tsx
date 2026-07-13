import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';

const CATEGORIES = ['All', 'Posters', 'Presentations', 'Social Media Assets', 'Stickers', 'TShirt', 'Video Commercials'];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const location = useLocation();

  const allProjects = [
    { 
      id: 23, 
      title: 'BMAP', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/bmap-1.png', 
      aspectRatio: 'aspect-video', 
      description: 'A cohesive set of social media graphics designed to boost online engagement and brand visibility for BMAP, featuring dynamic layouts and bold typography.',
      popoutImages: [
        '/works/popouts/Bmap-sm/113.png',
        '/works/popouts/Bmap-sm/114.png',
      ]
    },
    { 
      id: 24, 
      title: 'Komersyolym', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/komersyolym.png', 
      aspectRatio: 'aspect-video', 
      description: 'Vibrant promotional materials for Komersyolym, tailored for social media platforms to drive event awareness and participant registration.',
      popoutImages: [
        '/works/popouts/Komersyolym/117.png',
        '/works/popouts/Komersyolym/118.png',
      ]
    },
    { 
      id: 25, 
      title: 'Mpowered', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/mpowered-sm.png', 
      aspectRatio: 'aspect-video', 
      description: 'Strategic social media content for Mpowered, crafted to communicate empowering messages through clean, impactful visual design.',
      popoutImages: [
        '/works/popouts/Mpowered-sm/127.png',
        '/works/popouts/Mpowered-sm/128.png',
        '/works/popouts/Mpowered-sm/129.png',
      ]
    },
    { 
      id: 26, 
      title: 'Sunlife', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/sunlife-sm.png', 
      aspectRatio: 'aspect-video', 
      description: 'Engaging digital assets for Sunlife, focusing on financial literacy and brand trust through approachable and professional aesthetics.',
      popoutImages: [
        '/works/popouts/Sunlife-sm/121.png',
        '/works/popouts/Sunlife-sm/122.png',
        '/works/popouts/Sunlife-sm/123.png',
        '/works/popouts/Sunlife-sm/124.png',
      ]
    },
    { 
      id: 27, 
      title: 'Uptown Puff', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/uptown-puff.png', 
      aspectRatio: 'aspect-video', 
      description: 'Eye-catching and trendy social media visuals for Uptown Puff, highlighting product appeal with a modern and stylish flair.',
      popoutImages: [
        '/works/popouts/Uptown-Puff/132.png',
        '/works/popouts/Uptown-Puff/133.png',
        '/works/popouts/Uptown-Puff/134.png',
      ]
    },
    { id: 22, title: 'BMAP Shirt', category: 'TShirt', image: '/works/thumbnails/bmap-shirt.png', aspectRatio: 'aspect-video', description: "Custom apparel design for BMAP, translating the brand's identity into a wearable piece that resonates with the community." },
    { 
      id: 19, 
      title: 'Kumon', 
      category: 'Video Commercials', 
      image: '/works/thumbnails/kumon.png', 
      aspectRatio: 'aspect-video', 
      description: 'A compelling video commercial for Kumon, showcasing the joy of learning and academic excellence through dynamic storytelling.',
      popoutImages: [
        '/works/popouts/Kumon/98.png',
        '/works/popouts/Kumon/99.png',
        '/works/popouts/Kumon/100.png',
      ]
    },
    { 
      id: 20, 
      title: 'Rex x Schoology', 
      category: 'Video Commercials', 
      image: '/works/thumbnails/rex-x-schoology.png', 
      aspectRatio: 'aspect-video', 
      description: 'An informative and engaging video advertisement highlighting the partnership between Rex and Schoology, emphasizing seamless educational solutions.',
      popoutImages: [
        '/works/popouts/Rex-X-Schoology/103.png',
        '/works/popouts/Rex-X-Schoology/104.png',
        '/works/popouts/Rex-X-Schoology/105.png',
      ]
    },
    { 
      id: 21, 
      title: 'Iloilo Supermart', 
      category: 'Video Commercials', 
      image: '/works/thumbnails/iloilo-supermart.png', 
      aspectRatio: 'aspect-video', 
      description: 'A vibrant commercial for Iloilo Supermart, capturing the essence of local community shopping with lively visuals and a welcoming tone.',
      popoutImages: [
        '/works/popouts/Iloilo-Supermart/93.png',
        '/works/popouts/Iloilo-Supermart/94.png',
        '/works/popouts/Iloilo-Supermart/95.png',
      ]
    },
    { 
      id: 18, 
      title: 'BMAP', 
      category: 'Stickers', 
      image: '/works/thumbnails/BMAP.png', 
      aspectRatio: 'aspect-video', 
      description: 'A collection of fun, brand-centric stickers for BMAP, perfect for physical and digital expression, enhancing community connection.',
      popoutImages: [
        '/works/popouts/Bmap-Sticker/86.png',
        '/works/popouts/Bmap-Sticker/87.png',
        '/works/popouts/Bmap-Sticker/88.png',
        '/works/popouts/Bmap-Sticker/89.png',
      ]
    },
    { 
      id: 15, 
      title: 'Iloilo 360', 
      category: 'Posters', 
      image: '/works/thumbnails/iloilo-360.png', 
      aspectRatio: 'aspect-video', 
      description: 'An immersive poster design for Iloilo 360, utilizing striking imagery to showcase the rich culture and destinations of the region.',
      popoutImages: [
        '/works/popouts/Iloilo360/71.png',
        '/works/popouts/Iloilo360/72.png',
        '/works/popouts/Iloilo360/73.png',
        '/works/popouts/Iloilo360/74.png',
        '/works/popouts/Iloilo360/75.png',
        '/works/popouts/Iloilo360/76.png',
      ]
    },
    { 
      id: 16, 
      title: 'Jump n Slide', 
      category: 'Posters', 
      image: '/works/thumbnails/jump-n-slide.png', 
      aspectRatio: 'aspect-video', 
      description: 'A playful and energetic poster for Jump n Slide, designed to attract families and kids with bright colors and exciting graphics.',
      popoutImages: [
        '/works/popouts/Jump-N-Slide/79.png',
        '/works/popouts/Jump-N-Slide/80.png',
        '/works/popouts/Jump-N-Slide/81.png',
        '/works/popouts/Jump-N-Slide/82.png',
      ]
    },
    { 
      id: 17, 
      title: 'Kalan', 
      category: 'Posters', 
      image: '/works/thumbnails/kalan.png', 
      aspectRatio: 'aspect-video', 
      description: 'A visually rich poster for Kalan, celebrating culinary heritage through warm tones and appetizing visual compositions.',
      popoutImages: [
        '/works/popouts/Kalan/62.png',
        '/works/popouts/Kalan/63.png',
        '/works/popouts/Kalan/64.png',
        '/works/popouts/Kalan/65.png',
        '/works/popouts/Kalan/66.png',
        '/works/popouts/Kalan/67.png',
        '/works/popouts/Kalan/68.png',
      ]
    },
    { 
      id: 7, 
      title: 'Catch of the day', 
      category: 'Presentations', 
      image: '/works/thumbnails/catch.png', 
      aspectRatio: 'aspect-video', 
      description: 'A comprehensive presentation deck analyzing fish price monitoring, employing clear data visualization and a cohesive nautical theme.',
      popoutImages: [
        '/works/popouts/CatchofTheDay/34.png',
        '/works/popouts/CatchofTheDay/35.png',
        '/works/popouts/CatchofTheDay/36.png',
        '/works/popouts/CatchofTheDay/37.png',
        '/works/popouts/CatchofTheDay/38.png',
      ]
    },
    { 
      id: 8, 
      title: 'Global Food Security', 
      category: 'Presentations', 
      image: '/works/thumbnails/globalfood.png', 
      aspectRatio: 'aspect-video', 
      description: 'An impactful presentation addressing global food security, using compelling infographics and structured layouts to convey critical information.',
      popoutImages: [
        '/works/popouts/GlobalFoodSec/48.png',
        '/works/popouts/GlobalFoodSec/49.png',
        '/works/popouts/GlobalFoodSec/50.png',
        '/works/popouts/GlobalFoodSec/51.png',
        '/works/popouts/GlobalFoodSec/52.png',
      ]
    },
    { 
      id: 9, 
      title: 'Huzons', 
      category: 'Presentations', 
      image: '/works/thumbnails/huzons.png', 
      aspectRatio: 'aspect-video', 
      description: 'A professional and sleek presentation design for Huzons, outlining corporate strategies with clarity and modern minimalism.',
      popoutImages: [
        '/works/popouts/Huzons/20.png',
        '/works/popouts/Huzons/21.png',
        '/works/popouts/Huzons/22.png',
        '/works/popouts/Huzons/23.png',
        '/works/popouts/Huzons/24.png',
      ]
    },
    { 
      id: 10, 
      title: 'Kommute', 
      category: 'Presentations', 
      image: '/works/thumbnails/kommute.png', 
      aspectRatio: 'aspect-video', 
      description: 'An intuitive pitch deck for Kommute, illustrating a seamless transportation solution through engaging visuals and user-centric design.',
      popoutImages: [
        '/works/popouts/Kommute/27.png',
        '/works/popouts/Kommute/28.png',
        '/works/popouts/Kommute/29.png',
        '/works/popouts/Kommute/30.png',
        '/works/popouts/Kommute/31.png',
      ]
    },
    { 
      id: 11, 
      title: 'Mpowered', 
      category: 'Presentations', 
      image: '/works/thumbnails/mpowered.png', 
      aspectRatio: 'aspect-video', 
      description: 'An empowering presentation layout for Mpowered, utilizing bold typography and inspiring imagery to effectively deliver their core message.',
      popoutImages: [
        '/works/popouts/Mpowered/55.png',
        '/works/popouts/Mpowered/56.png',
        '/works/popouts/Mpowered/57.png',
        '/works/popouts/Mpowered/58.png',
      ]
    },
    { 
      id: 12, 
      title: 'Nexu', 
      category: 'Presentations', 
      image: '/works/thumbnails/nexu.png', 
      aspectRatio: 'aspect-video', 
      description: 'A cutting-edge presentation for Nexu, featuring futuristic design elements and sharp layouts to present technological innovations.',
      popoutImages: [
        '/works/popouts/Nexu/6.png',
        '/works/popouts/Nexu/7.png',
        '/works/popouts/Nexu/8.png',
        '/works/popouts/Nexu/9.png',
        '/works/popouts/Nexu/10.png',
      ]
    },
    { 
      id: 13, 
      title: 'Sunlife', 
      category: 'Presentations', 
      image: '/works/thumbnails/sunlife.png', 
      aspectRatio: 'aspect-video', 
      description: 'A well-structured corporate presentation for Sunlife, focusing on financial concepts with clear, professional, and trustworthy visual aids.',
      popoutImages: [
        '/works/popouts/Sunlife/13.png',
        '/works/popouts/Sunlife/14.png',
        '/works/popouts/Sunlife/15.png',
        '/works/popouts/Sunlife/16.png',
        '/works/popouts/Sunlife/17.png',
      ]
    },
    { 
      id: 14, 
      title: 'Tiktok', 
      category: 'Presentations', 
      image: '/works/thumbnails/tiktok.png', 
      aspectRatio: 'aspect-video',
      description: "A comprehensive presentation focusing on TikTok's platform strategies. The design utilizes the brand's signature aesthetic to deliver insights effectively.",
      popoutImages: [
        '/works/popouts/tiktok/41.png',
        '/works/popouts/tiktok/42.png',
        '/works/popouts/tiktok/43.png',
        '/works/popouts/tiktok/44.png',
        '/works/popouts/tiktok/45.png',
      ]
    },
  ];

  useEffect(() => {
    if (location.state?.selectedProjectTitle) {
      const project = allProjects.find(
        p => p.title === location.state.selectedProjectTitle && 
        (!location.state.selectedProjectCategory || p.category === location.state.selectedProjectCategory)
      );
      if (project) {
        setSelectedProject(project);
        // Clear state so it doesn't reopen if user navigates back
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  const shuffledAllProjects = useMemo(() => {
    return [...allProjects].sort(() => Math.random() - 0.5);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? shuffledAllProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-brand-cream text-brand-dark border-t border-brand-burgundy/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 pt-8"
        >
          <h2 className="font-heading font-bold text-2xl md:text-[34px] text-brand-burgundy mb-2 -ml-1 md:-ml-2">Do you want the</h2>
          <h1 className="font-title text-[5.5rem] md:text-[9rem] text-brand-burgundy leading-[0.75] mb-4 -ml-2 md:-ml-4">Portfolio<br/>Tour</h1>
          <p className="font-subheading italic font-light text-xl md:text-2xl opacity-80 max-w-2xl text-brand-burgundy">
            A comprehensive look at my design journey, exploring brand identities, digital experiences, and visual storytelling.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12 font-body"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-burgundy text-brand-cream'
                  : 'bg-transparent text-brand-burgundy border border-brand-burgundy/30 hover:border-brand-burgundy/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-full ${project.aspectRatio} ${project.imageClass || 'bg-brand-cream/10'} rounded-xl mb-4 overflow-hidden relative backdrop-blur-sm border border-brand-burgundy/10 shadow-md`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                      {index % 2 === 0 ? (
                         <div className="font-title text-6xl text-brand-burgundy/40">RM</div>
                      ) : (
                         <div className="w-24 h-24 rounded-full border-[8px] border-brand-burgundy/20 flex items-center justify-center">
                            <div className="text-2xl text-brand-burgundy/30">✦</div>
                         </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center px-2">
                  <h3 className="font-heading text-xl">{project.title}</h3>
                  <span className="font-body text-xs tracking-widest uppercase text-brand-burgundy/80">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
