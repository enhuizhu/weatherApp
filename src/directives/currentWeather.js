'use strict';

class currentWeatherController {
	constructor($scope, $element) {
	}
}


angular.module('weather').directive('currentWeather', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			data: '='
		},
		templateUrl: './src/views/currentWeather.html',
		controller: currentWeatherController
	}
})