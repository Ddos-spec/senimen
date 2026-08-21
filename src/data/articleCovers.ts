const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export const articleCovers: Record<string, string> = {
  'dokumentasi-proses-seni': `${base}images/articles/dokumentasi-proses-seni.png`,
  'artist-statement-tanpa-basa-basi': `${base}images/articles/artist-statement.png`,
  'brief-kolaborasi-kreatif': `${base}images/articles/brief-kolaborasi-kreatif.png`,
  'membangun-arsip-kolektif': `${base}images/articles/arsip-kolektif.png`,
  'mendokumentasikan-event-seni': `${base}images/articles/dokumentasi-event-seni.png`,
  'portofolio-seniman-sebagai-cerita': `${base}images/articles/portofolio-seniman.png`,
};
