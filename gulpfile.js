const { src, dest, series } = require("gulp"),
 imagemin = require('gulp-imagemin'),
 mozjpeg = require('imagemin-mozjpeg'),
 pngquant = require('imagemin-pngquant');
 clean = require('gulp-clean');

const QUALITY_JPEG = 80;
const QUALITY_PNG = [ 0.65, 0.8 ];

let timeNow = new Date();
let timeNowYear = timeNow.getFullYear();
let timeNowMonth = timeNow.getMonth() + 1;
let timeNowDate = timeNow.getDate();
let timeNowHours = timeNow.getHours();
let timeNowMinites = timeNow.getMinutes();
let timeNowSeconds = timeNow.getSeconds();

let today = `${timeNowYear}${timeNowMonth}${timeNowDate}_${timeNowHours}${timeNowMinites}_${timeNowSeconds}`;

const taskClean = () =>
  src('images/src/*', { read: false })
  .pipe(clean());

const taskArchive = ()=>
  src('images/src/*')
  .pipe(dest('images/archive/' + today))

const taskImagemin = () => 
  src('images/src/*')
  .pipe(imagemin([
    pngquant({ 
    quality: QUALITY_PNG, speed: 1 
    }),
    mozjpeg({ 
    quality: QUALITY_JPEG
    }),
    imagemin.gifsicle({
    interlaced: false
    }),
    imagemin.svgo({
    plugins: [
      { removeViewBox: true },
      { cleanupIDs: false }
    ]
    }),
  ]))
  .pipe(dest('images/dest'));

exports.default = series(taskImagemin, taskArchive, taskClean);