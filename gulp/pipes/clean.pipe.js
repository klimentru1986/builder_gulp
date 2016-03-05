(function () {
'use strict';

	var G = require('../gulpplugins.js');
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

	var clean =  function() {
		if(env === 'dev'){
			return G.gulp.src(paths.dev, { read: false })
			.pipe(G.rimraf());
			
		}else if(env === 'dist'){
			return G.gulp.src(paths.dist, { read: false })
			.pipe(G.rimraf());
		}
	};

	module.exports = clean
})()