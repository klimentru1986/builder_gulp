(function () {
'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		options = require('../comandline.js'),
		env = options.env;

	var extras =  function () {

		if(env === 'dev'){
			return G.gulp.src(paths.extras)
			.pipe(G.gulp.dest(paths.dev));
		}else if(env === 'dist'){
			return G.gulp.src(paths.extras)
			.pipe(G.gulp.dest(paths.dist));
		}
	};

	module.exports = extras
})()