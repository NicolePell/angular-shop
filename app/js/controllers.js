'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ShopCtrl', ['$scope', '$http',
function($scope, $http) {

  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });

    $scope.basket = [];

    $scope.addItem = function(index) {

        $scope.basket.push($scope.products[index]);
    };

    $scope.getTotal = function() {
      var total = 0;
      angular.forEach($scope.basket, function(item) {
        total += item.price;
      });
      return total;
    };
}]);
