/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (var n = 1; n < 100; n++) {
    var Prima = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            Prima++;
        }
    }
    if (Prima == 2) {
        console.log(n);
    }
 }


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let bil = 0;
while (primeCounter < 50) {
    let pembagi = 0;
    for (let i = 1; i <= bil; i++) {
        if (bil % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        fiftiethPrime = bil;
        primeCounter++;
    }
    bil++;
}
console.log(`bilangan prima ke-50 = ${fiftiethPrime}`);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let ganjil = 1;
do { 
    if (ganjil % 2 == 1) {
        fiftiethOdd = ganjil;
        oddCounter++;
    }
    ganjil++;
 } while ( oddCounter < 50 );
console.log(`bilangan ganjil ke-50 = ${fiftiethOdd}`)