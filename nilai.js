// =============================================================
// nilai.js (STARTER) - LOGIKA hitung nilai, berjalan di BROWSER
//
// LANGKAH 2:
//   Ganti setiap function di bawah dengan versi Anda dari LAB 1 (soal.js).
//   Function di bawah sengaja hanya "stub" agar halaman tetap bisa berjalan.
//
// File ini hanya berisi LOGIKA (hitung nilai). Urusan DOM ada di app.js.
// Uji di Console browser, mis.: tentukanGrade(84.9)  -> 'B'
// =============================================================

function hitungNilaiAkhir(tugas, uts, uas) {
  // TODO: salin dari Lab 1
  return 0;
}

function tentukanGrade(nilai) {
  // TODO: salin dari Lab 1
  return '?';
}

function buatRekap(daftar) {
  // TODO: salin dari Lab 1 (map + spread, tambah nilaiAkhir, grade, lulus)
  return daftar;
}

function hitungRataRata(rekap) {
  // TODO: salin dari Lab 1
  return 0;
}

function cariTertinggi(rekap) {
  // TODO: salin dari Lab 1. Tambahkan: jika rekap kosong -> return null
  return null;
}

function hitungDistribusiGrade(rekap) {
  // TODO: salin dari Lab 1
  return { A: 0, B: 0, C: 0, D: 0, E: 0 };
}

function cariMahasiswa(rekap, kataKunci) {
  // TODO: salin dari Lab 1
  return rekap;
}

// ---- Sudah jadi: validasi input mahasiswa baru (dipakai sebelum memanggil api.js) ----
// Mengembalikan array pesan error; array kosong = valid.
function validasiMahasiswa(input) {
  const errors = [];
  if (typeof input.nim !== 'string' || !/^\d{7}$/.test(input.nim)) {
    errors.push('NIM harus 7 digit angka');
  }
  if (typeof input.nama !== 'string' || input.nama.trim().length < 3) {
    errors.push('Nama minimal 3 karakter');
  }
  for (const kolom of ['tugas', 'uts', 'uas']) {
    const n = input[kolom];
    if (typeof n !== 'number' || !Number.isFinite(n) || n < 0 || n > 100) {
      errors.push(`Nilai ${kolom} harus angka 0-100`);
    }
  }
  return errors;
}
