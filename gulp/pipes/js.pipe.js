(function () {
	'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		options = require('../comandline.js'),
		env = options.env;

	var js =  function() {

		if(env === 'dev'){
			return G.gulp.src(paths.js)
			.pipe(G.concat('main.js', {newLine: ';'}))
			.pipe(G.plumber())
			.pipe(G.gulp.dest(paths.dev + '/js'))
		}else if(env === 'dist'){ 
			return G.gulp.src(paths.js)
			.pipe(G.uglify())
			.pipe(G.concat('main.js', {newLine: ';'}))
			.pipe(G.plumber())
			.pipe(G.uglify().on('error', function(e) {
				console.log(e);
			}))
			.pipe(G.gulp.dest(paths.dist + '/js'))
		}
	};

	module.exports = js
})()