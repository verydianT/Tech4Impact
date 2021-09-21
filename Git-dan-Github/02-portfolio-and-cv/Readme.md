1. mkdir verydianT
2. echo -e "Halo perkenalkan aku halaman utama" >> README.md
3. git init // git commit -m "Inisialisasi Git Repository"
4. git branch cv
5. git checkout cv // echo -e "Ini adalah file CV" >> cv.txt
6. git add cv.txt // git commit -m "Inisialisasi CV"
7. #echo -e "1. Tokopedia" >> cv.txt // git add cv.txt // git commit -m "perusahaan 1"
   #echo -e "1. Bukalapak" >> cv.txt // git add cv.txt // git commit -m "perusahaan 2"
   #echo -e "1. Kompas" >> cv.txt // git add cv.txt // git commit -m "perusahaan 3"
8. git checkout master
9. echo -e "\n\nIni adalah update pertama pada branch master" >> README.md // git add // git commit -m "update master pertama"
10. git merge CV
11. git remote add origin https://github.com/verydianT/Git.git // git push -u origin master