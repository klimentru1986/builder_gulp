(function () {
	'use strict';
	
	var G = require('../gulpplugins.js');	
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

	var jade =  function() {
		
		var YOUR_LOCALS = {};

		if(env === 'dev'){
			return G.gulp.src(paths.jade)
			.pipe(G.plumber())
			.pipe(G.jade({
				locals: YOUR_LOCALS,
				pretty: '\t',
			}))
			.pipe(G.gulp.dest(paths.dev))

		}else if(env === 'dist'){ 
			return G.gulp.src(paths.jade)
			.pipe(G.plumber())
			.pipe(G.jade({
				locals: YOUR_LOCALS,
			}))
			.pipe(G.gulp.dest(paths.dist))
		}
	};

	module.exports = jade
})()