var elixir = require('laravel-elixir');
require('laravel-elixir-config');
require('./gulp.reload.extension.js')
// var gzip = require('gulp-gzip');
var Task = elixir.Task;

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

watch_files = [
  "./app/libs/jquery/dist/jquery.min.js",
  "./app/libs/lodash/dist/lodash.min.js",
  "./app/libs/angular/angular.js",
  "./app/libs/restangular/dist/restangular.min.js",
  "./app/libs/angular-ui-router/release/angular-ui-router.js",
  "./app/libs/angular-animate/angular-animate.js",
  "./app/libs/angular-aria/angular-aria.js",
  "./app/libs/angular-messages/angular-messages.js",
  "./app/libs/angular-material/angular-material.js",
  "./app/libs/angular-bootstrap/ui-bootstrap.min.js"
];

elixir(function(mix) {
  mix
  .scripts(watch_files,'./app/dist/components.min.js')
  .g_label_title('gulp.components.js')

  .g_restart('gulp.components.js',watch_files,['scripts'])
  ;
});

gulp.task('default',['label_title','scripts'])
