describe('ProductListCtrl', function(){

  beforeEach(module('shoppingApp'));

  it('create "products" model with 13 phones', inject(function($controller) {
    var scope = {},
    ctrl = $controller('ProductListCtrl', {$scope:scope});

    expect(scope.products.length).toBe(13);
  }));

  it('knows a products name', inject(function($controller) {
    var scope = {},
    ctrl = $controller('ProductListCtrl', {$scope:scope});

    expect(scope.products[0].name).toBe('Almond Toe Court Shoes')
  }));

});
