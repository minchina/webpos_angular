'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
    .controller('CartCtrl', function ($scope) {

        $scope.init_data=function(){
            $scope.cart_total = Item.get_totalCount();
            $scope.bought_goods = count.get_no_null_messages();
            $scope.total_price= count.total_price();
        };

        $scope.single_price=function(goods,good_name){
            return Item.display_small_count(goods,good_name);
        };

        $scope.init_data();

        $scope.minus_good=function(good_name){
            Item.minus_cart_message();
            Item.update_have_items("minus",good_name);
            $scope.init_data();
        };

        $scope.add_good=function(good_name){
            Item.plus_cart_message();
            Item.update_have_items("add",good_name);
            $scope.init_data();
        };
    });