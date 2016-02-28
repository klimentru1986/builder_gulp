(function () {
'use strict';

var G = {
	gulp: require('gulp'),
	//JS
	uglify: require('gulp-uglify'),
	modernizr: require('gulp-modernizr'),
	//HTML
	browserSync: require('browser-sync'),
	htmlmin: require('gulp-htmlmin'),
	jade: require('gulp-jade'),
	//CSS
	autoprefixer: require('gulp-autoprefixer'),
	cssnano: require('gulp-cssnano'),
	uncss: require('gulp-uncss'),
	sass: require('gulp-sass'),
	//IMG
	spritesmith: require('gulp.spritesmith'),
	imagemin: require('gulp-imagemin'),
	//Build
	gulpif: require('gulp-if'),
	useref: require('gulp-useref'),
	sourcemaps: require('gulp-sourcemaps'),
	plumber: require('gulp-plumber'),
	filter: require('gulp-filter'),
	rimraf: require('gulp-rimraf'),
	size: require('gulp-size'),
	bowerFiles: require('main-bower-files')
};

	module.exports = G
	
})()