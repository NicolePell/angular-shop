'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ShopCtrl', ['$scope', '$http',
function($scope, $http) {

  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });

    $scope.basket = [];
    $scope.vouchers = [
      { name: '£5 off your order', value: 5, spendingRequirement: 1 },
      { name: '£10 off when you spend over £50', value: 10, spendingRequirement: 50 },
      { name: '£15 off when you spend over £75 and purchase at least one footwear item', value: 15, spendingRequirement: 75 }
    ];
    $scope.totalDiscount = [];

    $scope.addItem = function(index) {
      if($scope.products[index].quantity > 0) {
        var product = $scope.products[index];
        product.quantity -= 1;
        $scope.basket.push(product);
      } else {
        $scope.stockMessage = "Sorry, this item is out of stock!";
      };
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

    $scope.outOfStock = function(item) {
      if(item.quantity === 0) {
        return true;
      }
      return false;
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
