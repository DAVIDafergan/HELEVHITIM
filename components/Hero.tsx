import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const [showSticky, setShowSticky] = useState(false);
  const CAUSEMATCH_URL = "https://causematch.com/chelev-chitim/549930";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // שליטה על הופעת הכפתור הצף לאחר גלילה
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* סקציית הסרטון המרכזית */}
      <section ref={ref} className="relative h-screen w-full overflow-hidden" id="home">
        {/* YouTube Background Video - pzPu80PjlW0 */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/pzPu80PjlW0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=pzPu80PjlW0&playsinline=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-royal-900/70 via-royal-900/50 to-royal-900/90" />
        </motion.div>

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
            {/* הכפתור הראשי - מעודכן לכחול מודגש עם אפקט באז בריחוף */}
            <motion.a 
              href={CAUSEMATCH_URL} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)", y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-14 md:py-6 overflow-hidden font-sans font-black tracking-widest text-white bg-blue-600 border-2 border-gold-400 rounded-sm transition-all duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Heart size={24} className="ml-3 fill-current group-hover:animate-pulse" />
              <span className="relative text-xl md:text-3xl tracking-widest uppercase">מעבר לאתר התרומה</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-gold-400 cursor-pointer"
          onClick={(e) => {
              const el = document.getElementById('banner-display');
              if(el) el.scrollIntoView({ behavior: 'smooth'});
          }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown size={32} strokeWidth={2} className="md:w-10 md:h-10" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. תצוגת הבאנר (תמונה 67.png) במלואה ובאיכות גבוהה */}
      <section id="banner-display" className="w-full bg-royal-900 flex items-center justify-center overflow-hidden border-t border-gold-400/20">
        <img 
          src="/images/gallery/67.png" 
          alt="באנר מוסדות חלב חיטים"
          className="w-full h-auto max-w-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('67.PNG')) target.src = "/images/gallery/67.PNG";
          }}
        />
      </section>

      {/* 3. סקציית טקסט וכפתורים מתחת לבאנר */}
      <section className="bg-royal-900 py-16 md:py-24 border-b border-gold-400/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-serif text-4xl md:text-7xl font-bold mb-10 leading-tight"
          >
            היו שותפים בבניין <span className="text-gold-400 italic">הממלכה</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* כפתור תרומה כחול מודגש במיוחד עם אפקט בולט */}
            <motion.a
              href={CAUSEMATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.5)", filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-4 bg-blue-700 text-white border-4 border-gold-400 px-16 py-6 rounded-sm font-black text-2xl md:text-4xl transition-all w-full md:w-auto shadow-2xl"
            >
              <Heart size={36} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              <span>מעבר לאתר התרומה</span>
            </motion.a>

            {/* כפתור תקנון ההגרלה */}
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 text-white hover:text-gold-400 transition-all border-b-2 border-white/20 hover:border-gold-400 pb-2 text-lg md:text-xl font-medium"
            >
              <FileText size={24} />
              <span>מעבר לתקנון ההגרלה</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 4. כפתור תרומה צף (Sticky Button) - מעודכן לכחול בולט */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[100]"
          >
            <motion.a
              href={CAUSEMATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: [0, -1, 1, -1, 0] }}
              className="flex items-center gap-4 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-blue-500 transition-all group border-2 border-gold-400/50"
            >
              <span className="text-lg md:text-xl">תרומה מהירה</span>
              <div className="bg-white text-blue-600 p-2 rounded-full group-hover:bg-gold-400 group-hover:text-royal-900 transition-colors">
                <Heart size={20} fill="currentColor" />
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;