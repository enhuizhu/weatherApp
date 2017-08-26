'use strict';

angular.module('weather').service('apiService', function($http) {
    this.appid = '9125f815ba2b10bafb5f4f3355ee144e';
    
    this.getAll = function() {
        let promises = [];

        promises.push(this.getCurrentLocationWeather());
        promises.push(this.getFutureWeather());

        return Promise.all(promises);
    }

    this.getCurrentLocationWeather = function() {
        return this.get('https://api.openweathermap.org/data/2.5/weather');
    }

    this.getFutureWeather = function() {
        return this.get('https://api.openweathermap.org/data/2.5/forecast/daily')
    }

    this.getGeo = function(callback) {
        if (!this.geo) {
            navigator.geolocation.getCurrentPosition((result) => {
                this.geo = {
                    lat: result.coords.latitude,
                    longit: result.coords.longitude
                };

                callback(this.geo);
            });
        } else {
            callback(this.geo);
        }
    }

    this.get = function(path) {
        return new Promise((resolve, reject) => {
            this.getGeo((geo) => {
                $http.get(`${path}?lat=${geo.lat}&lon=${geo.longit}&appid=${this.appid}`)
                    .then(response => {
                        resolve(response.data);
                    }).catch(reject);
            });                
        });
    }   
});