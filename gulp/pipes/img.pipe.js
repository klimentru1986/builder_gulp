(function () {
	'use strict';

	var G = require('../gulpplugins.js');
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

	var img =  function() {
	
		if(env === 'dev'){
			return G.gulp.src(paths.img)
			.pipe(G.imagemin({
				progressive: true,
				interlaced: true,
			}))
			.pipe(G.gulp.dest(paths.dev + '/img'));
	
		}else if(env === 'dist'){ 
			return G.gulp.src(paths.img)
			.pipe(G.imagemin({
				progressive: true,
				interlaced: true,
			}))
			.pipe(G.gulp.dest(paths.dist + '/img'));
		}
	};

	module.exports = img
})()