'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import del from 'del';
import htmlmin from 'gulp-htmlmin';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';

const DIR = {
  SRC: 'src',
  IMG: 'src/imgs',
  DEST: 'dist'
};

const SRC = {
  SASS: DIR.SRC + '/*.scss',
  IMAGES: DIR.IMG + '/*'
};

const DEST = {
  SASS: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/imgs'
};

gulp.task('sass', () => {
  return gulp.src(SRC.SASS)
    .pipe(gulp.dest(DEST.SASS));
});
gulp.task('sass2', () => {
  return gulp.src(SRC.SASS)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(DEST.SASS));
});
gulp.task('images', () => {
  return gulp.src(SRC.IMAGES)
    .pipe(imagemin())
    .pipe(gulp.dest(DEST.IMAGES));
});
gulp.task('clean', () => {
  return del.sync([DIR.DEST]);
});

gulp.task('watch', () => {
  gulp.watch(SRC.SASS, ['sass2']);
  gulp.watch(SRC.EX_SASS, ['ex_sass']);
  gulp.watch(SRC.IMAGES, ['images']);
});

gulp.task('default', ['clean', 'watch', 'sass', 'sass2', 'images'], () => {
  gutil.log('Gulp is running');
});
