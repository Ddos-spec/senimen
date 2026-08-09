# SENIMEN — Design Guardrails

Dokumen ini menjaga website tetap terasa seperti karya/editorial milik SENIMEN, bukan landing page generik hasil template atau AI.

## 1. Yang harus dipertahankan

- Hitam, putih, dan neon magenta sebagai identitas utama.
- Tipografi besar, keras, editorial, dengan hirarki yang sengaja tidak simetris.
- Foto/video dokumentasi asli SENIMEN sebagai bahan utama visual.
- Ruang kosong yang berani. Jangan mengisi setiap area hanya karena masih ada ruang.
- Grid boleh pecah, overlap, bergeser, dan berubah ritme antar-section selama masih terbaca.
- Motion harus punya fungsi: continuity, reveal, ritme, atau memperkuat hubungan antar-frame.
- Copy pendek, spesifik, dan dekat dengan bahasa komunitas.

## 2. Anti AI-slop

Jangan menambahkan pola berikut tanpa alasan editorial yang kuat:

- gradient ungu/biru generik;
- glassmorphism/card SaaS;
- tiga kartu fitur sejajar dengan icon bulat;
- hero berisi badge + headline + paragraph + dua tombol seperti template startup;
- copy seperti “empowering creativity”, “where passion meets innovation”, “creative ecosystem”, atau kalimat abstrak lain yang tidak memberi konteks;
- fake testimonial, fake member count, fake project count, fake award, fake event, fake sponsor;
- ilustrasi AI/stok untuk menggantikan dokumentasi asli;
- animasi berlebihan di setiap elemen;
- semua section memakai pola layout yang sama;
- rounded card berulang tanpa hubungan dengan identitas Senimen;
- section hanya dibuat untuk memperpanjang halaman.

## 3. Aturan media

- Homepage = kurasi, bukan dump seluruh hasil scrape.
- Gunakan aset terbesar/terkuat untuk hero atau full bleed.
- Reel harus autoplay muted + playsinline hanya saat masuk viewport.
- Jangan autoplay semua video sekaligus.
- Poster/fallback image wajib untuk video penting.
- Aset scrape mentah boleh tetap di `public/` sebagai archive source.
- Jika sebuah foto terpilih menjadi aset permanen/high-traffic, pindahkan salinannya ke `src/assets/` agar bisa diproses oleh Astro Image/Picture.

## 4. Aturan copy

Gunakan fakta yang tersedia dari sumber SENIMEN. Jangan mengarang sejarah, founder story, jumlah anggota, prestasi, sponsor, jadwal, alamat venue, atau klaim komunitas.

Prioritas bahasa:

1. nama event/karya/ruang asli;
2. deskripsi konkret;
3. potongan kalimat editorial;
4. baru kemudian slogan.

Jika satu paragraph bisa dipotong 30% tanpa kehilangan informasi, potong.

## 5. Astro architecture

- `src/pages/` untuk route.
- `src/layouts/` untuk shell, metadata, dan transitions.
- `src/components/` untuk unit reusable.
- `src/data/` untuk kurasi yang dipakai banyak route.
- `public/` untuk media mentah/besar yang harus disajikan apa adanya.
- Hindari `set:html` untuk merender seluruh legacy page.
- JavaScript browser harus kecil dan terisolasi. Jangan hydrate framework UI hanya untuk animasi sederhana.
- Gunakan View Transitions untuk continuity antar-route, bukan untuk membuat semua navigasi terasa lambat.

## 6. Definition of done untuk perubahan visual

Sebelum merge/deploy, tanyakan:

- Apakah ini terasa spesifik milik Senimen?
- Apakah media asli masih menjadi pusat perhatian?
- Apakah section ini punya alasan untuk ada?
- Apakah motion membantu atau cuma dekorasi?
- Apakah copy menyampaikan sesuatu yang nyata?
- Apakah mobile punya komposisi sendiri, bukan sekadar desktop yang diperkecil?
- Apakah perubahan tetap nyaman saat `prefers-reduced-motion` aktif?

Kalau jawabannya tidak jelas, jangan tambahkan elemen tersebut.
