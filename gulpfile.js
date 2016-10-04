/**
 * Created by bbonet on 10/4/16.
 */
var gulp = require('gulp'),
    util = require('gulp-util'),
    mainBowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');

gulp.task('default', function() {
    return util.log('Woot');;
});

gulp.task('copy-bower-files', function(){
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./deploy/dev/js/vendor'));
})

gulp.task('copy-style-files', function(){
   return gulp.src('./app/assets/css/**/*.css')
       .pipe(gulp.dest('./deploy/dev/css'))
});
var sources = gulp.src(['./deploy/dev/**/*.js', './deploy/dev/**/*.css'], {read: false});

gulp.task('copy-index-file', function(){
    return gulp.src('app/index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./deploy/dev'));
})