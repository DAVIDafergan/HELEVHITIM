import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // הגדרת לינק התרומה החדש
  const DONATE_URL = "https://causematch.com/chelev-chitim";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#home' || href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-royal-900/90 backdrop-blur-md shadow-luxury py-3 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Right: Logo - Updated to image 23 in gallery folder */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center group relative z-50">
           <img 
             src="/images/gallery/23.jpg" 
             alt="לוגו מוסדות חלב חיטים" 
             className={`transition-all duration-700 object-contain drop-shadow-md rounded-full filter ${
               isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'
             }`}
             onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('23.JPG')) target.src = "/images/gallery/23.JPG";
             }}
           />
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 space-x-reverse">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative group py-2"
            >
              <span className={`text-sm tracking-widest uppercase transition-colors duration-300 font-medium ${
                isScrolled ? 'text-gray-300 group-hover:text-gold-400' : 'text-white/90 group-hover:text-white'
              }`}>
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
          ))}
        </nav>

        {/* Left: Donate Button & Mobile Toggle */}
        <div className="flex items-center space-x-6 space-x-reverse">
          <motion.a 
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-3 py-2 px-6 rounded-sm border transition-all duration-300 ${
              isScrolled 
                ? 'border-gold-400/30 bg-gold-400/10 text-gold-400 hover:bg-gold-400 hover:text-royal-900' 
                : 'border-white/30 bg-white/10 text-white hover:bg-white hover:text-royal-900'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-bold tracking-wider uppercase">תרומה אונליין</span>
            <HeartHandshake size={16} />
          </motion.a>

          <button 
            className="md:hidden text-gold-400 hover:text-white transition-all duration-300 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-royal-900 z-40 flex flex-col items-center justify-center space-y-8"
        >
          {NAV_ITEMS.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="text-white text-3xl font-serif font-light hover:text-gold-400 transition-colors"
              onClick={(e) => handleScrollTo(e, item.href)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a 
            href={DONATE_URL}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-gold-gradient text-royal-900 font-bold text-xl py-4 px-12 rounded-full shadow-gold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            תרומה אונליין
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Header;