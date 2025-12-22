import React from 'react';
import { Mail } from 'lucide-react'; // ייבוא אייקון אימייל
import { EXTERNAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ימין: לוגו מוגדל במקום טקסט */}
        <div className="flex items-center">
          <img 
            src="/images/gallery/23.jpg" 
            alt="לוגו מוסדות חלב חיטים" 
            className="h-20 md:h-28 w-auto object-contain drop-shadow-md rounded-sm"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('23.JPG')) target.src = "/images/gallery/23.JPG";
            }}
          />
        </div>
        
        {/* מרכז: קרדיט וזכויות שמורות */}
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

        {/* שמאל: צור קשר מוגדל עם אייקון (ללא פרטיות) */}
        <div className="flex items-center">
          <a 
            href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}`} 
            className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full text-white hover:text-gold-400 hover:bg-white/10 transition-all duration-300 border border-white/10 group"
          >
            <span className="text-base font-bold tracking-widest uppercase">צור קשר</span>
            <Mail size={20} className="text-gold-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;