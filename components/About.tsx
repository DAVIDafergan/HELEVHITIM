import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0a192f 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 relative z-10"
          >
             <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-400/30 z-0 hidden md:block"></div>
                
                <img 
                  src="/images/gallery/4.jpg" // נתיב מעודכן לתיקיית gallery
                  alt="דמות רבנית" 
                  className="relative z-10 w-full h-[400px] md:h-[650px] object-cover object-top shadow-2xl filter saturate-[0.9] hover:saturate-100 transition-all duration-700 rounded-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // ניסיון תיקון: אם לא מצא בנתיב המקורי, מנסה סיומת גדולה
                    if (!target.src.includes('4.JPG')) {
                      target.src = "/images/gallery/4.JPG";
                    }
                  }}
                />
             </div>
          </motion.div>

          {/* Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-7/12 md:-mr-20 z-20 mt-[-40px] md:mt-0"
          >
            <div className="bg-white p-8 md:p-16 shadow-luxury md:border-r-4 border-gold-400 rounded-sm text-right" dir="rtl">
              <div className="flex items-center gap-4 mb-4 md:mb-6 flex-row-reverse">
                 <div className="h-px w-8 md:w-12 bg-gold-400"></div>
                 <span className="text-gold-700 font-sans text-xs md:text-sm font-bold tracking-widest-luxury uppercase">מי אנחנו</span>
              </div>
              
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-royal-900 mb-6 md:mb-8 leading-tight">
                חזון שהפך <br/>
                <span className="italic text-gold-600 font-medium">למציאות חיה</span>
              </h2>
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-normal mb-6 md:mb-8">
                מוסדות 'חלב חיטים' הם יותר מעוד מוסד. זהו בית. בית שבו כל תושב בטירת כרמל יודע שיש לו כתובת.
                החזון שלנו הוא לחבר בין עולמות – בין חסד לנתינה, בין חינוך למצוינות, ובין מסורת לקידמה.
              </p>

              <div className="relative pr-8 border-r-4 border-gold-200 py-2">
                 <Quote className="absolute -top-3 -right-3 text-gold-300 fill-current w-8 h-8 md:w-10 md:h-10 opacity-30 rotate-180" />
                 <p className="text-royal-800 font-serif text-xl md:text-2xl italic leading-relaxed font-medium">
                   "אנו פועלים יום יום, שעה שעה, כדי להאיר את העיר באור של תורה, אהבת חינם ועזרה לזולת."
                 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;