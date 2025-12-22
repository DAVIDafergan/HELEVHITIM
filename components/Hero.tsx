import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden" id="home">
      {/* Parallax Background - Updated to image 27 */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img 
          src="/images/gallery/27.jpg"
          alt="רקע ממלכת התורה והחסד" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('27.JPG')) target.src = "/images/gallery/27.JPG";
          }}
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/70 via-royal-900/50 to-royal-900/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Ornamental Top Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 md:mb-6 text-gold-400 opacity-90"
        >
          <Sparkles size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
          <h2 className="text-gold-200 font-sans font-medium text-base md:text-xl tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 shadow-sm whitespace-nowrap">
            מוסדות חלב חיטים
          </h2>
          <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white font-serif text-5xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-8 leading-[1.1] md:leading-none tracking-tight drop-shadow-2xl mt-8"
        >
          ממלכת התורה
          <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient font-medium italic pr-2">
            והחסד
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-100 text-lg md:text-2xl max-w-xl md:max-w-2xl mb-10 md:mb-12 font-normal tracking-wide leading-relaxed drop-shadow-md px-4"
        >
          ממשיכים את המורשת, בונים עתיד.
          <br className="hidden md:block" />
          הצטרפו להצלחה של אימפריית התורה בטירת כרמל.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a 
            href="#activities" 
            onClick={(e) => handleScrollTo(e, '#activities')}
            className="group relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 overflow-hidden font-serif font-medium tracking-tighter text-white bg-transparent border-2 border-gold-400/70 rounded-none transition-all duration-300 hover:bg-royal-900/60 backdrop-blur-sm hover:border-gold-400"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gold-400 rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
            <span className="relative text-gold-100 group-hover:text-white transition-colors duration-300 text-lg md:text-xl tracking-widest font-bold">צפו בעשייה</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-gold-400 cursor-pointer"
        onClick={(e) => {
            const el = document.getElementById('about');
            if(el) el.scrollIntoView({ behavior: 'smooth'});
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={2} className="md:w-10 md:h-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;