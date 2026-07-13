import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-brand-cream py-2 md:py-3 px-8 md:px-16 flex justify-between items-center bg-brand-burgundy/80 backdrop-blur-md shadow-sm border-b border-brand-cream/10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer"
      >
        <Link to="/">
          <img src="/images/secondary%20logo.png?v=3" alt="RM Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
      </motion.div>
      
      <nav className="hidden md:flex items-center gap-10 font-body text-base tracking-wide">
        {[
          { name: 'Home', path: '/' },
          { name: 'Works', path: '/works' },
          { name: 'About', path: '/about' }
        ].map((item, i) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * (i + 1) }}
            >
              <Link 
                to={item.path}
                className={`${isActive ? 'text-brand-pink after:w-full' : 'hover:text-brand-pink after:w-0 hover:after:w-full'} transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-brand-pink after:transition-all`}
              >
                {item.name}
              </Link>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to="/contact"
            className="bg-brand-cream text-brand-burgundy px-6 py-2 rounded-full hover:bg-brand-pink hover:text-brand-dark transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}
