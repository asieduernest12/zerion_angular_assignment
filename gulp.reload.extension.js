var elixir = require('laravel-elixir');
var exec = require('child_process').exec;


elixir.extend('g_restart',function(filename,watch_files,ops){
  gulp.slurped = false;
  gulp.task('watch',function(){
    gulp_ops = ops;
    gulp_ops[gulp_ops.length] = 'default'
    if(!gulp.slurped){
      gulp.watch(filename,gulp_ops);//restart gulp on filename:gulpfile change
      gulp.watch(watch_files,ops);//rebuild watch_files according to filename:gulpfile
      // gulp.slupred = true;
    }
  });
});

elixir.extend('g_label_title',function(filename){
  gulp.task('label_title',function(cb){
    exec('title Gulp build: '+ filename,function(err,stdout,stderr){
      console.log(stdout);
      // console.log(stderr);
    cb(err);
    });
  });
});
