'use strict';

var G = require('./gulp/gulpplugins.js'),
	paths = require('./gulp/paths.js'),
	pipes = require('./gulp/pipes.js');

//=========================== 
//Server
//===========================

//Default
G.gulp.task('default', ['server', 'watch']);

//Watch
G.gulp.task('watch',pipes.watch);

//Server
G.gulp.task('server', pipes.server);

//=========================== 
// Build
//===========================

G.gulp.task('build', ['clean'], function () {
  G.gulp.start('builder');
});

G.gulp.task('builder', ['html', 'css', 'js', 'bowerFiles', 'fonts', 'img', 'extras'],function () {
	return G.gulp.src(paths.dev)
	.pipe(G.size({title: 'build'}));
});


//===========================
//Tasks
//===========================

//Add html
G.gulp.task('html', pipes.jade);

//Add css
G.gulp.task('css', pipes.sass);

//Add js
G.gulp.task('js', pipes.js);

//Modernizr
G.gulp.task('modernizr', pipes.modernizr);

//Add bowerFiles
G.gulp.task('bowerFiles', pipes.bowerFiles);

//Add images
G.gulp.task('img', pipes.img);

//Add Sprites
G.gulp.task('sprites', pipes.sprites);

// Add fonts
G.gulp.task('fonts', pipes.fonts);

// Add other to Dist
G.gulp.task('extras', pipes.extras);

// Clean Directory
G.gulp.task('clean', pipes.clean);





