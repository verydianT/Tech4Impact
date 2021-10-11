//  Soal - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
/*      yaitu pada fun1 akan menampilkan objek fun1 dan fun2 lengkap dengan function fun1 dan fun2
        sedangkan dengan fun2 dia hanya menampilkan tutup kurawa kosong, karena pada fun2 dia tidak dipanggil menggunakan function
*/
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
/*      Berbeda     */
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
/*      Berbeda, karena yang fun1 menggunakan variabel function untuk menampilkan fun1 dan fun2
        sedangkan pada fun2 tidak menggunakan variabel function sehingga hanya berisi {} kosong tanpa ada isi
*/
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

/////////////////////////////////////////////////////////////////
//  Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/* Encapsulation adalah proses dalam membatasi akses ke sebuah function atau method dari sebuah objek.
    Digunakan ketika mendefine objek function, maka nilai yang dideklarasikan oleh const dalam fungsi itu
    tidak akan bisa dirubah.
*/
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/* Abstraction adalah teknik dalam menyembunyikan detail tertentu dari objek dan hanya menampilkan fitur penting
   dari objek tersebut.
    Digunakan ketika kita hanya ingin mengetahui apa fungsi utama dari sebuah method yang dibuat tanpa harus 
    mengetahui bagaimana cara kerjanya
*/
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/* Inheritance atau keturunan adalah mewarisi properti dari parent class.
    Digunakan ketika kita ingin membuat dua buah class, namun masih terdapat suatu hal yang saling berkaitan
    antara class utama dan class turunan.
*/
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/* Polymorpishm atau memiliki banyak bentuk, dimana polymorpishm memiliki struktur yang hampir mirip dengan
   inheritance. Namun dalam polymorpishm, ia dapat membuat method yang menyesuaikan child class yang dibutuhkan
   atau bisa memiliki banyak child class.
    Digunakan ketika dalam suatu keturunan masih memiliki banyak ciri (class) sehingga dapat memuat lebih banyak
    function.
*/
////////////////////////////////////////////////////////////////
//  Soal - 03
class Phone { 
    constructor(brand, storage, ram) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
    }
    setBrandName(brand){
        this.brand = brand;
    }
    getBrandName() {
        return `${this.brand}`;
    }
    setSpecification(storage, ram){
        this.storage = storage;
        this.ram = ram;
    }
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

////////////////////////////////////////////////////////////////
//  Soal - 04
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
    
    takeNewCourse() { 
        this.courseOfferings = Course.subject + 1;
     }
    
    takeATest() { 
        if (this.attendance < this.courseAttendance) {
            return null;
        }else
            return `${this.grade}`
     }
    
    courseAttendance() { 
        return this.attendance = this.attendance + 1;
     }
}
  
class CourseOffering { 
    constructor(course, grade, attendance) {
        this.course = course;
        this.grade = grade;
        this.attendance = attendance [0];
    }
    getCourse() {
        this.course = Course.subject;
        return `${this.course}`;
    }
    getAttendance() {
        this.attendance = Course.attendance;
        return `${this.attendance}`;
    }
}
  
class Course { 
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return `${this.subject}`;
    }
    getAttendance() {
        return `${this.attendance}`;
    }
    decreaseQuota() {
        return this.quota = this.quota - 1;
    }
}
  
  
const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);
  
const johnWatson = new Student("john watson", "male");
  
johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);
  
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);
  
console.log(biology.quota);
console.log(physics.quota);
  
johnWatson.takeATest(biology);
johnWatson.takeATest(physics);
  
console.log(johnWatson.courseOfferings);
