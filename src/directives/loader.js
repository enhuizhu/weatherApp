'use strict';

angular.module('weather').directive('loader', function(loaderService) {
    return {
        restrict: 'AE',

        replace: true,
        
        template: '<div class="overlay" ng-show="loaderService.isLoading"><div class="loader"></div></div>',
        
        link($scope, $element, $attr) {
            $scope.loaderService = loaderService;
        }
    }
});