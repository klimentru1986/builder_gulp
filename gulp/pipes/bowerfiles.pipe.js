(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var bowerFiles =  function() {
		  return G.gulp.src(G.bowerFiles())
		    .pipe(G.gulp.dest(paths.dev+'/bower'));
		};

	module.exports = bowerFiles
})()