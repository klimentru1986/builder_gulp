(function () {
	'use strict';

	var G = require('../gulpplugins.js');
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

	var bowerFiles =  function() {

		if(env === 'dev'){
			return G.gulp.src(G.bowerFiles())
			.pipe(G.gulp.dest(paths.dev+'/bower'));

		}else if(env === 'dist'){
			return G.gulp.src(G.bowerFiles())
			.pipe(G.gulp.dest(paths.dist+'/bower'));
		}

	};

	module.exports = bowerFiles
})()