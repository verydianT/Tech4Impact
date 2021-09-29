/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*  - Type Error = kesalahan ketika function mendapat nilai dengan tipe yang tidak sesuai atau variabel / parameter tidak valid
    - Reference Error = kesalahan ketika variabel atau parameter belum dideklarasikan sebelum dipanggil
    - Range Error = kesalahan ketika variabel numerik atau parameter berada di luar batas yang ditentukan
    - Syntax Error = kesalahan pada penulisan ejaan suatu code ataupun struktur codenya.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*  - Terjadi error pada kode yang dibuat
    - kategori Reference Error
    - karena variabel dipanggil terlebih dahulu oleh (console.log) baru dideklarasi variabelnya
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
