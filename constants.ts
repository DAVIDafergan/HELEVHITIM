import { NavItem, Activity, DonationTier } from './types';

// =================================================================
// Site Images from public folder
// =================================================================

// Luxury Golden Crown Logo (SVG)
const CROWN_LOGO_SVG = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMzAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ29sZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkVFNjg1O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0Q0QUYzNztzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2ZZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0I1OTAyMDtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJZHJvcFNoYWRvdyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIvPgogICAgICA8ZmVPZmZzZXQgZHg9IjIiIGR5PSIyIiByZXN1bHQ9Im9mZnNldGJsdXIiLz4KICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgICAgPGZlRnVuY0EgdHlwZT0ibGluZWFyIiBzbG9wZT0iMC4zIi8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlLz4KICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDwhLS0gCkNyb3duIC0tPgogIDxwYXRoIGZpbGw9InVybCgjZ29sZEdyYWQpIiBmaWx0ZXI9InVybCgjZHJvcFNoYWRvdykiIGQ9Ik0yNTAgNTAgQzIzMCAODAgMjAwIDEyMCAxODAgMTIwIEMxNjAgMTIwIDEzMCA3MCAxMzAgNzAgQzEzMCA3MCAxMTAgMTUwIDgwIDE1MCBMNTAgMTUwIEw1MCAyMjAgTDQ1MCAyMjAgTDQ1MCAxNTAgTDQyMCAxNTAgTDQyMCAxNTAgQzM5MCAxNTAgMzcwIDcwIDM3MCA3MCBDMzcwIDcwIDM0MCAxMjAgMzIwIDEyMCBDMzAwIDEyMCAyNzAgODAgMjUwIDUwIFoiIC8+Cjwvc3ZnPg==`;

// =================================================================
// Flexible SITE_IMAGES: each image can be replaced by you
// =================================================================
export const SITE_IMAGES = {
  LOGO: CROWN_LOGO_SVG,

  // ראשי
  HERO_BACKGROUND: '/images/gallery/1.jpg',  
  ABOUT_IMAGE: '/images/gallery/2.png',       // תוקן ל-png לפי צילום המסך
  CHARITY_IMAGE: '/images/gallery/3.jpg',     

  // גלריה – כל התמונות נוספות
  GALLERY: Array.from({ length: 30 }, (_, i) => `/images/gallery/${i + 4}.jpg`)
};

// =================================================================
// Links & Navigation
// =================================================================
export const EXTERNAL_LINKS = {
  DONATE: 'https://www.matara.pro/nedarimplus/online/?mosad=0', 
  CONTACT_EMAIL: 'office@halavhitim.co.il',
  WHATSAPP: 'https://wa.me/972500000000',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'אודות', href: '#about' },
  { label: 'פעילות המוסדות', href: '#activities' },
  { label: 'חסד ונתינה', href: '#charity' },
  { label: 'גלריה', href: '#gallery' },
];

// =================================================================
// Activities
// =================================================================
export const ACTIVITIES: Activity[] = [
  {
    id: 'kollel',
    title: 'כולל אברכים',
    description: 'קול התורה מהדהד מסביב לשעון. אברכים מצוינים העמלים בתורה יומם ולילה.',
    longDescription: 'הלב הפועם של המוסדות. עשרות אברכים תלמידי חכמים, העמלים בתורה מבוקר ועד ליל, בוקעים את שערי שמיים בתפילה ובלימוד. הכולל מהווה מגדלור רוחני המקרין על כל העיר טירת כרמל, ומגן על תושביה בזכות התורה. האברכים נבחנים מדי חודש ומגלים בקיאות מרשימה בכל מכמני ההלכה והגמרא.',
    image: '/images/gallery/4.jpg',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/gallery/${5 + i}.jpg`)
  },
  {
    id: 'yeshiva',
    title: 'ישיבה גדולה',
    description: 'בית היוצר לנשמת האומה. בחורים צעירים המתעלים בתורה ויראת שמים.',
    longDescription: 'הישיבה הגדולה היא כור ההיתוך של דור העתיד. כאן נבנים מנהיגי המחר, באווירה של שטייגען (לימוד מעמיק) ושמחת חיים. הצוות החינוכי המסור מלווה כל בחור ובחור באופן אישי, דואג לרווחתו הגשמית והרוחנית, ומעניק כלים לחיים של משמעות ועשייה.',
    image: '/images/gallery/8.jpg',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/gallery/${9 + i}.jpg`)
  },
  {
    id: 'women',
    title: 'מדרשה לנשים',
    description: 'שיעורי תורה והעצמה לנשות העיר. חיזוק הבית היהודי ולימוד משותף.',
    longDescription: 'מדרשת הנשים שלנו היא בית חם לכל אישה ובת. שיעורים מרתקים בהלכה, השקפה וחינוך ילדים, ערבי הפרשת חלה מרגשים, ומפגשי גיבוש קהילתיים. המקום מעניק כוחות רוחניים לאמהות ונשים, המהוות את עמוד התווך של הבית היהודי.',
    image: '/images/gallery/12.jpg',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/gallery/${13 + i}.jpg`)
  },
  {
    id: 'kindergarten',
    title: 'גני ילדים',
    description: 'חינוך טהור מגיל ינקות. חום, אהבה וערכים יהודיים שורשיים.',
    longDescription: 'בגני הילדים של "חלב חיטים", אנו מגדלים את פרחי הכהונה באהבה אינסופית. גננות מסורות ומקצועיות, סביבה עשירה ומטפחת, ודגש חזק על מידות טובות ודרך ארץ. הילדים סופגים את טעמה המתוק של המסורת כבר מגיל הרך, באווירה שמחה ובטוחה.',
    image: '/images/gallery/16.jpg',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/gallery/${17 + i}.jpg`)
  },
  {
    id: 'classes',
    title: 'שיעורים לבעלי בתים',
    description: 'שיעורים יומיים בגמרא והלכה. מחברים את חיי המעשה לנצח.',
    longDescription: 'בית המדרש פתוח לכולם. מדי ערב מתקיימים שיעורי תורה לבעלי בתים, אנשי עמל המקדישים עיתים לתורה. השיעורים מועברים בשפה ברורה ונעימה, ומחברים את סוגיות הגמרא לחיי המעשה היומיומיים. זהו המקום להתמלא בתוכן ומשמעות בסיומו של יום עבודה.',
    image: '/images/gallery/20.jpg',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/gallery/${21 + i}.jpg`)
  }
];

// =================================================================
// Donation Tiers
// =================================================================
export const DONATION_TIERS: DonationTier[] = [
  { amount: 30, label: 'ארוחה חמה', description: 'תרומת ארוחה חמה אחת לנזקק' },
  { amount: 180, label: 'סל מזון', description: 'סל מזון עשיר למשפחה לשבת' },
  { amount: 1000, label: 'פרנס החודש', description: 'שותפות מלאה בהחזקת המוסדות' },
];