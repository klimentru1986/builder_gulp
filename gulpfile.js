'use strict';

var G = require('./gulp/gulpplugins.js');

var paths = require('./gulp/paths.js');

var pipes = require('./gulp/pipes.js');

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
// Build Dev
//===========================

G.gulp.task('builddev', ['cleanDev'], function () {
  G.gulp.start(paths.dev);
});

G.gulp.task('dev', ['jade', 'sass', 'js', 'bowerFiles', 'fonts', 'img', 'extras'],function () {
	return G.gulp.src(paths.dist)
	.pipe(G.size({title: 'build'}));
});

//=========================== 
// Build Dev Directory
//===========================

G.gulp.task('builddev', ['cleanDev'], function () {
  G.gulp.start(paths.dev);
});

G.gulp.task('dev', ['jade', 'sass', 'js', 'bowerFiles', 'fonts', 'img', 'extras'],function () {
	return G.gulp.src(paths.dist)
	.pipe(G.size({title: 'build'}));
});

//===========================
//Tasks
//===========================

//Add html
G.gulp.task('jade', pipes.jade);

//Add css
G.gulp.task('sass', pipes.sass);

//Add js
G.gulp.task('js', pipes.js);

//Modernizr
G.gulp.task('modernizr', pipes.modernizr);

//Add bowerFiles
G.gulp.task('bowerFiles', pipes.bowerFiles);

//Add images
G.gulp.task('img', pipes.img);

//Add Sprites
G.gulp.task('sprite', pipes.sprites);

// Add fonts
G.gulp.task('fonts', pipes.fonts);

// Add other to Dist
G.gulp.task('extras', pipes.extras);

// Clean Dist Directory
G.gulp.task('cleanDev', pipes.cleanDev);





