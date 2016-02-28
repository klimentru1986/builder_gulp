(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var img =  function() {
	return G.gulp.src(paths.img)
		.pipe(G.imagemin({
			progressive: true,
			interlaced: true,
		}))
		.pipe(G.gulp.dest(paths.dev + '/img'));
};

	module.exports = img
})()