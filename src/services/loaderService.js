'use strict';

angular.module('weather').service('loaderService', function() {
	return {
		isLoading: false,
		
		showLoader: function() {
			this.isLoading = true;
		},

		hideLoader: function() {
			this.isLoading = false;
		}
	}
});