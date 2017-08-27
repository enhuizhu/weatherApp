'use strict';

angular.module('weather').filter('temp', function($sce) {
	return function(input) {
		if (!input) {
			return input;
		}

		return $sce.trustAsHtml((input - 273.15).toFixed(2) + '<sup>.</sup>C');
	}
});