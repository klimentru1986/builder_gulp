(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var extras =  function () {
			return G.gulp.src(paths.extras)
			.pipe(G.gulp.dest(paths.dev));
		};

	module.exports = extras
})()