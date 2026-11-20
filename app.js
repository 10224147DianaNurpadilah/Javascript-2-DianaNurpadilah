// =============================================================
// LAB 2 - app.js (STARTER) - berjalan di BROWSER
// DOM + event + async/await.
// Memakai function dari nilai.js (hitung nilai) dan api.js (data),
// yang sudah dimuat lebih dulu oleh index.html.
//
// Kerjakan TODO sesuai urutan LANGKAH di "Sesi 2" (Langkah 3 - 7).
// Simpan file -> refresh browser (Cmd+R / Ctrl+R) -> cek Console (F12).
// =============================================================
// ---------- Sudah jadi: pilih elemen ----------
const tbody = document.querySelector('#tabel-body');
const form = document.querySelector('#form-mahasiswa');
const inputCari = document.querySelector('#cari');
const pesan = document.querySelector('#pesan');

let semuaData = [];   // hasil rekap (sudah ada nilaiAkhir, grade, lulus)

// =============================================================
// LANGKAH 3a: ambil data dari API (api.js)
// =============================================================
async function muatData() {
  // TODO:
  //  1. const daftar = await ambilMahasiswa()  <- data mentah: nim, nama, tugas, uts, uas
  //  2. semuaData = buatRekap(daftar)          <- hitung nilai (fungsi Lab 1)
  //  3. panggil tampilkan()
  //  Bungkus dengan try/catch; di catch panggil
  //  tampilkanPesan(`Gagal memuat data: ${err.message}`, 'error')
}

// Sudah jadi: menampilkan tabel (hasil pencarian) + statistik (seluruh data)
function tampilkan() {
  const hasilCari = cariMahasiswa(semuaData, inputCari.value);
  renderTabel(hasilCari);
  renderStatistik(semuaData);
}

// =============================================================
// LANGKAH 3b: tampilkan data ke tabel
// =============================================================
function renderTabel(data) {
  tbody.replaceChildren();   // kosongkan isi tabel

  // TODO:
  //  Untuk setiap mahasiswa m di data (for...of):
  //   1. buat <tr>, beri class 'lulus' atau 'tidak-lulus' (classList.add)
  //   2. untuk setiap nilai di [m.nim, m.nama, m.tugas, m.uts, m.uas, m.nilaiAkhir, m.grade]
  //      buat <td>, isi dengan textContent (BUKAN innerHTML), append ke <tr>
  //   3. append <tr> ke tbody
  //
  //  BONUS (Langkah 7): tambahkan <td> berisi <button class="btn-hapus" data-nim="...">Hapus</button>
  //
  //  Jika data kosong: tampilkan satu baris "Tidak ada data" (td.colSpan = 8)
}

// =============================================================
// LANGKAH 4: statistik
// =============================================================
function renderStatistik(data) {
  // TODO: isi textContent dari elemen berikut memakai function dari nilai.js
  //  #stat-jumlah      -> jumlah mahasiswa
  //  #stat-lulus       -> contoh "6/8"        (filter m.lulus)
  //  #stat-rata        -> hitungRataRata(data)
  //  #stat-tertinggi   -> contoh "Siti Nurhaliza (92)"  (cariTertinggi, hati-hati jika null)
  //  #stat-distribusi  -> contoh "A: 1 · B: 3 · C: 2 · D: 1 · E: 1"
  //                       Petunjuk: Object.entries(hitungDistribusiGrade(data)).map(...).join(' · ')
}

// Sudah jadi
function tampilkanPesan(teks, jenis) {
  pesan.textContent = teks;
  pesan.className = jenis;   // 'sukses' atau 'error' (lihat style.css)
}

// =============================================================
// LANGKAH 5: pencarian
// =============================================================
// TODO: saat user mengetik di inputCari (event 'input'), panggil tampilkan()

// =============================================================
// LANGKAH 6: tambah mahasiswa
// =============================================================
form.addEventListener('submit', async (event) => {
  event.preventDefault();   // cegah reload halaman

  const f = new FormData(form);
  const baru = {
    nim: f.get('nim').trim(),
    nama: f.get('nama').trim(),
    tugas: f.get('tugas') === '' ? NaN : Number(f.get('tugas')),
    uts: f.get('uts') === '' ? NaN : Number(f.get('uts')),
    uas: f.get('uas') === '' ? NaN : Number(f.get('uas')),
  };

  // TODO:
  //  1. const errors = validasiMahasiswa(baru); jika ada error -> tampilkanPesan(..., 'error') lalu return
  //  2. simpan lewat API:  const hasil = await tambahMahasiswa(baru);
  //     (jika ditolak, api.js melempar Error -> otomatis masuk ke catch)
  //  3. const [r] = buatRekap([hasil]);
  //     tampilkanPesan(`${r.nama} tersimpan: nilai ${r.nilaiAkhir} (${r.grade})`, 'sukses')
  //  4. form.reset(), lalu await muatData()
  //  Bungkus langkah 2-4 dengan try/catch;
  //  di catch: tampilkanPesan(`Gagal menyimpan: ${err.message}`, 'error')
});

// =============================================================
// LANGKAH 7 (BONUS): hapus dengan event delegation
// =============================================================
// TODO: satu listener 'click' di tbody.
//  const tombol = event.target.closest('.btn-hapus'); if (!tombol) return;
//  ambil nim dari tombol.dataset.nim, konfirmasi dengan confirm(...),
//  const teks = await hapusMahasiswa(nim); tampilkanPesan(teks, 'sukses'); lalu muatData()
//  (bungkus dengan try/catch)

// ---------- Mulai ----------
muatData();
