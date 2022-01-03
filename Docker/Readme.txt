1. Jelaskan apa yang dimaksud dengan container pada docker !
2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
3. Apa yang dimaksud dengan docker file ?
4. Apa yang dimaksud dengan docker registery ?
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

Jawab
1. Container merupakan sebuah wadah untuk mengemas dan menjalankan aplikasi. Dimana didalamnya terdiri dari kumpulan library dan dependency pada sebuah image.
   Cara kerja container yaitu seperti sebuah mesin virtual, dimana ia membuat abstraksi pada layer aplikasi sehingga aplikasi yang dijalankan terisolasi antar satu sama lain.

2. Dalam melakukan sebuah abstraksi, container melakukan abstraksi pada bagian aplikasi saja dan berjalan pada host os nya. Sedangkan pada virtual machine melakukan abstraksi
   pada bagian physical hardware sehingga akan banyak resource yang ikut melakukan booting, hal itu yang menyebabkan vm berjalan menjadi lebih lama.

3. Docker file merupakan sebuah file yang berisi konfigurasi (command terminal) dalam membuat sebuah image docker.

4. Docker registry merupakan sebuah tempat untuk menyimpan image, sehingga dapat diakses oleh orang lain layaknya sebuah github.

5. Dengan membuat setup di satu file docker-compose.yml, lalu didalamnya kita akan menggabungkan beberapa container yang berbeda menjadi satu container sehingga dapat terhubung dan dijalankan secara bersamaan