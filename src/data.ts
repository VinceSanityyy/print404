export const business = {
  name: 'Print 404',
  tagline: 'Your reliable printing & internet cafe in Bunawan, Agusan del Sur',
  address: 'Purok 2, San Teodoro, Bunawan, 8506 Agusan del Sur, Philippines',
  lat: 8.173588,
  lng: 125.9965624,
  facebook: 'https://www.facebook.com/print404/',
  mapsUrl: 'https://www.google.com/maps/place/Print404/@8.173588,125.9965624,17z',
  hours: [
    { day: 'Monday', time: '8:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 8:00 PM' },
    { day: 'Friday', time: '8:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
  ],
};

export const services = [
  { icon: '🖨', title: 'Printing', desc: 'Black & white and color printing on A4, A5, and photo paper in various sizes.' },
  { icon: '📄', title: 'Photocopy', desc: 'Fast, high-quality black & white photocopying for documents and IDs.' },
  { icon: '🖼', title: 'Lamination', desc: 'Protect your IDs, certificates, and posters with clear lamination.' },
  { icon: '💻', title: 'Internet Cafe', desc: 'Computer rental with fast internet for browsing, research, and online tasks.' },
  { icon: '✍', title: 'Typing & Encoding', desc: 'Document typing, data entry, and form encoding services.' },
  { icon: '📸', title: 'ID Pictures', desc: '1x1, 2x2, passport, and custom ID photo printing on the spot.' },
  { icon: '📱', title: 'Scanning', desc: 'Scan documents and photos to email or USB in high resolution.' },
  { icon: '📦', title: 'Print Outs', desc: 'Print from USB, email, or your phone — we accept most file formats.' },
];

import galleryData from './gallery.json';

export const gallery = galleryData as { src: string; alt: string }[];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
];
