(function () {
'use strict';

	var pipes = {
		
		jade: require('./pipes/jade.pipe.js'),

		sass: require('./pipes/sass.pipe.js'),
		
		vendorFilesJS: require('./pipes/vendor_files_js.pipe.js'),

		vendorFilesCSS: require('./pipes/vendor_files_css.pipe.js'),
		
		img: require('./pipes/img.pipe.js'),

		sprites: require('./pipes/sprites.pipe.js'),
		
		fonts: require('./pipes/fonts.pipe.js'),
		
		js: require('./pipes/js.pipe.js'),

		modernizr: require('./pipes/modernizr.pipe.js'),
		
		extras: require('./pipes/extras.pipe.js'),

		clean: require('./pipes/clean.pipe.js'),

		server: require('./pipes/server.pipe.js'),

		watch: require('./pipes/watch.pipe.js'),

	}
	module.exports = pipes
	
})()