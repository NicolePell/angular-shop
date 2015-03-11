'use strict';

// Declare app level module which depends on views, and components
var shoppingApp = angular.module('shoppingApp', [
  'ngRoute',
  'shoppingControllers',
]);

shoppingApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/shop.html',
    controller: 'ShopCtrl'
  });
}]);
