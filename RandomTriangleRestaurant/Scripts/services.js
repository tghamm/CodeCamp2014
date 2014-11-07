'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .value('version', '0.1')
    .factory('randomRestService', randomRestService);

randomRestService.$inject = ['$http', '$q'];

function randomRestService($http, $q) {


    return {
        getRandomRestaurant: getRandomRestaurant,
        getAllRestaurants: getAllRestaurants
    }

    function getRandomRestaurant() {
        
        return $http({
            method: 'GET',
            url: 'http://localhost:57390/api/Random/GetRandom',
            data: { },

        }).then(function (response) {
            if (typeof response.data === 'object') {
                return angular.fromJson(response.data);
            } else {
                return $q.reject('Unknown error. Please try again.');
            }

        }, function (response) {
            var msg = 'Unknown error. Please try again.';
            return $q.reject(msg);
        });
    }

    function getAllRestaurants() {
        return $http({
            method: 'GET',
            url: 'http://localhost:57390/api/Random/GetAll',
            data: {},

        }).then(function (response) {
            if (typeof response.data === 'object') {
                return angular.fromJson(response.data);
            } else {
                return $q.reject('Unknown error. Please try again.');
            }

        }, function (response) {
            var msg = 'Unknown error. Please try again.';
            return $q.reject(msg);
        });
    }

}