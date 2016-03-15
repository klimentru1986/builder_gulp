(function () {
'use strict';

var G = require('../gulpplugins.js'),
	paths = require('../paths.js');

var sprites =  function () {
  return G.gulp.src(paths.sprites)
  	.pipe(G.spritesmith({
    	imgName: '../img/sprite.png',
    	cssName: 'sprite.scss', 
    	padding: 20
    }))
	.pipe(G.gulpif('*.scss', G.gulp.dest('app/sass/parts/')))
	.pipe(G.gulpif('*.png', G.gulp.dest('app/img/')))
};

	module.exports = sprites
})()




