'use strict';

/* jasmine specs for controllers go here */
describe('shoppingControllers', function() {

  beforeEach(module('shoppingApp'));

  describe('ShopCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/products.json').
      respond([{name: 'Almond Toe Shoes'}, {name: 'Suede Shoes'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ShopCtrl', {$scope: scope});
    }));


    it('creates "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();

      expect(scope.products).toEqual([{name: 'Almond Toe Shoes'},
      {name: 'Suede Shoes'}]);
    });
  });
});
