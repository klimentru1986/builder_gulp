(function () {
	'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		vendorPaths = require('../paths.vendor.js'),
		options = require('../comandline.js'),
		env = options.env;

	var vendorComponentsCSS =  function() {

		if(env === 'dev'){
			return G.gulp.src(vendorPaths.css)
			.pipe(G.concat('vendorLibs.css', {newLine: ';'}))
			.pipe(G.gulp.dest(paths.dev+'/css'));

		}else if(env === 'dist'){
			return G.gulp.src(vendorPaths.css)
			.pipe(G.concat('vendorLibs.css', {newLine: ';'}))
			.pipe(G.gulp.dest(paths.dist+'/css'));
		}

	};

	module.exports = vendorComponentsCSS
})()