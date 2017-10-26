const gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    log = util.log;

gulp.task('default', ['sass', 'test'], function () {
    console.log('GULP')
    gulp.watch('test.scss', ['sass'])
    console.log('watching')
})

gulp.task('test', function () {
    console.log('this is where task code goeees!!')
})

gulp.task('sass', function () {
    return gulp.src('test.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('test.scss', ['sass'])
    console.log('watching')
})