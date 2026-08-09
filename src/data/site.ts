export const highlights = [
  { no: '01', title: 'PESTA BABI', meta: 'HIGHLIGHT', image: 'images/carousel_all/slide_29.jpg', className: 'archive-card--wide', mediaClass: 'media-slot--wide', alt: 'Dokumentasi Pesta Babi dari arsip Senimen' },
  { no: '02', title: 'NONGKI ONLEN', meta: 'HIGHLIGHT', image: 'images/carousel_all/slide_49.jpg', className: 'archive-card--portrait', mediaClass: 'media-slot--portrait', alt: 'Dokumentasi Nongki Onlen dari arsip Senimen' },
  { no: '03', title: 'RRI PRO 4', meta: 'MEDIA', image: 'images/carousel_all/slide_83.jpg', className: 'archive-card--square', mediaClass: 'media-slot--square', alt: 'Dokumentasi RRI Pro 4 dari arsip Senimen' },
  { no: '04', title: 'JAGATRASA EVENT', meta: 'COLLAB', image: 'images/carousel_all/slide_108.jpg', className: 'archive-card--tall', mediaClass: 'media-slot--tall', alt: 'Dokumentasi Jagatrasa Event dari arsip Senimen' },
] as const;

export const visualNotes = [23, 24, 50, 109, 112, 113].map((slide, index) => ({
  label: `FRAME / ${String(index + 1).padStart(3, '0')}`,
  image: `images/carousel_all/slide_${slide}.jpg`,
  alt: `Arsip visual Senimen ${String(index + 1).padStart(2, '0')}`,
}));

export const spaces = [
  { no: '01', name: 'ARSIP', description: 'Submit karya dan masuk ke arsip kolektif', href: 'https://forms.gle/MN6SPw3rrdYswiXL6', external: true },
  { no: '02', name: 'KARYA', description: 'Visual, objek, performance, eksperimen', href: '#visual-notes' },
  { no: '03', name: 'EVENT', description: 'Agenda, dokumentasi, recap, pertemuan', href: '#archive' },
  { no: '04', name: 'KOLAB', description: 'Proyek bersama, partner, ruang kolaborasi', href: 'mailto:senimenuntukseni@gmail.com' },
] as const;

export const ticker = ['PESTA BABI', 'NONGKI ONLEN', 'RRI PRO 4', 'JAGATRASA EVENT', 'SENIMEN?'] as const;

export const social = {
  instagram: 'https://www.instagram.com/komunitas_senimen/',
  submit: 'https://forms.gle/MN6SPw3rrdYswiXL6',
  whatsapp: 'https://wa.me/message/646EHTXQR66WO1',
  email: 'senimenuntukseni@gmail.com',
} as const;
