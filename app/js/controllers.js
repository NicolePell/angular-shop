'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ShopCtrl', ['$scope', '$http',
function($scope, $http) {

  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });

    $scope.basket = [];
    $scope.vouchers = [
      { name: '£5 off', value: 5, spendingRequirement: 0 },
      { name: '£10 off', value: 10, spendingRequirement: 50 },
      { name: '£15 off', value: 15, spendingRequirement: 75 }
    ];
    $scope.totalDiscount = [];

    $scope.addItem = function(index) {
      $scope.basket.push($scope.products[index]);
    };

    $scope.getTotal = function() {
      var total = 0;
      angular.forEach($scope.basket, function(item) {
        total += item.price;
      });
      angular.forEach($scope.totalDiscount, function(voucher) {
        total -= voucher.value;
      })
      return total;
    };

    $scope.removeItem = function(index) {
      $scope.basket.splice(index, 1);
    };

    $scope.applyVoucher = function(voucher) {
      $scope.buttonClicked = false;
      if(($scope.getTotal() >= voucher.spendingRequirement)) {
        $scope.totalDiscount.push(voucher);
        $scope.voucherMessage = "Your discount has been applied";
        $scope.buttonClicked = true;
      } else {
        $scope.voucherMessage = "Your voucher is not valid";
      };
    };
}]);
