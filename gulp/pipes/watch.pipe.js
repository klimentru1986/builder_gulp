(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var watch =  function(){
	G.gulp.watch('app/jade/**/*.jade', ['jade']);
	G.gulp.watch('app/sass/**/*.scss', ['sass']);
	G.gulp.watch('app/js/**/*.js', ['js']);
	G.gulp.watch(paths.fonts, ['fonts']);
	G.gulp.watch(paths.img, ['img']);
	G.gulp.watch(paths.dev + '/**/*').on('change', G.browserSync.reload)
};

	module.exports = watch
})()