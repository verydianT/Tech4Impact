/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if (salary < 5000000) {
        return pajak = salary * 0;
    }
    else if (salary >= 5000000 && salary < 10000000) {
        return pajak = salary * 0.05;
    }
    else if (salary >= 10000000 && salary < 20000000) {
        return pajak = salary * 0.1;
    }
    else if (salary >= 20000000) {
        return pajak = salary * 0.2;
    }
    console.log(pajak);
 }
console.log(taxCalc(4500000));
console.log(taxCalc(5000000));
console.log(taxCalc(20000000));


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight, height) { 
    let BMI = (weight/(height * height)) * 10000;
    if (BMI < 18.5) {
        return "under weight";
    }
    else if (BMI > 18.5 && BMI < 24.9) {
        return "normal";
    }
    else if (BMI > 25 && BMI < 29.9) {
        return "over weight";
    }
    else if (BMI > 30 && BMI < 34.9) {
        return "obese";
    }
    else if (BMI > 35) {
        return "extremely obese";
    }
 }
console.log(checkBMI(80, 170));
console.log(checkBMI(80, 160));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(str) {
    let x = str.split(" ");
    for (let i = 0; i < x.length; i++) {
      let j = x[i].charAt(0).toUpperCase();
      x[i] = j + x[i].substr(1);
    }
    return x.join(" ");
  }
console.log(convToUpperCase("hello bandung"));
console.log(convToUpperCase("helloworldwide"));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(x) {
    for (let i = 0; i < x.length; i++) {
        if (x.includes(" ")) {
            return "kata tidak boleh dipisah";
        }
        let y = x.charAt(i);
        if (x.indexOf(y) == i && x.indexOf(y, i+1) == -1) {
            return y;
        }
    }
    return "";
}
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));