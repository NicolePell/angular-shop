'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

$scope.shop = DataService.shop;
$scope.basket = DataService.basket;

shoppingControllers.controller('ProductListCtrl', ['$scope', '$http',
function($scope, $http) {
  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });
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

// function storeController($scope, $routeParams, DataService) {
//
//   // get store and cart from service
//   $scope.store = DataService.store;
//   $scope.cart = DataService.cart;
//
//   // use routing to pick the selected product
//   if ($routeParams.productSku != null) {
//     $scope.product = $scope.store.getProduct($routeParams.productSku);
//   }
// }
