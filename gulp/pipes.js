(function () {
'use strict';

	var pipes = {
		
		jade: require('./pipes/jade.pipe.js'),

		sass: require('./pipes/sass.pipe.js'),
		
		bowerFiles: require('./pipes/bowerfiles.pipe.js'),
		
		img: require('./pipes/img.pipe.js'),

		sprites: require('./pipes/sprites.pipe.js'),
		
		fonts: require('./pipes/fonts.pipe.js'),
		
		js: require('./pipes/js.pipe.js'),

		modernizr: require('./pipes/modernizr.pipe.js'),
		
		extras: require('./pipes/extras.pipe.js'),

		cleanDev: require('./pipes/cleanDev.pipe.js'),

		server: require('./pipes/server.pipe.js'),

		watch: require('./pipes/watch.pipe.js'),

	}
	module.exports = pipes
	
})()