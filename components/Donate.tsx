import React from 'react';
import { motion } from 'framer-motion';
import { DONATION_TIERS } from '../constants';
import { HeartHandshake, CreditCard, ShieldCheck } from 'lucide-react';

const Donate: React.FC = () => {
  // כתובת התרומה המעודכנת
  const CAUSEMATCH_URL = "https://causematch.com/helev-hitim";

  return (
    <section id="donate" className="py-20 md:py-32 relative overflow-hidden bg-royal-800">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-royal-900 to-royal-800"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 text-right" dir="rtl">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-7xl font-serif font-bold text-white mb-4 md:mb-6"
          >
            הזכות שלכם, <br/>
            <span className="text-gold-400 italic font-medium">הנצח שלהם</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl mb-10 md:mb-16 font-normal max-w-2xl mx-auto leading-relaxed px-2"
          >
            היו שותפים להחזקת תורה וחסד. התרומה מוכרת לצרכי מס (סעיף 46) ומאובטחת בתקן המחמיר ביותר.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
            {DONATION_TIERS.map((tier, index) => (
              <motion.a
                key={tier.amount}
                href={CAUSEMATCH_URL} // כל כפתור סכום שולח ללינק הראשי
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative block bg-white/5 border border-white/10 p-6 md:p-10 backdrop-blur-sm hover:bg-gold-500 hover:border-gold-500 transition-all duration-500 overflow-hidden shadow-lg rounded-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-row md:flex-col justify-between md:justify-center items-center h-full gap-4">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white md:mb-4 group-hover:text-royal-900 transition-colors">
                    ₪{tier.amount}
                  </div>
                  
                  {/* Divider - Hidden on mobile, visible on desktop */}
                  <div className="hidden md:block h-px w-10 bg-gold-500 mb-6 group-hover:bg-royal-900/40"></div>
                  
                  {/* Vertical divider for mobile */}
                  <div className="block md:hidden w-px h-12 bg-white/10"></div>

                  <div className="text-right md:text-center flex-1">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-gold-400 mb-1 md:mb-2 group-hover:text-royal-900 transition-colors">
                      {tier.label}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base font-normal group-hover:text-royal-900/90 transition-colors leading-tight">
                      {tier.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
             href={CAUSEMATCH_URL}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-gold-400 to-gold-500 text-royal-900 font-bold text-lg md:text-xl tracking-widest uppercase shadow-gold hover:shadow-lg transition-all w-full md:w-auto rounded-sm"
          >
            <span>תרומה בסכום אחר</span>
            <HeartHandshake size={24} />
          </motion.a>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-gray-400 text-xs md:text-sm tracking-widest uppercase font-medium">
             <div className="flex items-center gap-2">
               <ShieldCheck size={16} className="text-gold-500" /> <span>מאובטח בתקן PCI DSS</span>
             </div>
             <div className="hidden md:block w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
             <div className="flex items-center gap-2">
               <CreditCard size={16} className="text-gold-500" /> <span>קבלה מוכרת למס מיידית</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donate;