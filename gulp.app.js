var elixir = require('laravel-elixir');
// var gzip = require('gulp-gzip');
require('laravel-elixir-config');
require('./gulp.reload.extension.js')
var Task = elixir.Task;

// elixir.extend('el_gzip',function(){
//   new Task('dgzip',function(){
//     var base = './app/dist/';
//     var location = './app/dist/app.min.js';
//
//   gulp.src(location)
//   	.pipe(gzip({append: true}))
//     .pipe(gulp.dest(base));
//   });
//   //  return this.queueTask('dgzip');
// });
//

watch_files = [
  "./app/src/**/app.js",
  "./app/src/**/config.js",
  "./app/src/**/router.js",
  "./app/src/**/run.js",
  "./app/src/**/*.html",
  "./app/src/**/*.js",
];

elixir(function(mix) {
  mix
  .scripts(watch_files,'./app/dist/app.min.js')
  .g_label_title('gulp.app.js')
  .g_restart('gulp.app.js',watch_files,['scripts'])
  ;
});
gulp.task('default',['label_title','scripts'])
