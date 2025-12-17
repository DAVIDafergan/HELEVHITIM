import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Heart, Truck, Check } from 'lucide-react';
import { SITE_IMAGES } from '../constants';

const Charity: React.FC = () => {
  return (
    <section id="charity" className="py-32 relative bg-white overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-gold-400"></div>
                <h3 className="text-gold-600 font-bold uppercase tracking-widest-luxury text-sm">מפעל החסד</h3>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-royal-900 mb-8 tracking-tight">
              לב פתוח <br /> <span className="text-gold-600 italic font-medium">לכל נזקק</span>
            </h2>
            
            <p className="text-gray-700 text-xl leading-relaxed font-normal mb-12 max-w-lg">
              מערך החסד האדיר שלנו לא נח לרגע. חלוקת סלי מזון שבועית, תמיכה בחגים, ועזרה דחופה למשפחות. הנתינה היא הזכות הגדולה ביותר שלנו.
            </p>

            <div className="space-y-8">
              {[
                  { icon: ShoppingBasket, title: "סלי מזון", desc: "חלוקה שבועית למאות משפחות" },
                  { icon: Heart, title: "תמיכה רגשית", desc: "אוזן קשבת וליווי מקצועי" },
                  { icon: Truck, title: "עד הבית", desc: "שינוע דיסקרטי עד דלת הנזקק" }
              ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full group-hover:border-gold-400 group-hover:bg-gold-50 transition-all duration-300 bg-gray-50">
                        <item.icon size={20} className="text-gray-600 group-hover:text-gold-600" />
                    </div>
                    <div>
                        <h4 className="text-royal-900 font-serif font-bold text-xl mb-1">{item.title}</h4>
                        <p className="text-gray-600 font-normal text-base">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

           {/* Image Side */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
             {/* Decorative Elements */}
             <div className="absolute top-10 right-10 w-full h-full border-2 border-gold-400/20 z-0"></div>
             
             <div className="relative z-10 overflow-hidden">
                <img 
                src={SITE_IMAGES.CHARITY_IMAGE}
                alt="חלוקת מזון" 
                className="w-full h-[600px] object-cover filter brightness-[1.05] grayscale-[10%]"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs shadow-lg border-t border-r border-gray-100">
                    <p className="font-serif text-royal-900 text-2xl italic leading-tight font-bold">
                        "עולם חסד יבנה"
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-gold-600 text-sm font-bold uppercase tracking-wider">
                        <Check size={18} strokeWidth={3} /> התחייבות לשקיפות
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Charity;