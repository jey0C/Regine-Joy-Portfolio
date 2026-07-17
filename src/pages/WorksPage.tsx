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
      externalLink: 'https://www.canva.com/design/DAHPKOPNZNQ/9XsrNA6fNJ8KT-7GmGHqBg/view?utm_content=DAHPKOPNZNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffdf40b191',
      description: 'This project introduces BMAP\'s A.Y. 2025-2026 Officers through a nostalgic yearbook-style concept, blending polaroid photo cutouts with a scrapbook aesthetic. Each officer is presented in an individual polaroid frame with playful, hand-drawn doodles (stars, hearts, swirls) surrounding their photo, paired with their name and designated role — creating a personal, candid feel that highlights each leader\'s personality alongside their position.\nThe cover page anchors the set with a deep blue textured background and the "BMAP" wordmark rendered in a bold, layered cutout-letter style, alongside "A.Y 2025-2026 Officers" in a mix of clean and script typography. The overall design captures a sense of camaraderie and school-spirit nostalgia, making the officer introduction feel warm and community-driven rather than formal fitting for an org that values connection among its members.',
      popoutImages: [
        '/works/popouts/Bmap-sm/113.png',
        '/works/popouts/Bmap-sm/114.png',
      ]
    },
    { 
      id: 24, 
      title: 'Komersyolympics', 
      category: 'Social Media Assets', 
      image: '/works/thumbnails/komersyolym.png', 
      aspectRatio: 'aspect-video', 
      externalLink: 'https://drive.google.com/drive/folders/15NjSruSOj72OF2BdO_hbCOKY5EHEPK1d?usp=sharing',
      description: 'A bold, arena-inspired visual identity for "COC Day Pamana," a multi-event community competition themed around sports, strategy, and talent. The campaign includes a main key visual and a carousel highlighting six event categories (Basketball, Volleyball, Badminton, eSports, Chess, Speed Cubing), unified through a consistent navy-red-yellow palette, collage-style layouts, and a stadium-graphic wordmark treatment.',
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
      externalLink: 'https://canva.link/rnhs3x1qd9fbcxm',
      description: 'A cohesive teal-and-gold visual identity created for "M-Powered," a seminar themed "Empowering Marketers with Real Estate Strategies & AI Innovations for the Future." The campaign includes a logo mark, countdown/hype posts, a digital invitation, and a speaker announcement graphic , all unified through a consistent emerald-gold palette, elegant typography, and skyline motifs that reflect the real estate theme.',
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
      externalLink: 'https://drive.google.com/drive/folders/10syooEey1IZvt8Kv9MbFyI_PFXyUyYBm?usp=sharing',
      description: 'A monthly recognition graphic series designed for Sun Life financial advisors, celebrating top performers across categories like Top Advisor, Agency Credits, and Lives. Each edition features a premium gold-and-navy aesthetic with elegant serif typography and ribbon/banner accents, alongside a bolder blue-and-gold alternate style giving the brand a flexible but recognizable system for recurring monthly content.',
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
      externalLink: 'https://drive.google.com/drive/folders/1WjsSo88p3TB2pB8yJ7wNAqRIzLXlLNkt?usp=sharing',
      description: 'A vibrant flavor-forward advertising series for Uptown Puffs disposable vapes, featuring a bold main banner ("We Don\'t Smoke, We Puff Clouds") paired with individual product posts for each flavor variant such as Mixed Berries, Bubble Gum, Lemon Cola, and Strawberry Ice Cream. Each graphic uses flavor-matched color grading and fruit/ingredient imagery to make each variant instantly recognizable, while maintaining a consistent smoky, moody brand aesthetic across the series.',
      popoutImages: [
        '/works/popouts/Uptown-Puff/132.png',
        '/works/popouts/Uptown-Puff/133.png',
        '/works/popouts/Uptown-Puff/134.png',
      ]
    },
    { id: 22, title: 'BMAP Shirt', category: 'TShirt', image: '/works/thumbnails/bmap-shirt.png', aspectRatio: 'aspect-video', externalLink: 'https://drive.google.com/file/d/1nW_AbyipCZQw111Fza9N00vwAGNoPTLZ/view?usp=sharing',
      description: "This project is a BMAP merch design featuring a minimalist, streetwear-inspired oversized tee that integrates BMAP's brand colors of blue and red. The front showcases a subtle chest placement with the organization's hand-drawn flower emblem and \"BMAP\" wordmark, while the back features a bold spiral typography design repeating \"Business Management Association of the Philippines\" in the brand's signature blue, converging toward the same red flower mark at its center.\nThe design balances professionalism with approachability using clean blue typography to reflect trust and academic identity, while the organic, hand-drawn lettering style and spiral motif symbolize unity, growth, and the association's continuous cycle of mentorship and leadership. The piece serves as a wearable brand identity for members and events, reinforcing recall through consistent color use and minimalist detailing." },
    { 
      id: 19, 
      title: 'Kumon', 
      category: 'Video Commercials', 
      image: '/works/thumbnails/kumon.png', 
      aspectRatio: 'aspect-video', 
      externalLink: 'https://www.facebook.com/jeheyms.argel/videos/adfest20-3rd-place-best-tv-ad-3rd-place-best-director3rd-place-best-taglineon-be/1761365211469371/',
      description: 'The Kumon advertisement highlights the journey of a child learning through Kumon’s globally trusted education method. The concept follows a child’s growth from learning basic shapes and numbers to building foundational math skills, emphasizing that meaningful progress comes from small, consistent steps.\n\nI developed the creative concept and storyboard for the advertisement and supported the production and execution of the campaign. The story focuses on how patience, guidance, and continuous practice help children grow not only academically but also in confidence. Through Kumon’s step-by-step learning approach, the campaign reinforces the message that strong foundations lead to bigger opportunities in the future because “Where Big Dreams Begin” starts with small steps.\n\nThe campaign was recognized at Adfest 2025, receiving 3rd Place Best Video Advertisement and 3rd Place Best Tagline.',
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
      externalLink: 'https://drive.google.com/file/d/1qQptiCfzXVvq4QO9R8FI1iMeINWghWSt/view?usp=sharing',
      description: 'This advertisement campaign highlights the everyday challenges and triumphs students face throughout their academic journey, capturing real, relatable moments of struggle and growth. The campaign showcases how Rex Higher Education supports students through these experiences, providing the resources, guidance, and encouragement they need to succeed.\n\nI served as the director for this project, leading the creative direction from concept to execution. My contributions included developing the creative concept, storyboarding the narrative, and overseeing the overall conceptualization of the campaign, ensuring the final message was relatable, engaging, and inspiring for the student audience.\n\nThis project reflects my ability to lead a creative vision from the ground up, combining storytelling, visual planning, and direction to bring a brand\'s message to life.',
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
      externalLink: 'https://www.facebook.com/iloilosupermart/videos/to-the-one-who-has-always-been-there-thank-you-mom-for-your-endless-love-guidanc/1403423417516387/',
      description: 'This video advertisement is inspired by a simple memory from my childhood going grocery shopping with my mom. What once felt like a routine errand became one of the small moments that shaped how I see care, responsibility, and family.\n\nI directed and developed the creative concept and storyboard for the campaign, which served as a tribute to these unnoticed moments of love and responsibility and contributed to the team’s 1st Place win at the Council of Management Educators and Professionals in the Philippines, Inc. 29th Visayas Conference Video Advertisement Competition.',
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
      externalLink: 'https://drive.google.com/drive/folders/1ZCH2xBbKqfReHVliMRRVe_79WNjidcsM?usp=sharing',
      description: 'The BMAP Sticker Pack is a custom merchandising project distributed as a welcoming giveaway during the College of Business orientation. Featuring milestones ranging from freshman year to senior year, the stickers are designed to accompany business and marketing students throughout their entire college journey, using a mix of official branding, motivational slogans, and relatable student humor to foster long-term school pride.',
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
      externalLink: 'https://drive.google.com/drive/folders/1C95ZR9hXJsSg93flrBDJIzDLsr_WQS8n?usp=sharing',
      description: 'The Iloilo 360 Video Booth Flyer Suite is a cohesive marketing catalog showcasing five distinct event activation and photo booth packages. By balancing a sleek, dark canvas with bold, package-specific color coding (orange, teal, gold, magenta, and red) and retro wavy borders, the design establishes high visual hierarchy. The layout pairs action-packed event samples with crystal-clear rate sheets and localized contact channels, providing an efficient, highly professional booking tool for potential clients.',
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
      externalLink: 'https://drive.google.com/drive/folders/1vuQasJTRLCQE-ukjnlgWx8obAzCPKIxu?usp=sharing',
      description: 'The Jump-n-Slide Playground Catalog Suite is a vibrant, two-tier marketing and rate sheet design created for a mobile inflatable playground rental business in Iloilo. Separating inventory into Basic and Premium categories, the layout utilizes an easy-to-read grid system to detail pricing, sizing, and capacities. By wrapping essential logistical data in a cheerful sky-blue and yellow aesthetic, and highlighting standard freebies with clean product photography, the flyers serve as a clear, highly effective booking conversion tool for parents and event organizers.',
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
      externalLink: 'https://canva.link/kalanphmenu2026',
      description: 'The Kalan.PH Menu Design is a comprehensive visual layout created for a homegrown burger and chicken sandwich restaurant in Jaro, Iloilo City. Utilizing a clean cream background accented by bold black typography and energetic pops of yellow, the menu successfully organizes a diverse selection of comfort food, specialty lattes, and desserts. By pairing a structured, easy-to-read layout with high-quality, vibrant food photography, the final design creates a professional and highly appetizing brand experience for local diners.',
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
      externalLink: 'https://canva.link/ii59j786jppq3r3',
      description: 'This data-driven research project tracks, compares, and analyzes the retail pricing of fresh and frozen fish across major supermarket chains over a defined observation period. By gathering real-time pricing data and normalizing it into standard units (such as price per kilogram), the project aims to identify price volatility, evaluate competitive supermarket pricing strategies, and uncover localized consumer cost trends.\n\nVisually, the presentation is designed around an ocean-inspired color palette, utilizing light blues, deep aquas, and clean tones to give the slides a fresh look that aligns seamlessly with the project. The final deliverables include a structured dataset, comparative data visualizations, and a concise analytical report detailing key market insights for consumers and retail stakeholders.',
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
      externalLink: 'https://canva.link/vnnn3ea3k20d7hc',
      description: 'This academic presentation examines the critical challenges, current trends, and systemic drivers of global food insecurity. It provides a comprehensive analysis of the four pillars of food security availability, access, utilization, and stability—while evaluating the modern impacts of climate change, geopolitical conflict, and economic inflation on vulnerable populations.\n\nTo emphasize the global importance of this study and maintain academic rigor, the slide presentation explicitly incorporates the official color palette of the United Nations Sustainable Development Goals (SDGs), visually aligning the research directly with SDG 2 (Zero Hunger) and its interconnected targets. The project concludes with data-driven projections and a review of technological innovations in precision agriculture that offer pathways toward a more resilient global food system.',
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
      externalLink: 'https://canva.link/n8yezxjjoqvxsfd',
      description: 'This operational case study observes and evaluates the end-to-end business operations of Huzon’s Candle Business, a holistic psychological wellness hub in Iloilo. The project focuses on mapping their unique "candle-making therapy" production model, analyzing how artisanal manufacturing processes (such as precision temperature control, scent loading, and curing) blend with community mental wellness workshops. The final report assesses their raw material supply chain, quality assurance standards, inventory bottlenecks, and eco-friendly distribution logistics.\n\nVisually, the presentation is anchored in a high-end, editorial wellness aesthetic, utilizing a bone-white backdrop, earthy taupe accents, and deep charcoal typography to evoke a sense of premium, structured calm. The final deliverables include automated capacity models, comparative manufacturing datasets, and a polished strategic audit designed to demonstrate operational excellence to retail stakeholders and recruiters.',
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
      externalLink: 'https://canva.link/4xwuge615gxud1i',
      description: 'Kommute is a mobile application proposal designed to improve the daily transit experience for Ilonggo commuters through real-time jeepney tracking. The app allows users to monitor jeepney locations, estimate arrival times, and view route maps, bringing modern digital convenience to Iloilo City\'s traditional transport system.\n\nThe project identity utilizes a strategic color palette of orange, navy blue, and white. Orange signifies the vibrant energy of Iloilo\'s streets and provides high visibility. Navy Blue establishes professional trust and technological reliability. White ensures a clean, high-contrast user interface for effortless readability during daily commutes.',
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
      externalLink: 'https://canva.link/ciueyvrl3lfvter',
      description: 'MPowered is a student-led seminar designed as a course project for Events Management. Created by and for future marketing professionals, this event aims to bridge the gap between academic theory and real-world industry practice.\nAs the Marketing Head for this project, I am leading the end-to-end strategic planning, promotional campaigns, and brand positioning for the seminar. The event features an elite lineup of guest speakers who are seasoned industry experts. Through "MPowered," our team manages real-world corporate event logistics, budgeting, and speaker relations, while the marketing committee drives audience acquisition, digital engagement, and public relations to empower the next generation of marketers.\n\nVisually, the presentation is anchored in a corporate tech-forward aesthetic, utilizing a striking teal and deep aqua color palette accented with sharp gold geometric ribbons to project an aura of professional excellence and leadership. The final deliverables integrate clean corporate typography, high-contrast speaker spotlights, and a structured marketing blueprint designed to demonstrate public relations mastery and corporate readiness to prospective employers and industry stakeholders.',
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
      externalLink: 'https://canva.link/2h4hkdpkmq7xs07',
      description: 'Nexu is an NFC and QR-enabled smart business card ecosystem designed to streamline professional networking by replacing paper cards with instant, digital contact sharing.\nThis presentation was specifically developed and optimized for a business plan pitching competition to demonstrate the product\'s market viability, revenue model, and scalability to panel judges.\n\nThe visual identity leverages a premium, tech-forward color strategy Black and White serve as the primary colors to establish a sophisticated, minimalist, and highly professional foundation. Vibrant Blue and Pink act as sharp accent colors to inject modern tech energy, highlight critical financial metrics, and maintain audience engagement.',
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
      externalLink: 'https://canva.link/kp0c5ohfxcl0kx1',
      description: 'This presentation explores accessible healthcare by breaking down one of Sun Life\'s basic insurance plans into simple, practical terms. It demonstrates how individuals can secure their health and wellness effectively without financial strain.\n\nVisually, the deck strictly incorporates Sun Life\'s official brand colors to reinforce credibility and trust. Vibrant Yellow reflects optimism and a bright future, aligning with the "sun" theme. Deep Blue provides a professional, stable contrast that represents financial security and corporate reliability.',
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
      externalLink: 'https://canva.link/vridhwunfghwzzh',
      description: 'This research presentation investigates the influence of TikTok product reviews on the purchasing decisions of college students in Iloilo City. To maintain thematic consistency and visual cohesion, I specifically incorporated TikTok’s signature brand colors into the design, aligning the slide aesthetics directly with the digital platform being studied.\nThe project analyzes key factors such as influencer credibility, expertise, and relatability to provide localized data and marketing insights specific to the Iloilo youth demographic. The presentation details the study\'s methodology, data-driven findings, and their implications for the future of creator-led marketing.',
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
          <h2 className="font-heading font-bold text-2xl md:text-[34px] text-brand-burgundy mb-6 -ml-1 md:-ml-2">Do you want the</h2>
          <h1 className="font-title text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] text-brand-burgundy leading-[0.85] mb-10 -ml-1 md:-ml-2">Portfolio Tour<span className="font-heading italic">?</span></h1>
          <p className="font-subheading italic font-light text-xl md:text-2xl opacity-80 max-w-2xl text-brand-burgundy">
            Step inside and take a look around at my presentation designs, social media assets, and many more.
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
