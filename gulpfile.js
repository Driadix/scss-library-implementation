const { src, dest, watch, series } = require('gulp');
const purgecss = require('gulp-purgecss');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('my-library/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'));
}

function watchStyles() {
  watch(['my-library/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchStyles);
