# Aplikasi Chat Socket.IO

Proyek ini adalah aplikasi chat sederhana yang dibangun menggunakan Socket.IO dan Express.js.

## Struktur Proyek

- `server.js`: File ini berisi logika sisi server menggunakan Express.js dan Socket.IO untuk menangani koneksi masuk, pesan, dan manajemen ruangan.
- Direktori `public`: Berisi kode sisi klien, termasuk file HTML, CSS, dan JavaScript untuk aplikasi chat.

## Server (`server.js`)

File `server.js` mengatur server Express.js dan mengintegrasikan Socket.IO untuk komunikasi real-time. Berikut cara kerjanya:

- **Pengaturan Server Express**: Memulai server Express menggunakan `express()` dan membuat server HTTP menggunakan `http.createServer()` sebagai dasar untuk Socket.IO.
- **Integrasi Socket.IO**: Menetapkan koneksi Socket.IO (`io`) di atas server HTTP (`server`).
- **Event Socket**:
  - `connection`: Mendengarkan koneksi soket masuk.
  - `join`: Menangani saat pengguna bergabung dengan ruang obrolan.
  - `chat message`: Menangani pertukaran pesan obrolan dalam sebuah ruangan.
  - `disconnect`: Mendengarkan pemutusan soket.

## Klien (`public` directory)

Direktori `public` berisi kode sisi klien untuk aplikasi chat:

- `index.html`: Berisi struktur HTML antarmuka chat, termasuk bidang input untuk ID ruangan, nama pengguna, jendela obrolan, dan input pesan.
- `style.css`: Berisi gaya CSS untuk elemen antarmuka chat.
- `client.js`: Mengimplementasikan logika JavaScript sisi klien. Ini termasuk listener acara untuk pengiriman formulir, pengiriman pesan, dan tampilan pesan yang diterima. Juga, ini membentuk koneksi dengan server Socket.IO.

## Penggunaan

1. **Clone Repositori**:

   ```bash
   git clone https://github.com/yourusername/socket-io-chat-app.git
   ```

2. **Install Dependensi**:

   ```bash
   cd socket-io-chat-app
   npm install
   ```

3. **Memulai Server**:

   ```bash
   node server.js
   ```

   Server akan berjalan di `http://localhost:3000`.

4. **Akses Aplikasi Chat**:
   Buka browser web dan buka `http://localhost:3000` untuk mengakses antarmuka chat. Masukkan ID ruangan dan nama pengguna untuk bergabung dengan obrolan.

## Catatan

- Anda mungkin perlu menyesuaikan URL server di `client.js` jika server Anda dihosting di alamat/port yang berbeda.
- Untuk produksi, pertimbangkan untuk menambahkan langkah-langkah keamanan dan optimisasi lebih lanjut.

Silakan jelajahi dan modifikasi kode sesuai kebutuhan Anda!

```

README.md ini menjelaskan struktur proyek, rincian tentang bagaimana file `server.js` bekerja dalam menangani event Socket.IO, dan mendeskripsikan tujuan dari direktori `public` untuk kode sisi klien. Ini juga memberikan instruksi tentang cara clone proyek, install dependensi, memulai server, dan mengakses aplikasi chat.
```
