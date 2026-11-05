# Muhammad Sultan Fajar Saepudin — Portfolio

Website statis HTML5, CSS3, dan JavaScript vanilla untuk portofolio Game Design, Game UI Design, dan Graphic Design. Tema charcoal dan aksen lime dipertahankan. Tanpa backend, database, dependensi, atau build.

## Preview lokal

Buka `index.html` di browser modern, atau jalankan dari folder proyek:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Buka http://127.0.0.1:8080. Hentikan dengan Ctrl+C. Salin email bergantung pada izin clipboard browser; jika gagal, alamat ditampilkan untuk penyalinan manual.

## Struktur

- `index.html`: Home, About Me, Skills, empat kartu Projects, Contact, dan wadah dialog detail.
- `style.css`: tema, screenshot, galeri responsif, focus state, dan reduced motion.
- `script.js`: data empat proyek, urutan galeri, dialog, navigasi, dan salin email.
- `assets/`: favicon dan 11 screenshot asli.

Urutan proyek: Reckless Order (2026), Fragile Delivery (2025), Rats Be Gone (2025), Turbo Pedal (2025).

Setiap detail berisi Project Header, Project Overview, Role & Tools, Contributions, Project Gallery, dan Play Game. Link itch.io membuka tab baru dengan noopener noreferrer. Dialog mendukung tombol tutup, Escape, klik backdrop, dan pengembalian fokus ke tombol pemicu.

## Gambar

Semua gambar berikut ditemukan di `assets/` dan digunakan tanpa perubahan isi, nama, atau ekstensi. Angka pada nama file menentukan urutan galeri. File nomor 1 menjadi thumbnail kartu.

| Proyek | File dalam assets | Caption |
| --- | --- | --- |
| Reckless Order | `RecklessOrder1.png` | Main Menu — Desain logo, tombol, dan ikon permainan. |
| Reckless Order | `RecklessOrder2.png` | Gameplay — Desain UI Alert Bar yang terletak di sisi kanan layar. |
| Reckless Order | `RecklessOrder3.png` | Pause Screen — Desain antarmuka dan tombol navigasi. |
| Fragile Delivery | `FragileDelivery1.png` | Main Menu — Tampilan menu utama game. |
| Fragile Delivery | `FragileDelivery2.png` | Upgrade Icons — Desain ikon yang digunakan pada sistem upgrade. |
| Fragile Delivery | `FragileDelivery3.png` | Gameplay — Tampilan permainan dan elemen gameplay. |
| Rats Be Gone | `RatsBeGone1.png` | Main Menu — Tampilan menu utama game. |
| Rats Be Gone | `RatsBeGone2.png` | Gameplay — Tampilan permainan. |
| Rats Be Gone | `RatsBeGone3.png` | Pause Screen — Tampilan antarmuka ketika permainan dijeda. |
| Turbo Pedal | `TurboPedal1.png` | Main Menu — Tampilan menu utama game. |
| Turbo Pedal | `TurboPedal2.png` | Gameplay — Tampilan permainan. |

Tidak ada gambar yang masih perlu ditambahkan. Screenshot mempertahankan rasio asli dengan object-fit: contain, tanpa crop, pembesaran hover, atau distorsi. Landscape pada galeri tampil satu kolom agar mudah dilihat; dua portrait Turbo Pedal berdampingan di desktop dan satu kolom di mobile. Gambar tidak diperbesar melampaui resolusi aslinya. Gambar di bawah fold memakai lazy loading, seluruh gambar memiliki dimensi intrinsik serta decoding async.

Jika file galeri hilang kemudian, detail menampilkan path yang perlu dipulihkan. Gunakan huruf besar/kecil nama file persis seperti tabel karena GitHub Pages peka terhadap penulisan path.

## Mengubah konten

Edit objek projects di awal `script.js`: title, year, genre, role, tools, overview, contributions, gallery, dan demo. Item gallery berisi src, caption, width, dan height asli. Sesuaikan juga kartu HTML statis di `index.html`, termasuk thumbnail pertama, caption, peran, dan data-project. Kartu tetap terlihat tanpa JavaScript. Detail dan menu mobile memerlukan JavaScript; link game fallback tersedia melalui noscript.

Biodata, skills, dan email ada di `index.html`. Jika email berubah, perbarui juga handler salin di akhir `script.js`.

## GitHub Pages

Semua path aset relatif. Website mendukung root repository dan subpath project site, tanpa konfigurasi build, CDN, API key, atau environment variable.

Ketika publikasi diminta: unggah file utama dan folder assets ke repository, lalu pilih Settings → Pages → Deploy from a branch → main → / (root). Revisi ini hanya disimpan lokal, tanpa deployment atau push ke GitHub.

## Validasi

Periksa empat proyek dan urutannya, caption, link itch.io, menu mobile, Tab/Enter/Escape, pengembalian fokus dialog, rasio gambar, dan tampilan desktop/tablet/mobile. Periksa sintaks JavaScript dengan `node --check script.js`.


Pemeriksaan revisi: localhost mengembalikan HTTP 200; sintaks JavaScript valid; empat detail proyek dan 11 gambar dimuat; urutan bagian, caption, tools, dan tujuan link sesuai data yang diberikan. Diuji pada desktop 1280px, tablet 768px, mobile 390px dan 320px, termasuk menu mobile, Enter, Escape, dan pengembalian fokus. Tidak ada error JavaScript yang tercatat atau overflow horizontal pada ukuran yang diuji. Hash SHA-256 seluruh PNG sama dengan sebelum revisi. Pengujian ini tidak melakukan deployment dan tidak menilai fungsionalitas game pada situs eksternal.
