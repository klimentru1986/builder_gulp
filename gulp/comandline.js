(function () {
'use strict';
	
	var G = require('./gulpplugins.js');
	
	var knownOptions = {
		string: 'env',
		default: { env: process.env.NODE_ENV || 'dev' },
	}

	var options = G.minimist(process.argv.slice(2), knownOptions);

	
	module.exports = options
	
})()