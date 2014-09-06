'use strict';

/**
 * @ngdoc overview
 * @name angularWebposApp
 * @description
 * # angularWebposApp
 *
 * Main module of the application.
 */
angular
  .module('angularWebposApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
        .when('/item', {
            templateUrl: 'views/item.html',
            controller: 'ItemCtrl'
        })
        .when('/payment', {
            templateUrl: 'views/payment.html',
            controller: 'PaymentCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
