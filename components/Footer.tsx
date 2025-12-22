import React from 'react';
import { EXTERNAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold-500 flex items-center justify-center text-royal-900 font-serif font-bold text-xl">ח</div>
          <span className="text-white font-serif text-lg tracking-wide">מוסדות חלב חיטים</span>
        </div>
        
        <div className="text-sm font-light tracking-wide text-center md:text-right">
          © {new Date().getFullYear()} כל הזכויות שמורות. <br className="md:hidden" />
          האתר נבנה ע"י{' '}
          <a 
            href="https://wa.me/message/WZKLTKH4KELMD1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 transition-colors font-bold underline decoration-gold-400/30 underline-offset-4"
          >
            DA ניהול פרויקטים ויזמות
          </a>
        </div>

        <div className="flex gap-8 text-sm tracking-wider uppercase">
          <a href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}`} className="hover:text-gold-400 transition-colors">צור קשר</a>
          <a href="#" className="hover:text-gold-400 transition-colors" onClick={(e) => e.preventDefault()}>פרטיות</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;