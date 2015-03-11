'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ProductListCtrl', ['$scope', '$http',
function($scope, $http) {
  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });

function($scope, $http) {
  var basket = []

  http.get('products/products.json').success(function(data) {
    $scope.product = data[];
    basket.push($scope.product);
  });
  };
}]);

shoppingControllers.controller('BasketCtrl', ['$scope', '$routeParams', '$http',
function ($scope, $routeParams, $http) {

  var basket = []

  $http.get('products/products.json').success(function(data) {
    $scope.product = data[$routeParams.productId];
    basket.push($scope.product);
    return basket;
  });
}]);
