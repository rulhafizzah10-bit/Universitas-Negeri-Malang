# Media Pembelajaran Bangun Ruang Sisi Lengkung

Proyek ini adalah prototype media pembelajaran interaktif untuk materi bangun ruang sisi lengkung kelas 9.

## Fitur utama
- Model bangun ruang 3D-like dengan hotspot interaktif
- Penjelasan konsep dan rumus berdasarkan bagian yang dipilih
- Latihan soal pilihan ganda yang berubah setiap kali sesi baru dibuat
- Kartu pembelajaran dengan tampilan QR-style untuk simulasi scan

## Bangun ruang yang dibahas
- Kerucut
- Tabung
- Bola

## Cara menjalankan
1. Buka folder proyek.
2. Jalankan server statis sederhana, misalnya:
   ```bash
   python -m http.server 8000
   ```
3. Buka browser ke:
   ```text
   http://localhost:8000
   ```

## Struktur file
- `index.html` : layout utama
- `style.css` : tampilan dan desain 3D
- `app.js` : logika interaktif, hotspot, dan soal

## Catatan
Proyek ini merupakan prototype pembelajaran yang berbasis browser dan cocok untuk dikembangkan lebih lanjut menjadi versi yang lebih kompleks menggunakan Three.js, API QR, atau backend soal dinamis.

