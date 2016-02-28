(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var js =  function() {
		  return G.gulp.src(paths.js)
		    .pipe(G.gulp.dest(paths.dev + '/js'))
		};

	module.exports = js
})()