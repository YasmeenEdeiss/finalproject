import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['parcel starter/index.html']));
gulp.task('test', shell.task(['mocha starter/test/*.js']));
gulp.task('e2e', shell.task(['npx cypress run']));
