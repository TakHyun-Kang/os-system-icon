'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import del from 'del';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import pug from 'gulp-pug';

const DIR = {
  SRC: 'src',
  IMG: 'src/imgs',
  DEST: 'dist',
};

const SRC = {
  SASS: DIR.SRC + '/*.scss',
  IMAGES: DIR.IMG + '/*',
  HTML: DIR.SRC + '/*.html',
  PUG: DIR.SRC + '/*.pug'
};

const DEST = {
  SASS: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/imgs',
  HTML: DIR.DEST + '/',
  PUG: DIR.DEST + '/',
};

gulp.task('pug', () => {
  return gulp.src(SRC.PUG)
    .pipe(pug({doctype: 'html'}))
    .pipe(gulp.dest(DEST.PUG))
});
gulp.task('sass', () => {
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
  gulp.watch(SRC.SASS, ['sass']);
  gulp.watch(SRC.EX_SASS, ['ex_sass']);
  gulp.watch(SRC.IMAGES, ['images']);
  gulp.watch(SRC.PUG, ['pug']);
});

gulp.task('default', ['clean', 'watch', 'sass', 'images', 'pug'], () => {
  gutil.log('Gulp is running');
});
