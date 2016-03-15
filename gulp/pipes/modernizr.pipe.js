(function () {
'use strict';

	var G = require('../gulpplugins.js'),
		paths = require('../paths.js');
	
	var modernizr =  function(){
		gulp.src(paths.js)
		.pipe(modernizr(
			{
				"options" : [
					"setClasses",
					"html5shiv"
				],
				"tests" : [
					"placeholder",
					"cssanimations", 
					"backgroundsize",
					"cssgradients"
				],
				"uglify" : true,
			}
		))
		.pipe(gulp.dest("app/js"))
	};

	module.exports = modernizr
})()