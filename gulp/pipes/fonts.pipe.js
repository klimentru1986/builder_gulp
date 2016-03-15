(function () {
	'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		options = require('../comandline.js'),
		env = options.env;

	var fonts =  function() {

		if(env === 'dev'){
  			return G.gulp.src(paths.fonts)
    		.pipe(G.filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
    		.pipe(G.gulp.dest(paths.dev + '/fonts'))
    	
    	}else if(env === 'dist'){ 
    		return G.gulp.src(paths.fonts)
    		.pipe(G.filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
    		.pipe(G.gulp.dest(paths.dist + '/fonts'))
	    }

};

	module.exports = fonts
})()