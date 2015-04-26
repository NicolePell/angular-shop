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
    $scope.displayFiveOff = false;
    $scope.displayTenOff = true;
    $scope.displayFifteenOff = true;

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

    // $scope.outOfStock = function(index) {
    //   var product = $scope.products[index];
    //
    //   "Sorry, this item is out of stock" if(product.quantity <= 0)
    // }

    $scope.inBasket = function(item) {
      angular.forEach($scope.basket, function(item) {
        item === item
      });
    };

    $scope.getTotal = function() {
      var total = 0;

      angular.forEach($scope.basket, function(item) {
        total += item.price * item.desiredQuantity;
      });

      if(total > 0) {
        $scope.displayFiveOff = true;
      } else {
        $scope.displayFiveOff = false;
      }

      if(total >= 50) {
        $scope.displayTenOff = false;
      } else {
        $scope.displayTenOff = true;
      }

      if(total >= 75 && $scope.checkClothingRequirement()) {
        $scope.displayFifteenOff = false;
      } else {
        $scope.displayFifteenOff = true;
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
      return item.quantity === 0
    };

    $scope.applyVoucher = function(voucher){
      $scope.isDiscounted = true;
      $scope.totalDiscount.push(voucher);
    };

    $scope.checkClothingRequirement = function() {
      // var verifier = false;

      var category = angular.forEach($scope.basket, function(item) {
        item.category.split(' ').pop();

        return category === 'Footwear'
        //   verifier = true;
        // }
      });

      // return verifier;
    };
}]);
