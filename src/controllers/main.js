'use strcit';

class main {
    constructor($scope, apiService, loaderService) {
        this.$ = $scope;
        this.apiService = apiService;
        this.loaderService = loaderService;

        this.init();
    }

    init() {
        this.loaderService.showLoader();
        
        this.apiService.getAll().then(results => {
            this.loaderService.hideLoader();
            this.$.currentWeather = results[0];
            this.$.dailyWeather = results[1];

            this.$.$digest();
        });        
    }
}

angular.module('weather').controller('main', main);