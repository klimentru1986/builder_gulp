(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var sass =  function () {
	return G.gulp.src(paths.sass)
	.pipe(G.sourcemaps.init())
	.pipe(G.plumber())
    .pipe(G.sass().on('error', G.sass.logError))
    .pipe(G.sourcemaps.write())
    .pipe(G.gulp.dest(paths.dev + '/css'))
};

	module.exports = sass
})()