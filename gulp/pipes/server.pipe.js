(function () {
'use strict';

var G = require('../gulpplugins.js'),
	paths = require('../paths.js');

	var server =  function(){
		G.browserSync({
			port: 9000,
			server: {
			baseDir: paths.dev
			}
	
		});
	}

	module.exports = server
})()