'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
    .controller('PaymentCtrl', function ($scope,$location) {

        $scope.init_data=function(){
            $scope.cart_total = Item.get_totalCount();
            $scope.bought_goods = count.get_no_null_messages();
            $scope.total_price= count.total_price();
            $scope.gifts = Item.get_gift();
            $scope.all_price = count.total_price();
            $scope.save_price = count.gift_price();
            $scope.pay_time = get_data();
        };

        $scope.single_price=function(goods,good_name){
            return Item.display_small_count(goods,good_name);
        };

        $scope.init_data();

        $scope.confirm=function(){
            $location.path("/item");
            localStorage.clear();
        }

    });