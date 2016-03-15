(function () {
'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		options = require('../comandline.js'),
		env = options.env;

	var sass =  function () {
	
		if(env === 'dev'){
			return G.gulp.src(paths.sass)
			.pipe(G.sourcemaps.init())
			.pipe(G.plumber())
	    	.pipe(G.sass().on('error', G.sass.logError))
	    	.pipe(G.sourcemaps.write())
	    	.pipe(G.gulp.dest(paths.dev + '/css'))
	   
	    }else if(env === 'dist'){
	    	return G.gulp.src(paths.sass)
			.pipe(G.plumber())
	    	.pipe(G.sass().on('error', G.sass.logError))
	    	.pipe(G.autoprefixer({
					browsers: ['last 5 versions'],
					cascade: false
			}))
			.pipe(G.cssnano())
	    	.pipe(G.gulp.dest(paths.dist + '/css'))
	    }
	
	};

	module.exports = sass
})()