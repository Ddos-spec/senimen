export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  cover: string;
  readingTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: 'dokumentasi-proses-seni',
    title: 'Jangan Nunggu Karya Jadi Buat Mulai Dokumentasi',
    eyebrow: 'ARSIP / PROSES',
    excerpt: 'Kalau yang tersisa cuma foto hasil akhir, banyak bagian serunya keburu hilang.',
    cover: 'images/carousel_all/slide_109.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Foto final cuma nunjukin ujungnya',
        paragraphs: [
          'Yang bikin sebuah karya menarik sering justru terjadi sebelum beres: bahan yang salah beli, sketsa yang dicoret lagi, obrolan yang bikin arah berubah, atau keputusan kecil yang baru terasa penting belakangan.',
          'Jadi dokumentasi nggak perlu nunggu semuanya rapi. Foto dari HP, voice note, screenshot, atau video pendek sudah cukup selama lu masih tahu itu tentang apa.',
        ],
      },
      {
        heading: 'Catat perubahan, bukan cuma kesibukan',
        paragraphs: ['Foto orang lagi kerja memang bagus buat kenang-kenangan. Tapi buat arsip, perubahan lebih berguna daripada pose.'],
        bullets: [
          'Ambil kondisi sebelum dan sesudah perubahan besar.',
          'Tulis alasan kenapa sesuatu diganti atau dibuang.',
          'Simpan versi gagal kalau kegagalannya ikut menentukan hasil.',
          'Catat siapa yang ikut kerja supaya kredit nggak hilang.',
        ],
      },
      {
        heading: 'Bikin gampang dicari lagi',
        paragraphs: [
          'Nama file seperti IMG_8472 final final beneran-final bakal nyusahin diri sendiri beberapa bulan kemudian. Nama proyek, tanggal, lalu isi file sudah cukup.',
          'Arsip yang enak dicari bisa dipakai lagi buat portofolio, proposal, pameran, konten, atau sekadar ngingetin kenapa dulu lu memilih jalan tertentu.',
        ],
      },
    ],
  },
  {
    slug: 'artist-statement-tanpa-basa-basi',
    title: 'Nulis Artist Statement Tanpa Kedengeran Sok Dalam',
    eyebrow: 'MENULIS / KARYA',
    excerpt: 'Mulai dari apa yang benar-benar lu bikin. Makna belakangan.',
    cover: 'images/carousel_all/slide_112.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Kasih tahu dulu orang lagi lihat apa',
        paragraphs: [
          'Sebelum ngomong soal keresahan, identitas, atau eksistensi, jelasin dulu bendanya. Bahannya apa, lu ngapain ke bahan itu, bentuk akhirnya seperti apa, dan dibuat dalam situasi apa.',
          'Kalimat konkret lebih gampang dipercaya. “Poster lama gue potong mengikuti bekas lipatannya” jauh lebih kebaca daripada “karya ini mengeksplorasi kompleksitas ruang dan waktu.”',
        ],
      },
      {
        heading: 'Pakai tiga pertanyaan',
        paragraphs: ['Kalau bingung mulai dari mana, jawab tiga hal ini dulu. Nanti baru dirapihin jadi paragraf.'],
        bullets: [
          'Apa yang lu bikin?',
          'Kenapa lu kepikiran bikin itu?',
          'Keputusan apa yang paling ngubah bentuk akhirnya?',
        ],
      },
      {
        heading: 'Buang kalimat yang bisa dipakai semua orang',
        paragraphs: [
          'Kalau satu kalimat masih masuk akal setelah nama seniman dan jenis karyanya diganti, kemungkinan kalimat itu terlalu umum.',
          'Statement nggak harus menjelaskan semuanya. Cukup kasih pegangan supaya orang punya titik masuk.',
        ],
      },
    ],
  },
  {
    slug: 'brief-kolaborasi-kreatif',
    title: 'Bikin Brief Kolaborasi Tanpa Bikin Semua Orang Jadi Operator',
    eyebrow: 'KOLABORASI / KERJA',
    excerpt: 'Deadline harus jelas. Tapi jangan sampai semua keputusan sudah dikunci sebelum orang lain ikut masuk.',
    cover: 'images/carousel_all/slide_108.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Pisahin yang wajib sama yang masih bisa diganggu',
        paragraphs: [
          'Ada hal yang memang nggak bisa ditawar: deadline, ukuran ruang, budget, hak pakai, kebutuhan teknis. Tulis itu jelas.',
          'Di luar itu, kasih ruang. Kalau visual, urutan, atau cara presentasi sudah ditentukan sampai detail terkecil, yang lu cari bukan kolaborator tapi operator.',
        ],
      },
      {
        heading: 'Sepakati kapan kerjaan dianggap selesai',
        paragraphs: ['Banyak ribut kecil muncul gara-gara semua orang punya bayangan “selesai” yang beda.'],
        bullets: [
          'Output akhirnya apa?',
          'Siapa yang mutusin kalau ada dua pilihan?',
          'Revisi masuk akal berapa kali?',
          'File master disimpan siapa?',
          'Nama dan kredit ditulis bagaimana?',
        ],
      },
      {
        heading: 'Sisain satu ruang buat berubah pikiran',
        paragraphs: [
          'Kadang ide awal memang kalah bagus sama temuan di tengah jalan. Kasih satu momen buat semua orang lihat lagi arah proyek sebelum semuanya terlanjur dikunci.',
          'Kalau nggak ada yang boleh berubah, kolaborasinya cuma pembagian tugas.',
        ],
      },
    ],
  },
  {
    slug: 'membangun-arsip-kolektif',
    title: 'Arsip Kolektif: Biar File Nggak Jadi Kuburan Folder',
    eyebrow: 'ARSIP / KOMUNITAS',
    excerpt: 'Nyimpen banyak file gampang. Bikin orang lain paham file itu apa, baru susah.',
    cover: 'images/carousel_all/slide_110.jpg',
    readingTime: '6 MENIT',
    sections: [
      {
        heading: 'Folder penuh belum tentu arsip',
        paragraphs: [
          'Seratus gigabyte foto nggak banyak gunanya kalau nggak ada yang ingat itu acara apa, kapan diambil, atau siapa yang ada di situ.',
          'Nggak perlu bikin sistem museum. Yang penting orang lain masih bisa ngerti isi folder tanpa harus nanya ke satu orang yang kebetulan masih ingat.',
        ],
      },
      {
        heading: 'Data kecil yang bakal nyelametin lu nanti',
        paragraphs: ['Minimal kasih konteks yang nggak kelihatan dari gambarnya sendiri.'],
        bullets: [
          'Nama kegiatan atau proyek.',
          'Tanggal dan tempat.',
          'Siapa yang bikin atau mendokumentasikan.',
          'Siapa yang perlu dikredit.',
          'Sedikit keterangan kalau gambarnya ambigu.',
          'Boleh dipublikasikan atau nggak.',
        ],
      },
      {
        heading: 'Nyimpen dan nampilin itu dua urusan',
        paragraphs: [
          'Arsip boleh gemuk. Halaman publik nggak harus ikut sesak.',
          'Simpan sebanyak yang memang perlu disimpan, lalu pilih sebagian buat ditampilkan. Jadi orang bisa menikmati arsip tanpa harus disambut seribu file sekaligus.',
        ],
      },
    ],
  },
  {
    slug: 'mendokumentasikan-event-seni',
    title: 'Dokumentasi Event: Jangan Cuma Foto Panggung dan Orang Senyum',
    eyebrow: 'EVENT / DOKUMENTASI',
    excerpt: 'Suasana acara ada di detail, jeda, orang yang datang, dan hal-hal yang biasanya nggak masuk foto resmi.',
    cover: 'images/carousel_all/slide_113.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Cari kejadian, bukan checklist foto',
        paragraphs: [
          'Wide shot ruangan, foto pembicara, foto kelompok. Ambil, tentu. Tapi jangan berhenti di situ.',
          'Lihat orang yang lagi nunggu, tangan yang beresin instalasi, karya yang disentuh pengunjung, kursi yang mulai kosong, atau kondisi ruangan setelah acara. Di situ biasanya rasa acaranya muncul.',
        ],
      },
      {
        heading: 'Pindah-pindah jarak',
        paragraphs: ['Satu acara terasa lebih utuh kalau fotonya nggak diambil dari posisi yang sama terus.'],
        bullets: [
          'Jauh: bentuk ruang dan keramaiannya.',
          'Sedang: kelompok orang dan hubungan antarorang.',
          'Dekat: ekspresi dan gestur.',
          'Detail: material, tangan, tulisan, alat, bekas pakai.',
        ],
      },
      {
        heading: 'Sebelum pulang, tulis lima baris',
        paragraphs: [
          'Nama acara, tanggal, tempat, siapa yang terlibat, dan satu hal yang ternyata beda dari rencana. Lima baris ini kelihatannya receh sampai enam bulan kemudian lu butuh konteksnya.',
          'Dokumentasi yang bagus nggak harus bikin acara kelihatan lebih megah. Yang penting orang masih bisa ngerasain apa yang terjadi.',
        ],
      },
    ],
  },
  {
    slug: 'portofolio-seniman-sebagai-cerita',
    title: 'Portofolio: Pilih yang Perlu, Buang yang Numpuk',
    eyebrow: 'PORTOFOLIO / KERJA',
    excerpt: 'Lebih banyak gambar belum tentu bikin orang lebih paham kerjaan lu.',
    cover: 'images/carousel_all/slide_29.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Jangan masukin karya cuma karena pernah bikin',
        paragraphs: [
          'Portofolio bukan gudang prestasi. Pilih proyek yang kalau ditaruh berdekatan bikin orang ngerti cara lu mikir, medium yang sering lu pakai, atau pertanyaan yang terus muncul di kerjaan lu.',
          'Urutannya juga nggak wajib berdasarkan tahun. Kadang dua proyek yang beda tiga tahun justru lebih nyambung kalau ditaruh sebelahan.',
        ],
      },
      {
        heading: 'Kasih konteks secukupnya',
        paragraphs: ['Jangan bikin pembaca harus nebak-nebak hal yang sebenarnya gampang dijelaskan.'],
        bullets: [
          'Ini karya apa dan mediumnya apa?',
          'Dibuat kapan dan untuk konteks apa?',
          'Kalau kolaborasi, bagian lu yang mana?',
          'Ada keputusan proses yang penting buat diketahui nggak?',
        ],
      },
      {
        heading: 'Kalau dua gambar bilang hal yang sama, pilih satu',
        paragraphs: [
          'Lima proyek yang dikasih ruang biasanya lebih enak dibaca daripada dua puluh proyek yang dijejelin rapat-rapat.',
          'Edit itu bagian dari portofolio. Lu bukan cuma milih karya, tapi juga milih apa yang nggak perlu ditunjukin.',
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
