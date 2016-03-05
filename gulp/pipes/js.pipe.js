(function () {
	'use strict';

	var G = require('../gulpplugins.js');
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

	var js =  function() {

		if(env === 'dev'){
			return G.gulp.src(paths.js)
			.pipe(G.gulp.dest(paths.dev + '/js'))
		}else if(env === 'dist'){ 
			return G.gulp.src(paths.js)
			.pipe(G.gulp.dest(paths.dist + '/js'))
		}
	};

	module.exports = js
})()