1. What does `git clean` do? **untuk menghapus file-file yang untracked dalam working directory repo, sehingga memiliki fungsi yang mirip dengan undo command**
2. What do the `-d and -f` flags for `git clean` do? **`-d` digunakan dalam menghapus untracked directory sedangkan `-f` digunakan dalam menghapus untracked folder ataupun file-file**
3. What `git` command creates a branch? **git branch [nama branch]**
4. What is the difference between a fast-forward and recursive merge? **Kalau fast-forward ia memiliki ciri straight line of history sedangkan recursive merge terdiri dari beberapa baris dan commitnya punya 2 parents yaitu kurang lebih tidak ada yang benar atau salah dari keduanya**
5. What `git` command changes to another branch? **git checkout [nama branch]**
6. How do you remove modified or deleted files from the working directory? **dengan git reset --hard**
7. What `git` command deletes a branch? **dengan git branch -d**
8. What does the `git diff` command do? **menunjukkan perbedaan antara working tree dengan index dan perubahan antara index dan tree dalam suatu disk**
9. How do you remove files from the staging area? **git reset HEAD [nama file]**
10. How do merge conflicts happen? **Saat 2 orang melakukan perubahan pada line yang sama di suatu file, atau ketika satu developer melakukan delete file sementara developer lain sedang melakukan modifikasi**