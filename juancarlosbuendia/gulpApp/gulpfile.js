'use strict';

const gulp = require('gulp');
const  connect = require('gulp-connect');

/*
       --TOP LEVEL FUNCTIONS--

   gulp.task  --Define task
   gulp.src   --point tofiles to use 
   gulp.dest  --points to folder to output 
   gulp.watch --watch files and folder for chnges 



// logs Message
gulp.task('message', function(){
  
   return console.log('Gulp is runnig...');
 
});

// copy  all files
gulp.task('copyHtml', function(){
   gulp.src('src/*.html')
     .pipe(gulp.dest('dist'));
   
   return console.log('Gulp is runnig...');

});


// default logs
gulp.task('def', function(){

   return console.log('Gulp is runnig...');

});

*/


gulp.task('webserver', function() {
	connect.server({
  	    port: 3001,
  	    host: '127.0.0.1'
	});
});
 
 
gulp.task('default', ['webserver']);
