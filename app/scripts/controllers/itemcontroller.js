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
        Item.init_date();
        $scope.all_items=Item.get_good_items();
        $scope.cart_total = Item.get_totalCount();

        $scope.addcart=function(good_name){
            Item.add_good_item(good_name);
            $scope.cart_total = Item.get_totalCount();
        }
    });