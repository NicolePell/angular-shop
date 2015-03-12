'use strict';

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ShopCtrl', ['$scope', '$http',
function($scope, $http) {

  $http.get('products/products.json').success(function(data) {
    $scope.products = data;
  });

    $scope.basket = [];
    $scope.vouchers = [
      { name: '£5 off your order', value: 5, spendingRequirement: 1},
      { name: '£10 off when you spend over £50', value: 10, spendingRequirement: 50 },
      { name: '£15 off when you spend over £75 and purchase at least one footwear item', value: 15, spendingRequirement: 75 }
    ];
    $scope.totalDiscount = [];
    $scope.displayDiscount = false;
    $scope.displayTen = true;
    $scope.displayFifteen = true;

    $scope.addItem = function(index) {
      var product = $scope.products[index];

      if(product.quantity > 0) {

        if($scope.inBasket(product)) {
          product.desiredQuantity += 1;
          product.quantity -= 1;
        } else {
          product.quantity -= 1;
          $scope.basket.push(product);
        };
      } else {
        $scope.stockMessage = "Sorry, this item is out of stock!";
      };
    };

    $scope.inBasket = function (item) {
      for (var i = 0; i < $scope.basket.length; i++) {
        if ($scope.basket[i] === item) {
          return true;
        };
      };
      return false;
    };

    $scope.getTotal = function() {
      var total = 0;

      angular.forEach($scope.basket, function(item) {
        total += item.price * item.desiredQuantity;
      });

      if(total > 0) {
        $scope.displayDiscount = true;
      } else {
        $scope.displayDiscount = false;
      }

      if(total >= 50) {
        $scope.displayTen = false;
      } else {
        $scope.displayTen = true;
      }

      if(total >= 75 && $scope.checkClothingRequirement()) {
        $scope.displayFifteen = false;
      } else {
        $scope.displayFifteen = true;
      }
      angular.forEach($scope.totalDiscount, function(voucher) {
        total -= voucher;
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

    $scope.applyVoucher = function(voucher){
      $scope.isDiscounted = true;
      $scope.totalDiscount.push(voucher);
    };

    $scope.checkClothingRequirement = function() {
      var verifier = false;

      angular.forEach($scope.basket, function(item) {
        var category = item.category.split(' ').pop();

        if(category === 'Footwear') {
          verifier = true;
        }
      });

      return verifier;
    };
}]);
