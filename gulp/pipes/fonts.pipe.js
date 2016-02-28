(function () {
'use strict';

var G = require('../gulpplugins.js');

var paths = require('../paths.js');

var fonts =  function() {
  return G.gulp.src(paths.fonts)
    .pipe(G.filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
    .pipe(G.gulp.dest(paths.dev + '/fonts'))
};

	module.exports = fonts
})()