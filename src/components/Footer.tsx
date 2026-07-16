import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-20 relative overflow-hidden">
      {/* Decorative lace top border */}
      <div className="absolute top-0 left-0 right-0 h-4 flex" style={{
        backgroundImage: 'radial-gradient(circle at 10px 0, transparent 10px, var(--color-brand-burgundy) 11px)',
        backgroundSize: '20px 10px',
        backgroundRepeat: 'repeat-x'
      }}></div>

      <div className="container mx-auto px-6 lg:px-16 max-w-6xl text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left Side: Branding & CTA */}
        <div className="max-w-md">
          <h2 className="font-title text-6xl md:text-7xl mb-4 text-brand-pink">Let's Connect</h2>
          <p className="font-subheading italic text-lg opacity-80 mb-8">
            Have a project in mind, or just want to say hi? I'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-pink text-brand-dark px-8 py-3 rounded-full font-normal font-medium tracking-wide hover:bg-brand-cream transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-16 font-heading">
          <div>
            <h4 className="text-brand-pink mb-4 text-xl">Socials</h4>
            <ul className="space-y-2 opacity-80 font-normal font-light">
              <li><a href="https://www.facebook.com/regina.moises.98" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink hover:underline transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/its.me.joy28/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink hover:underline transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/regine-moises-3633412a1/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink hover:underline transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-pink mb-4 text-xl">Menu</h4>
            <ul className="space-y-2 opacity-80 font-normal font-light">
              <li><Link to="/" className="hover:text-brand-pink transition-colors">Home</Link></li>
              <li><Link to="/works" className="hover:text-brand-pink transition-colors">Works</Link></li>
              <li><Link to="/about" className="hover:text-brand-pink transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-brand-cream/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-title text-3xl opacity-50">Regine Moises</p>
        <p className="font-normal text-sm font-light opacity-60">© {new Date().getFullYear()} Regine Moises. All rights reserved.</p>
      </div>
      
      {/* Background large monogram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-title text-[30rem] leading-none text-brand-cream/5 pointer-events-none select-none">
        RM
      </div>
    </footer>
  );
}
