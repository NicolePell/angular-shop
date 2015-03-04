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

  it('the shop name links back to the homepage', function() {
    element(by.id('brand')).click();
    expect(browser.getCurrentUrl()).toMatch('http://localhost:8000/app/index.html#')
  });

  it('has an Add to Basket button for each product', function() {
    expect(element(by.className('add-to-basket')).isPresent()).toBe(true);
    expect(element(by.className('add-to-basket')).getText()).toEqual('Add to Basket');
  });

  it('displays a notice when a user clicks the add to basket button', function() {
    element(by.className('add-to-basket')).click();

  });

});

// it('by clicking on the "Add a new contact" i should be redirected to another page', function(){
//   element(by.className('addContact')).click();
//   expect(browser.getCurrentUrl()).toContain('/new')
// });
//
// it('after clicking to add a new contact I should be presented with a form', function(){
//   element(by.className('addContact')).click();
//   expect(element(by.tagName('h1')).getText()).toEqual('Add a new contact');
//   expect(element(by.tagName('form')).isPresent()).toBe(true);
// });
//
// it('should be able to add a contact by filling up the form', function(){
//   element(by.className('addContact')).click();
//   element(by.id('exampleInputSurname1')).sendKeys('Zzzz')
//   element(by.id('exampleInputName1')).sendKeys('Zzzz')
//   element(by.className('submit_newContact')).click()
//   element.all(by.repeater('contact in contacts')).then(function(rows) {
//     var lastRow = rows[rows.length -1]
//     expect(lastRow.getText()).toMatch('ZZZZ ZZZZ');
//   })
// });
//
// it('should have an edit button available for each contact', function(){
//   expect(element(by.className('editZzzzZzzz')).isPresent()).toBe(true);
// });
//
// it('should have the edit form prefilled', function(){
//   element(by.className('editZzzzZzzz')).click()
//   expect(element(by.id('exampleInputSurname1')).getAttribute('value')).toMatch('Zzzz')
//   expect(element(by.id('exampleInputName1')).getAttribute('value')).toMatch('Zzzz')
// });
//
// it('should be able to edit a contact', function(){
//   element(by.className('editZzzzZzzz')).click()
//   element(by.id('exampleInputName1')).clear()
//   element(by.id('exampleInputName1')).sendKeys('Aaaa')
//   element(by.className('submit_editContact')).click()
//   element.all(by.repeater('contact in contacts')).then(function(rows) {
//     var lastRow = rows[rows.length -1]
//     expect(lastRow.getText()).toMatch('ZZZZ AAAA Edit Delete');
//   })
