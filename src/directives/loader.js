'use strict';

angular.module('weather').directive('loader', function(loaderService) {
	return {
		restrict: 'AE',

		replace: true,
		
		template: '<div class="loader" ng-show="loaderService.isLoading"></div>',
		
		link($scope, $element, $attr) {
			$scope.loaderService = loaderService;
		}
	}
})