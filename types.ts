export interface NavItem {
  label: string;
  href: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  longDescription: string; // הטקסט המלא שיופיע בלחיצה
  image: string;
  gallery: string[]; // גלריה ספציפית לקטגוריה
}

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
}
