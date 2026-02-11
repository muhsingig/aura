@echo off
echo GIT STATUS: > git_debug.txt
git status >> git_debug.txt 2>&1
echo. >> git_debug.txt
echo GIT REMOTE: >> git_debug.txt
git remote -v >> git_debug.txt 2>&1
echo. >> git_debug.txt
echo GIT LOG: >> git_debug.txt
git log -1 >> git_debug.txt 2>&1
