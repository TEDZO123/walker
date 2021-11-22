#!/usr/bin/bash

pkg install cmatrix -y
pkg install cowsay -y
pkg install figlet -y
pkg update -y
pkg upgrade -y
pkg install wget -y
pkg install ffmpeg libwebp -y
pkg install nodejs -y
pkg install npm -y
pkg install tesseract -y
npm i -g npm@6.14.14
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix
npm start