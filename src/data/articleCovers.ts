const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export const articleCovers: Record<string, string> = {
  'dokumentasi-proses-seni': `${base}images/articles/dokumentasi-proses-seni.webp`,
  'artist-statement-tanpa-basa-basi': `${base}images/articles/artist-statement.webp`,
  'brief-kolaborasi-kreatif': `${base}images/articles/brief-kolaborasi-kreatif.webp`,
  'membangun-arsip-kolektif': `${base}images/articles/arsip-kolektif.webp`,
  'mendokumentasikan-event-seni': `${base}images/articles/dokumentasi-event-seni.webp`,
  'portofolio-seniman-sebagai-cerita': `${base}images/articles/portofolio-seniman.webp`,
};
