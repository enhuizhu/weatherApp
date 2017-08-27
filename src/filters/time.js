'use strict';

angular.module('weather').filter('time', function() {
	return function(input) {
		if(!input) return input;
		
		let timeStamp = input * 1e3;
		return moment(timeStamp).format('dddd');
	}
});