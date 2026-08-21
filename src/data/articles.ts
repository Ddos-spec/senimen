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
    title: 'Dokumentasi Proses: Apa yang Perlu Disimpan dari Awal',
    eyebrow: 'ARSIP / PROSES',
    excerpt: 'Foto hasil akhir penting, tapi sketsa, perubahan bahan, dan keputusan di tengah proses sering lebih berguna saat proyek perlu dilihat lagi.',
    cover: 'images/carousel_all/slide_109.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Mulai sebelum karya selesai',
        paragraphs: [
          'Dokumentasi proses nggak perlu menunggu karya jadi. Mulai dari hal sederhana: foto meja kerja, sketsa awal, percobaan bahan, screenshot referensi, atau rekaman pendek saat ada keputusan penting.',
          'Tujuannya bukan membuat semua tahap terlihat bagus. Yang perlu disimpan adalah bagian yang membantu menjelaskan bagaimana karya berubah dari awal sampai selesai.',
        ],
      },
      {
        heading: 'Catat perubahan yang berpengaruh',
        paragraphs: ['Foto orang sedang bekerja berguna, tapi arsip akan lebih jelas kalau perubahan pentingnya ikut tercatat.'],
        bullets: [
          'Ambil kondisi sebelum dan sesudah perubahan besar.',
          'Tulis alasan ketika bahan, bentuk, atau arah kerja diganti.',
          'Simpan versi gagal kalau kegagalannya memengaruhi keputusan berikutnya.',
          'Catat siapa yang terlibat supaya kredit tidak hilang.',
        ],
      },
      {
        heading: 'Beri nama file yang masuk akal',
        paragraphs: [
          'Nama file bawaan kamera cepat bikin arsip susah dibaca. Format sederhana seperti nama proyek, tanggal, lalu isi file sudah cukup untuk kebanyakan kebutuhan.',
          'Dokumentasi yang rapi akan lebih gampang dipakai lagi untuk portofolio, proposal, publikasi, atau sekadar mengecek keputusan yang pernah dibuat di proyek lama.',
        ],
      },
    ],
  },
  {
    slug: 'artist-statement-tanpa-basa-basi',
    title: 'Cara Menulis Artist Statement dari Proses Kerja',
    eyebrow: 'MENULIS / KARYA',
    excerpt: 'Mulai dari apa yang dibuat, bahan yang dipakai, dan keputusan selama proses. Setelah itu baru jelaskan konteks atau gagasannya.',
    cover: 'images/carousel_all/slide_112.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Mulai dari hal yang bisa dilihat',
        paragraphs: [
          'Sebelum masuk ke tema atau gagasan besar, jelaskan dulu karya yang sedang dibahas. Sebutkan medium, bahan, bentuk, dan apa yang dilakukan selama proses pembuatannya.',
          'Kalimat konkret biasanya lebih membantu pembaca. Misalnya, menjelaskan bahwa poster lama dipotong mengikuti bekas lipatan memberi gambaran yang lebih jelas daripada istilah yang terlalu umum.',
        ],
      },
      {
        heading: 'Jawab tiga pertanyaan dasar',
        paragraphs: ['Kalau masih bingung mulai dari mana, tulis jawaban pendek untuk tiga pertanyaan ini. Setelah itu baru susun menjadi paragraf.'],
        bullets: [
          'Apa yang dibuat?',
          'Kenapa memilih bahan, bentuk, atau cara kerja itu?',
          'Keputusan apa yang paling memengaruhi hasil akhirnya?',
        ],
      },
      {
        heading: 'Periksa kalimat yang terlalu umum',
        paragraphs: [
          'Baca ulang setiap kalimat dan cek apakah kalimat itu masih cocok dipakai untuk banyak karya lain. Kalau iya, biasanya masih terlalu umum dan perlu dibuat lebih spesifik.',
          'Artist statement tidak harus menjelaskan semuanya. Cukup beri informasi yang membantu orang masuk ke karya tanpa menebak-nebak hal dasar.',
        ],
      },
    ],
  },
  {
    slug: 'brief-kolaborasi-kreatif',
    title: 'Menyusun Brief untuk Proyek Kolaborasi',
    eyebrow: 'KOLABORASI / KERJA',
    excerpt: 'Brief perlu menjelaskan tujuan, batasan, peran, dan deadline tanpa mengunci semua keputusan kreatif sejak awal.',
    cover: 'images/carousel_all/slide_108.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Tulis batasan yang memang tetap',
        paragraphs: [
          'Mulai dari hal yang tidak bisa berubah: deadline, ukuran ruang, budget, kebutuhan teknis, hak pakai, atau format output. Bagian ini sebaiknya jelas sejak awal.',
          'Setelah batasannya kelihatan, tentukan bagian mana yang masih terbuka untuk dibahas bersama. Di situlah ruang kolaborasinya bekerja.',
        ],
      },
      {
        heading: 'Sepakati output dan cara mengambil keputusan',
        paragraphs: ['Banyak masalah kecil muncul karena setiap orang punya bayangan berbeda soal hasil akhir dan siapa yang mengambil keputusan saat ada pilihan.'],
        bullets: [
          'Output akhirnya apa?',
          'Siapa yang mengambil keputusan kalau ada dua pilihan?',
          'Berapa putaran revisi yang disepakati?',
          'Siapa yang menyimpan file master?',
          'Bagaimana nama dan kredit ditulis?',
        ],
      },
      {
        heading: 'Sediakan ruang untuk perubahan',
        paragraphs: [
          'Proyek kolaborasi sering berubah setelah semua orang mulai bekerja. Sisakan satu titik evaluasi untuk melihat apakah arah awal masih masuk akal atau perlu disesuaikan.',
          'Perubahan tidak harus berarti brief gagal. Selama tujuan dan batas dasarnya tetap jelas, perubahan bisa menjadi bagian normal dari proses.',
        ],
      },
    ],
  },
  {
    slug: 'membangun-arsip-kolektif',
    title: 'Membuat Arsip Kolektif yang Bisa Dipakai Lagi',
    eyebrow: 'ARSIP / KOMUNITAS',
    excerpt: 'Arsip yang berguna bukan cuma kumpulan file. Setiap berkas perlu konteks dasar supaya orang lain bisa menemukan dan memahaminya.',
    cover: 'images/carousel_all/slide_110.jpg',
    readingTime: '6 MENIT',
    sections: [
      {
        heading: 'Folder bukan otomatis arsip',
        paragraphs: [
          'Banyak file belum tentu mudah dipakai. Tanpa nama kegiatan, tanggal, lokasi, atau keterangan singkat, orang lain tetap harus menebak isi foldernya.',
          'Sistemnya tidak perlu rumit. Yang penting, orang yang tidak ikut mengumpulkan file masih bisa memahami isi dan konteksnya.',
        ],
      },
      {
        heading: 'Catat metadata dasar',
        paragraphs: ['Tambahkan informasi yang tidak selalu kelihatan dari foto, video, atau rekamannya sendiri.'],
        bullets: [
          'Nama kegiatan atau proyek.',
          'Tanggal dan tempat.',
          'Pembuat karya atau dokumentasi.',
          'Nama yang perlu dikredit.',
          'Keterangan singkat kalau isi file tidak jelas.',
          'Status izin publikasi bila diperlukan.',
        ],
      },
      {
        heading: 'Pisahkan penyimpanan dan tampilan publik',
        paragraphs: [
          'Arsip internal boleh menyimpan banyak versi dan file pendukung. Halaman publik tidak harus menampilkan semuanya.',
          'Simpan materi yang memang perlu disimpan, lalu pilih bagian yang paling membantu orang memahami kegiatan atau karya ketika ditampilkan di website.',
        ],
      },
    ],
  },
  {
    slug: 'mendokumentasikan-event-seni',
    title: 'Dokumentasi Event: Shot yang Sering Terlewat',
    eyebrow: 'EVENT / DOKUMENTASI',
    excerpt: 'Selain panggung dan foto bersama, dokumentasi acara perlu menangkap ruang, interaksi, persiapan, detail, dan suasana setelah acara selesai.',
    cover: 'images/carousel_all/slide_113.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Ambil foto wajib, lalu cari kejadian lain',
        paragraphs: [
          'Wide shot ruangan, pembicara, penampil, dan foto bersama tetap perlu. Setelah itu, cari bagian yang biasanya tidak masuk dokumentasi resmi.',
          'Persiapan sebelum acara, orang yang menunggu, interaksi antarpengunjung, detail instalasi, meja registrasi, atau kondisi ruangan setelah selesai sering memberi konteks yang lebih lengkap.',
        ],
      },
      {
        heading: 'Ganti jarak dan sudut',
        paragraphs: ['Dokumentasi akan terasa lebih utuh kalau semua foto tidak diambil dari posisi dan jarak yang sama.'],
        bullets: [
          'Jauh: bentuk ruang dan jumlah orang.',
          'Sedang: kelompok kecil dan interaksi.',
          'Dekat: ekspresi dan gestur.',
          'Detail: material, tangan, tulisan, alat, dan bekas penggunaan.',
        ],
      },
      {
        heading: 'Catat konteks sebelum pulang',
        paragraphs: [
          'Sebelum beres, tulis nama acara, tanggal, lokasi, pihak yang terlibat, dan satu-dua catatan tentang apa yang terjadi. Informasi sederhana ini sering sulit dicari lagi beberapa bulan kemudian.',
          'Dokumentasi tidak perlu membuat acara terlihat lebih besar dari kenyataannya. Yang penting, orang yang melihat arsipnya nanti bisa memahami apa yang berlangsung.',
        ],
      },
    ],
  },
  {
    slug: 'portofolio-seniman-sebagai-cerita',
    title: 'Menyusun Portofolio: Memilih Karya dan Urutannya',
    eyebrow: 'PORTOFOLIO / KERJA',
    excerpt: 'Portofolio lebih mudah dibaca kalau setiap proyek punya alasan untuk masuk dan urutannya membantu orang memahami arah kerja.',
    cover: 'images/carousel_all/slide_29.jpg',
    readingTime: '5 MENIT',
    sections: [
      {
        heading: 'Mulai dari tujuan portofolio',
        paragraphs: [
          'Pilihan karya sebaiknya mengikuti tujuan portofolio. Portofolio untuk pameran, residensi, kerja komersial, atau perkenalan umum bisa membutuhkan susunan yang berbeda.',
          'Tidak semua proyek harus masuk. Pilih karya yang paling membantu menjelaskan medium, pendekatan, atau jenis pekerjaan yang ingin ditonjolkan.',
        ],
      },
      {
        heading: 'Beri konteks seperlunya',
        paragraphs: ['Jangan biarkan pembaca menebak informasi dasar yang sebenarnya mudah dijelaskan.'],
        bullets: [
          'Judul karya dan medium.',
          'Tahun serta konteks pembuatannya.',
          'Peran sendiri jika proyeknya kolaboratif.',
          'Catatan proses yang memang penting untuk memahami hasil.',
        ],
      },
      {
        heading: 'Kurangi gambar yang berulang',
        paragraphs: [
          'Beberapa gambar yang kuat biasanya lebih mudah dibaca daripada banyak gambar yang menunjukkan hal serupa. Pilih foto yang memberi informasi berbeda tentang satu proyek.',
          'Setelah pilihan karya selesai, cek urutannya. Pembuka, perpindahan antarproyek, dan penutup ikut menentukan bagaimana keseluruhan portofolio dibaca.',
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
