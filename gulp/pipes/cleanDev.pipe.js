(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var clenDev =  function() {
			return G.gulp.src(paths.dev, { read: false })
		  	.pipe(G.rimraf());
		};

	module.exports = clenDev
})()