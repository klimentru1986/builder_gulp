(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var jade =  function() {
	  var YOUR_LOCALS = {};
	 
	  return G.gulp.src(paths.jade)
		.pipe(G.plumber())
	    .pipe(G.jade({
	      locals: YOUR_LOCALS,
	      pretty: '\t',
	    }))
	    .pipe(G.gulp.dest(paths.dev))
	};

	module.exports = jade
})()