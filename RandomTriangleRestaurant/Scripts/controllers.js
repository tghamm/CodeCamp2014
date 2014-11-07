'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', 'randomRestService', 'firstRandomRestaurant',
        function ($scope, $location, $window, randomRestService, firstRandomRestaurant) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        $scope.randomEntry = firstRandomRestaurant;

        $scope.map = {
            center: {
                latitude: firstRandomRestaurant.Latitude,
                longitude: firstRandomRestaurant.Longitude
            },
            zoom: 15,
            
        };
        $scope.getRandomRestaurant = function () {
            
            randomRestService.getRandomRestaurant().then(
                function (response) {
                   
                    $scope.randomEntry = response;
                    $scope.map.center = {
                        latitude: response.Latitude,
                        longitude: response.Longitude
                    };
                    
                    
                }, function(reason) {

                });
        }

        

    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'TriFEEDME | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /viewall
    .controller('ViewAllCtrl', ['$scope', '$location', '$window', 'restaurantList', function ($scope, $location, $window, restaurantList) {
        $scope.$root.title = 'TriFEEDME | View All';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        $scope.myData = restaurantList;
        
        $scope.mySelection = null;
        
        $scope.map = {
            center: {
                latitude: 35,
                longitude: -78
            },
            zoom: 15,

        };
        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [{ field: 'Name', displayName: 'Name' }],
            
            multiSelect: false,
            afterSelectionChange: function(data, event) {
                $scope.mySelection = data.entity;
                $scope.map.center = {
                    latitude: data.entity.Latitude,
                    longitude: data.entity.Longitude
                };
            }
        };
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'TriFEEDME | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);