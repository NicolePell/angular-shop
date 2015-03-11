// 'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shopping app', function() {

  beforeEach(function() {
    browser.get('index.html');
    productList = element.all(by.repeater('product in products'));
    basketList = element.all(by.repeater('item in basket'));
    addButton = element.all(by.className('add-to-basket')).get(0);
    removeButton = element.all(by.className('remove-from-basket')).get(0);
    fiveButton = element.all(by.className('discount-button')).get(0);
  });

  it('has a list of products', function() {
    expect(productList.get(1).isPresent()).toBe(true);
    expect(productList.get(2).isPresent()).toBe(true);
  });

  it('has an Add to Basket button for each product', function() {
    expect(element(by.className('add-to-basket')).isPresent()).toBe(true);
    expect(element(by.className('add-to-basket')).getText()).toEqual('Add to Basket');
  });

  it('has a basket', function() {
    expect(element(by.css('.basket')).isPresent()).toBe(true);
  });

  it('as a user I can add a product to the basket', function() {
    addButton.click();
    expect(basketList.count()).toEqual(1);
  });

  it('as a user I can see the total price of my basket', function() {
    addButton.click();
    addButton.click();
    expect(element(by.css('.total')).getText()).toEqual('Your Basket | Total: £198.00');
  });

  it('as a user I can remove a product from my basket', function() {
    addButton.click();
    expect(basketList.count()).toEqual(1);
    removeButton.click();
    expect(basketList.count()).toEqual(0);
  });

  it('as a user I can apply a voucher to my basket', function() {
    addButton.click();
    fiveButton.click();
    expect(element(by.css('.total')).getText()).toEqual('Your Basket | Total: £94.00');
  });

});
