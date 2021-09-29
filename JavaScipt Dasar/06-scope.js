/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*  - 2 variabel yaitu global scope dan lokal scope
    - Global scope yaitu variabel yang dideklarasi di luar fungsi, sehingga variabel dapat digunakan dimana saja.
      Lokal scope yaitu variabel yang dideklarasi di dalam fungsi, sehingga hanya fungsi lokal yang dapat menggunakan variabel tersebut.   
*/  let variabel = "global"; 
    function scope() {  }     // variabel global

    function scope(params) {
          variabel = "lokal"; // variabel lokal
    }


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
/* - Mariah
   - karena dalam baris kode tersebut, console.log membawa nilai (name) sendiri yaitu "Mariah carey". Sehingga
      variabel yg diproses oleh function adalah variabel nilai dari console.log itu sendiri, bukan dari variabel name. 
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
