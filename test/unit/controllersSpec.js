'use strict';

/* jasmine specs for controllers go here */
describe('shoppingControllers', function() {

  beforeEach(module('shoppingApp'));

  describe('ShopCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_,$rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/products.json').
        respond([{name: 'Almond Toe Shoes', price: 12, quantity: 1}, {name: 'Suede Shoes', price: 9, quantity: 1}]);

      scope = $rootScope.$new();
      ctrl = $controller('ShopCtrl', {$scope: scope});
    }));

    it('creates "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();
      expect(scope.products).toEqual([{name: 'Almond Toe Shoes', price: 12, quantity: 1},
      {name: 'Suede Shoes', price: 9, quantity: 1}]);
    });

    it('has an empty basket', function() {
      expect(scope.basket.length).toBe(0);
    });

    it('a product can be added to the basket', function() {
      $httpBackend.flush();
      scope.addItem(0);
      expect(scope.basket.length).toBe(1);
    });

    it('a product can be removed from the basket', function() {
      $httpBackend.flush();
      scope.addItem(0);
      expect(scope.basket.length).toBe(1);
      scope.removeItem(0);
      expect(scope.basket.length).toBe(0);
    });

    it('calculates the total cost of the basket', function() {
      $httpBackend.flush();
      scope.addItem(0);
      scope.addItem(1);
      expect(scope.getTotal()).toEqual(21);
    });

    it('updates the price when a discount is applied', function() {
      $httpBackend.flush();
      scope.applyVoucher(5);
      scope(scope.getTotal()).toEqual(16);
    });
  });
});
