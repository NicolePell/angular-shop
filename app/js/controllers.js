'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ShopCtrl', ['$scope', '$http',
function($scope, $http) {
  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });
}]);
