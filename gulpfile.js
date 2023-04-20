const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('my-library/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchStyles() {
  watch(['my-library/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchStyles);
