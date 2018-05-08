var elixir = require('laravel-elixir');
require('laravel-elixir-config');
require('./gulp.reload.extension.js')
// var gzip = require('gulp-gzip');
// var Task = elixir.Task;

// elixir.extend('el_gzip',function(){
//   new Task('dgzip',function(){
//     var base = './app/dist/';
//     var location = './app/dist/components.min.js';
//   gulp.src(location)
//   	.pipe(gzip({append: true}))
//     .pipe(gulp.dest(base));
//   });
//   //  return this.queueTask('dgzip');
// });
//

watch_files = [
  "./app/libs/angular-material/angular-material.css",
  "./app/libs/bootstrap/dist/css/bootstrap.min.css"
];


elixir(function(mix) {
  mix
  .styles(watch_files,'./app/dist/styles.min.css')
  .g_label_title('gulp.styles.js') 

  .g_restart('gulp.styles.js',watch_files,['styles'])
  ;
});

gulp.task('default',['label_title','styles'])
