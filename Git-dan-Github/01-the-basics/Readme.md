1. Create a folder called 'git-basic'. **mkdir git-basic**
2. 'cd' into the 'git-basic' folder. **cd git-basic**
3. Create a file called 'first.txt'. **touch first.txt**
Initialize an empty git repository. **git init**
Add 'first.txt' to the staging area. **git add first.txt**
Commit with the message "adding first.txt". **git commit -m "adding first.txt"**
Check out your commit with 'git log'. **git log**
Create another file called 'second.txt'. **touch second.txt**
Add 'second.txt' to the staging area. **git add second.txt**
Commit with the message "adding second.txt". **git commit -m "adding second.txt"**
Remove the 'first.txt' file. **rm first.txt**
Add this change to the staging area. **git add .**
Commit with the message "removing first.txt". **git commit -m "removing first.txt"**
Check out your commits using git log. **git log**
