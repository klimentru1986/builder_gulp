(function () {
	'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		bowerPaths = require('../paths.bower.js'),
		options = require('../comandline.js'),
		env = options.env;

	var bowerComponents =  function() {

		if(env === 'dev'){
			return G.gulp.src(bowerPaths)
			.pipe(G.concat('bowerLibs.min.js', {newLine: ';'}))
			.pipe(G.uglify().on('error', function(e) {
				console.log(e);
			}))
			.pipe(G.gulp.dest(paths.dev+'/js'));

		}else if(env === 'dist'){
			return G.gulp.src(bowerPaths)
			.pipe(G.concat('bowerLibs.min.js', {newLine: ';'}))
			.pipe(G.uglify().on('error', function(e) {
				console.log(e);
			}))
			.pipe(G.gulp.dest(paths.dist+'/js'));
		}

	};

	module.exports = bowerComponents
})()