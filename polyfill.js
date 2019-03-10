'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof document === 'undefined') {
		return implementation;
	}
	return document.contains || document.body.contains || implementation;
};
