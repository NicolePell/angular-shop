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
    outOfStockItem = element.all(by.className('add-to-basket')).get(4);
  });

  it('has a list of products', function() {
    expect(productList.get(1).isPresent()).toBe(true);
    expect(productList.get(2).isPresent()).toBe(true);
  });

  it('can see the price for all products', function() {
    expect(productList.get(1).getText()).toContain('£42.00')
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
    expect(element(by.css('.total')).getText()).toContain('Total: £198.00');
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
    expect(element(by.css('.total')).getText()).toContain('Total: £94.00');
  });

  it('as a user I can see a 5% off discount when I place an order', function() {
    addButton.click();
    fiveButton.click();
    expect(element(by.css('.total')).getText()).toContain('Total: £94.00');
  });

  it('cannot add an out of stock item to the basket', function() {
    outOfStockItem.click();
    expect(element(by.className('alert')).getText()).toContain('Sorry, this item is out of stock!');
  });

  it('the product quantity is reduced when a customer adds to the basket', function() {
    addButton.click();
    expect(productList.get(0).getText()).toContain('4')
  });

});
