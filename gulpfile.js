const { src, dest } = require("gulp"),
 imagemin = require('gulp-imagemin'),
 mozjpeg = require('imagemin-mozjpeg'),
 pngquant = require('imagemin-pngquant');
 clean = require('gulp-clean');

const taskClean = () =>
  src('images/dest/*', { read: false })
  .pipe(clean());

const taskImagemin = () => 
  src('images/src/*')
  .pipe(imagemin([
    pngquant({ 
    quality: [ 0.65, 0.8 ], speed: 1 
    }),
    mozjpeg({ 
    quality: 80
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

exports.default = taskImagemin;
exports.clean = taskClean;