'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
    .controller('ItemCtrl', function ($scope) {
        $scope.all_items=Item.get_good_items();
        console.log($scope.all_items);


        $scope.addcart=function(good_name){
            console.log(good_name);
        }
    });