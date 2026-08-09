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
    title: 'Dokumentasi Proses Seni: Jangan Tunggu Karya Jadi',
    eyebrow: 'ARSIP / PROSES',
    excerpt: 'Dokumentasi bukan bukti administratif. Ia bisa menjadi bagian dari karya, alat refleksi, dan jejak yang membuat proses kreatif tetap terbaca.',
    cover: 'images/carousel_all/slide_109.jpg',
    readingTime: '6 MENIT',
    sections: [
      {
        heading: 'Hasil akhir sering menyembunyikan bagian paling menarik',
        paragraphs: [
          'Karya yang sudah selesai biasanya terlihat rapi. Masalahnya, kerapian itu menghapus banyak keputusan penting: percobaan yang gagal, perubahan medium, obrolan yang menggeser arah, sampai detail teknis yang baru terasa setelah dikerjakan.',
          'Karena itu dokumentasi proses sebaiknya dimulai sejak awal. Tidak harus dengan kamera mahal. Foto ponsel, catatan pendek, rekaman suara, screenshot percakapan yang relevan, atau potongan video bisa cukup selama konteksnya jelas.',
        ],
      },
      {
        heading: 'Dokumentasikan keputusan, bukan cuma aktivitas',
        paragraphs: [
          'Sepuluh foto orang sedang bekerja belum tentu menjelaskan proses. Yang lebih berguna adalah jejak keputusan: apa yang dicoba, apa yang berubah, kenapa sesuatu dibuang, dan apa yang ditemukan setelah eksperimen.',
        ],
        bullets: [
          'Ambil satu frame sebelum perubahan besar dan satu frame setelahnya.',
          'Tulis satu atau dua kalimat tentang alasan keputusan tersebut.',
          'Simpan versi atau sketsa yang gagal jika kegagalannya memengaruhi hasil.',
          'Catat siapa saja yang terlibat dan bentuk kontribusinya.',
        ],
      },
      {
        heading: 'Arsip yang baik harus mudah ditemukan kembali',
        paragraphs: [
          'Dokumentasi akan kehilangan fungsi kalau file tersebar tanpa nama. Gunakan struktur sederhana: nama proyek, tanggal, jenis file, lalu versi. Konsistensi lebih penting daripada sistem yang rumit.',
          'Saat arsip tertata, materi yang sama bisa dipakai untuk portofolio, tulisan reflektif, proposal, pameran, konten sosial, atau bahan belajar untuk proyek berikutnya. Proses berhenti menjadi sisa produksi dan berubah menjadi pengetahuan.',
        ],
      },
    ],
  },
  {
    slug: 'artist-statement-tanpa-basa-basi',
    title: 'Artist Statement Tanpa Basa-basi',
    eyebrow: 'MENULIS / PERSPEKTIF',
    excerpt: 'Cara menjelaskan karya dengan bahasa yang spesifik tanpa bersembunyi di balik kata “eksplorasi”, “makna”, dan jargon yang tidak membantu pembaca.',
    cover: 'images/carousel_all/slide_112.jpg',
    readingTime: '7 MENIT',
    sections: [
      {
        heading: 'Mulai dari apa yang benar-benar dikerjakan',
        paragraphs: [
          'Artist statement tidak perlu terdengar seperti makalah. Pembaca pertama-tama perlu tahu apa yang ia lihat: medium, tindakan, material, situasi, atau metode yang dipakai. Setelah itu baru jelaskan pertanyaan atau ketegangan yang mendorong karya.',
          'Kalimat konkret biasanya lebih kuat daripada klaim besar. “Saya memotong ulang poster acara lama dan menyusunnya berdasarkan bekas lipatan” memberi gambaran yang bisa diperiksa. “Karya ini mengeksplorasi kompleksitas eksistensi” belum menjelaskan apa pun.',
        ],
      },
      {
        heading: 'Pakai struktur tiga lapis',
        paragraphs: ['Struktur sederhana membantu tulisan tetap dekat dengan karya tanpa berubah menjadi sinopsis berlebihan.'],
        bullets: [
          'Apa: bentuk, medium, material, atau tindakan utama.',
          'Kenapa: pertanyaan, pengalaman, konflik, atau konteks yang mendorongnya.',
          'Bagaimana: keputusan visual, teknis, atau performatif yang membuat gagasan itu bekerja.',
        ],
      },
      {
        heading: 'Hapus kalimat yang bisa ditempel ke karya siapa pun',
        paragraphs: [
          'Tes paling cepat adalah mengganti nama pembuat dan medium. Kalau kalimat masih terasa benar untuk hampir semua karya, kalimat itu terlalu umum. Ganti dengan detail yang hanya masuk akal untuk karya tersebut.',
          'Statement yang baik tidak harus menyelesaikan interpretasi. Fungsinya memberi pintu masuk dan konteks, bukan mengunci penonton pada satu jawaban.',
        ],
      },
    ],
  },
  {
    slug: 'brief-kolaborasi-kreatif',
    title: 'Brief Kolaborasi yang Tidak Membunuh Eksperimen',
    eyebrow: 'KOLABORASI / PRAKTIK',
    excerpt: 'Kolaborasi perlu batas yang jelas, tetapi brief yang terlalu kaku juga bisa menghilangkan alasan orang kreatif bekerja bersama.',
    cover: 'images/carousel_all/slide_108.jpg',
    readingTime: '6 MENIT',
    sections: [
      {
        heading: 'Pisahkan hal yang wajib dari hal yang masih terbuka',
        paragraphs: [
          'Brief kreatif sering gagal karena semua hal diperlakukan seolah sama penting. Padahal ada batas nyata seperti deadline, ukuran ruang, anggaran, hak penggunaan, atau kebutuhan teknis; ada juga wilayah yang seharusnya tetap bisa dinegosiasikan seperti pendekatan visual dan bentuk presentasi.',
          'Menandai dua kategori ini sejak awal membuat kolaborator tahu kapan harus patuh dan kapan justru diharapkan membawa perspektif baru.',
        ],
      },
      {
        heading: 'Tuliskan definisi selesai',
        paragraphs: ['Banyak konflik muncul bukan karena ide buruk, tetapi karena setiap orang punya bayangan berbeda tentang kapan pekerjaan dianggap selesai.'],
        bullets: [
          'Apa output akhirnya dan formatnya?',
          'Siapa yang mengambil keputusan terakhir?',
          'Berapa ronde revisi yang realistis?',
          'Siapa yang menyimpan file master dan dokumentasi?',
          'Bagaimana kredit dan publikasi dibagikan?',
        ],
      },
      {
        heading: 'Sisakan ruang untuk temuan di tengah proses',
        paragraphs: [
          'Kolaborasi menjadi menarik ketika hasilnya tidak sepenuhnya bisa diprediksi oleh salah satu pihak. Karena itu, jadwalkan satu titik evaluasi untuk menilai temuan baru, bukan hanya memeriksa apakah pekerjaan sesuai rencana awal.',
          'Brief yang baik menjaga proyek tetap bergerak tanpa menjadikan kolaborator sekadar operator.',
        ],
      },
    ],
  },
  {
    slug: 'membangun-arsip-kolektif',
    title: 'Membangun Arsip Kolektif yang Masih Berguna Lima Tahun Lagi',
    eyebrow: 'ARSIP / KOMUNITAS',
    excerpt: 'Nama file, metadata, izin publikasi, dan konteks sederhana bisa menentukan apakah dokumentasi komunitas menjadi sumber pengetahuan atau hanya tumpukan folder.',
    cover: 'images/carousel_all/slide_110.jpg',
    readingTime: '8 MENIT',
    sections: [
      {
        heading: 'Arsip kolektif bukan sekadar storage',
        paragraphs: [
          'Folder besar bisa menyimpan banyak file tetapi belum tentu menjadi arsip. Arsip membutuhkan hubungan: kapan sesuatu dibuat, untuk kegiatan apa, siapa yang terlibat, dan bagaimana file itu boleh dipakai.',
          'Tanpa konteks, foto yang hari ini terasa jelas bisa menjadi gambar anonim beberapa tahun kemudian. Sedikit metadata jauh lebih berharga daripada mengandalkan ingatan anggota komunitas.',
        ],
      },
      {
        heading: 'Metadata minimum yang layak disimpan',
        paragraphs: ['Tidak perlu sistem museum. Mulai dari data yang paling mungkin dibutuhkan kembali.'],
        bullets: [
          'Judul atau nama kegiatan.',
          'Tanggal dan lokasi.',
          'Nama kreator atau dokumentator bila diketahui.',
          'Nama orang/kelompok yang relevan untuk kredit.',
          'Jenis media dan deskripsi singkat.',
          'Status izin publikasi atau pembatasan penggunaan.',
        ],
      },
      {
        heading: 'Kurasi dan penyimpanan adalah dua pekerjaan berbeda',
        paragraphs: [
          'Arsip boleh menyimpan hampir semuanya, tetapi halaman publik tidak harus menampilkan semuanya sekaligus. Kurasi membantu orang masuk ke arsip melalui jalur yang lebih mudah dibaca, sementara koleksi lengkap tetap tersedia sebagai sumber.',
          'Dengan pemisahan ini, desain situs dapat tetap ringan tanpa mengorbankan kedalaman dokumentasi.',
        ],
      },
    ],
  },
  {
    slug: 'mendokumentasikan-event-seni',
    title: 'Mendokumentasikan Event Seni Tanpa Mengubahnya Jadi Konten Generik',
    eyebrow: 'EVENT / DOKUMENTASI',
    excerpt: 'Event bukan cuma panggung dan foto ramai. Dokumentasi yang kuat menangkap ruang, hubungan, detail, dan perubahan suasana.',
    cover: 'images/carousel_all/slide_113.jpg',
    readingTime: '6 MENIT',
    sections: [
      {
        heading: 'Buat daftar cerita, bukan daftar shot',
        paragraphs: [
          'Shot list berguna, tetapi dokumentasi akan terasa datar kalau semuanya hanya wide shot, orang tersenyum, dan foto kelompok. Sebelum acara, tentukan cerita apa yang ingin tetap terbaca setelah acara selesai: persiapan, pertemuan orang, perubahan ruang, interaksi dengan karya, atau proses pembongkaran.',
        ],
      },
      {
        heading: 'Tangkap empat skala',
        paragraphs: ['Perpindahan skala membuat satu rangkaian dokumentasi terasa utuh.'],
        bullets: [
          'Ruang: bagaimana acara berada di tempatnya.',
          'Kelompok: pola interaksi dan kepadatan.',
          'Individu: gestur, ekspresi, atau tindakan spesifik.',
          'Detail: material, bekas penggunaan, signage, alat, tangan, tekstur.',
        ],
      },
      {
        heading: 'Simpan konteks setelah acara',
        paragraphs: [
          'Segera setelah kegiatan selesai, catat nama acara, tanggal, lokasi, pihak yang terlibat, dan hal yang ternyata berbeda dari rencana. Catatan pendek ini akan sangat membantu ketika dokumentasi dipakai ulang berbulan-bulan kemudian.',
          'Tujuannya bukan membuat semua event terlihat megah, tetapi membuat pengalaman yang terjadi tetap bisa dibaca.',
        ],
      },
    ],
  },
  {
    slug: 'portofolio-seniman-sebagai-cerita',
    title: 'Portofolio Seniman Bukan Folder Hasil Akhir',
    eyebrow: 'PORTOFOLIO / PRAKTIK',
    excerpt: 'Portofolio yang kuat menunjukkan cara berpikir, konteks, dan hubungan antarkarya—bukan hanya sebanyak mungkin gambar dalam satu PDF.',
    cover: 'images/carousel_all/slide_29.jpg',
    readingTime: '7 MENIT',
    sections: [
      {
        heading: 'Pilih karya berdasarkan hubungan',
        paragraphs: [
          'Portofolio tidak harus menjadi daftar kronologis. Pengelompokan berdasarkan pertanyaan, medium, pendekatan, atau periode tertentu sering lebih mudah dibaca. Tujuannya membuat orang memahami pola dalam praktik, bukan sekadar membuktikan bahwa pembuat pernah produktif.',
        ],
      },
      {
        heading: 'Berikan konteks secukupnya',
        paragraphs: ['Setiap proyek idealnya menjawab beberapa pertanyaan dasar tanpa memaksa pembaca menebak.'],
        bullets: [
          'Apa bentuk dan mediumnya?',
          'Kapan dan dalam konteks apa dibuat?',
          'Apa peran pembuat jika proyeknya kolaboratif?',
          'Apa satu keputusan atau proses yang penting untuk memahami karya?',
        ],
      },
      {
        heading: 'Edit lebih keras daripada menambah',
        paragraphs: [
          'Lima proyek yang masing-masing punya ruang untuk bernapas sering lebih kuat daripada dua puluh proyek dengan satu gambar kecil. Portofolio adalah hasil penyuntingan: memilih apa yang perlu dilihat, urutan kemunculannya, dan kapan pembaca diberi jeda.',
          'Kalau sebuah gambar tidak menambah informasi baru, kemungkinan besar ia tidak perlu ada. Ruang kosong juga bagian dari komunikasi.',
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
