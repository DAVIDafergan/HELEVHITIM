import React from 'react';
import { motion } from 'framer-motion';
import { SITE_IMAGES } from '../constants';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
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

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {SITE_IMAGES.GALLERY.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              
              {/* Overlay */}
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