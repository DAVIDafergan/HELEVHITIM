import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  // יצירת מערך של מספרים 1 עד 20
  const imageNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-32 bg-royal-900 text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-20">
          <span className="text-gold-400 tracking-[0.3em] uppercase text-sm mb-4">התיעוד שלנו</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 text-center"
          >
            רגעים של <span className="text-transparent bg-clip-text bg-gold-gradient italic">התעלות</span>
          </motion.h2>
        </div>

        {/* פריסת הגלריה */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {imageNumbers.map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * (num % 10), duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden cursor-pointer rounded-sm"
            >
              <img 
                src={`/images/${num}.jpg`} 
                alt={`Gallery image ${num}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // ניסיון שני עם סיומת גדולה אם קטנה נכשלה
                  if (!target.src.includes('.JPG')) {
                    target.src = `/images/${num}.JPG`;
                  } else {
                    // אם גם זה נכשל, נסתיר את התמונה השבורה
                    target.style.display = 'none';
                  }
                }}
              />
              
              {/* אפקט מעבר (Overlay) */}
              <div className="absolute inset-0 bg-gold-500/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                <div className="border border-white/50 p-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Plus size={32} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;