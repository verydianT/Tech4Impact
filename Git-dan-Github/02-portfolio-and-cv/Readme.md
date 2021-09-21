1. mkdir verydianT
2. echo -e "Halo perkenalkan aku halaman utama" >> README.md
   ![image](https://user-images.githubusercontent.com/87766711/134195310-4f248733-aa75-4ad2-9451-447675d7cbc5.png)
4. git init // git commit -m "Inisialisasi Git Repository"
   ![image](https://user-images.githubusercontent.com/87766711/134196613-b6d50a4f-4ebd-476a-a7f4-db9d83a8a049.png)
6. git branch cv
7. git checkout cv // echo -e "Ini adalah file CV" >> cv.txt
   ![image](https://user-images.githubusercontent.com/87766711/134195630-477a32c0-4480-4752-95ed-ccf74786ffca.png)
8. git add cv.txt // git commit -m "Inisialisasi CV"
   ![image](https://user-images.githubusercontent.com/87766711/134195879-46b923d6-83e7-4cbb-8bf0-10b7e35d420e.png)
10. #echo -e "1. Tokopedia" >> cv.txt // git add cv.txt // git commit -m "perusahaan 1"
   #echo -e "1. Bukalapak" >> cv.txt // git add cv.txt // git commit -m "perusahaan 2"
   #echo -e "1. Kompas" >> cv.txt // git add cv.txt // git commit -m "perusahaan 3"
8. git checkout master
9. echo -e "\n\nIni adalah update pertama pada branch master" >> README.md // git add // git commit -m "update master pertama"
   ![image](https://user-images.githubusercontent.com/87766711/134196459-bd1247ac-039d-4b19-b283-654a1d2492b6.png)
11. git merge CV
12. git remote add origin https://github.com/verydianT/Git.git // git push -u origin master
