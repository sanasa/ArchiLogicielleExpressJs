# !/bin/bash
echo "begin pushing :)"
cd '/home/sana/Documents/SanaStuff/GL4/2eme semestre/Architecture logicielle/tp2/travail/blueprints-ch2'
git init 1>/var/log/logPushGit.log 2>&1
git add -A  1>>/var/log/logPushGit.log 2>&1
git commit -m "$1" 1>>/var/log/logPushGit.log 2>&1
git remote add origin "https://github.com/saanaaa/ExpresProject.git" 1>>/var/log/logPushGit.log 2>&1
git push -u origin master 1>>/var/log/logPushGit.log 2>&1
echo "done Pushing" !
echo "..."
echo "Build result : "
#bickle builds saanaaa/ExpresProject | head -n 1 | awk 'NF>1{print $NF}'
bickle builds saanaaa/ExpresProject

