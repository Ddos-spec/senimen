# SENIMEN 🎨

Website resmi **SENIMEN — Komunitas Seni & Kreatif Independen**.

Frontend saat ini dibuat sebagai static editorial showcase yang media-first. Foto dan video final bisa dimasukkan belakangan tanpa membongkar layout utama.

## Frontend

- `index.html` — struktur homepage dan copy utama
- `styles.css` — layout, typography, responsive system, motion-ready styling
- `brand.css` — layer identitas Senimen: hitam, putih, neon magenta `#F70BBD`
- `app.js` — menu, cursor, reveal, parallax ringan, scroll progress, media loader

Buka `index.html` melalui static server apa pun. Frontend tidak bergantung pada framework.

## Mengganti placeholder dengan media asli

Setiap area visual memakai `.media-slot` dan `data-media-slot`.

Untuk memasukkan asset secara sederhana, tambahkan `data-src`:

```html
<div class="media-slot" data-media-slot="01" data-src="./public/media/pesta-babi.jpg"></div>
```

Video `.mp4`, `.webm`, atau `.mov` akan dikenali oleh `app.js` dan dibuat autoplay, muted, loop, dan playsinline.

Rasio yang sudah disiapkan:

- Hero: portrait / flexible
- Archive 01: 16:9
- Archive 02: 4:5
- Archive 03: 1:1
- Archive 04: 3:4
- Full bleed: landscape/video

## Data Instagram

File scraper dan hasil ekstraksi Instagram dipertahankan terpisah dari frontend, termasuk JSON, screenshot, dan hasil download post. Jangan menghapus data tersebut saat melakukan redesign frontend.

## Sumber identitas saat build awal

- Instagram: `@komunitas_senimen`
- Positioning: Komunitas Seni & Kreatif Independen
- Lokasi: Tangerang, Banten
- Tema: dokumentasi proses, perspektif, ekspresi, kolaborasi
- Primary visual palette: black / white / neon magenta

## Protocol Rules

- Integrated with **AI Council S-Tier Protocol**.
- Preserved in `D:\code\senimen`.
