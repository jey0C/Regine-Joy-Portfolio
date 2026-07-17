import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-brand-cream py-2 md:py-3 px-6 md:px-16 flex justify-between items-center bg-brand-burgundy/80 backdrop-blur-md shadow-sm border-b border-brand-cream/10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer z-50"
      >
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/images/secondary%20logo.png?v=3" alt="RM Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
      </motion.div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 font-body text-base tracking-wide">
        {navItems.map((item, i) => {
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

      {/* Mobile Menu Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden z-50 p-2 text-brand-cream hover:text-brand-pink transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-brand-burgundy/95 backdrop-blur-lg border-b border-brand-cream/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link 
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-body tracking-wide ${isActive ? 'text-brand-pink' : 'text-brand-cream hover:text-brand-pink'} transition-colors`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-brand-cream text-brand-burgundy px-8 py-3 rounded-full hover:bg-brand-pink hover:text-brand-dark transition-colors duration-300 font-body text-lg"
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
