(function () {
	'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		vendorPaths = require('../paths.vendor.js'),
		options = require('../comandline.js'),
		env = options.env;

	var vendorComponentsJS =  function() {

		if(env === 'dev'){
			return G.gulp.src(vendorPaths.js)
			.pipe(G.concat('vendorLibs.js', {newLine: ';'}))
			.pipe(G.gulp.dest(paths.dev+'/js'));

		}else if(env === 'dist'){
			return G.gulp.src(vendorPaths.js)
			.pipe(G.concat('vendorLibs.js', {newLine: ';'}))
			.pipe(G.uglify().on('error', function(e) {
				console.log(e);
			}))
			.pipe(G.gulp.dest(paths.dist+'/js'));
		}

	};

	module.exports = vendorComponentsJS
})()