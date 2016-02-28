(function () {
'use strict';

var paths = {
	jade: 'app/jade/*.jade',
	sass: 'app/sass/*.scss',
	js: 'app/js/*.js',
	php: 'app/php/**/*.php',
	img: ['app/img/*.jpg', 'app/img/*.png', 'app/img/*.ico', '!app/img/sprites'],
	sprites: 'app/img/sprites/*.png',
	fonts: 'app/fonts/*',
	extras: ['app/*.*', '!app/**/*.html'],
//=========================== 
	dist: 'dist',
	dev: 'dev',
};

	module.exports = paths
})()