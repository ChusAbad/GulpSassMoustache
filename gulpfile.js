/*
    REQUIRES GOLBAL VARS
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var cssPath = 'app/assets/css';

/*
    TASKS
*/
gulp.task('compile-sass',function(){
    gulp.src('scss/*.scss')
         .pipe(
                sass({
                    includePaths:['scss']
                })
            )
         .pipe(
                sass({
                    includePaths:[cssPath]
                    })
         );
});


gulp.task('serve',['compile-sass'], function(){
    browserSync.init([cssPath,"*.html"],{
        server:{
            baseDir:'app'
        }
    });
});


gulp.task('default',['compile-sass'])