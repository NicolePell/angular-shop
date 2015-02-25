// 'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shopping app', function() {

  beforeEach(function() {
    browser.get('index.html');
    productList = element.all(by.tagName('h3'));
  });

  it('has a list of products', function() {
    expect(productList.get(1).isPresent()).toBe(true);
    expect(productList.get(2).isPresent()).toBe(true);
  });

  it('should have an Add to Basket button available for each product', function() {
    expect(element(by.className('add-to-basket')).isPresent()).toBe(true);
  });

});
