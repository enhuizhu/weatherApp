'use strict';

class dailyWeatherController {
	constructor($scope, $element) {
	}
}

angular.module('weather').directive('dailyWeather', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			data: '='
		},
		templateUrl: './src/views/dailyWeather.html',
		controller: dailyWeatherController
	}
});