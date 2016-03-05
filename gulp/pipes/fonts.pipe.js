(function () {
	'use strict';

	var G = require('../gulpplugins.js');
	var paths = require('../paths.js');
	var options = require('../comandline.js');
	var env = options.env;

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