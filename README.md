Angular Shop
============

A responsive website singe plage web app designed for a clothing retailer. The retailer sells six
different categories of clothes: men and women's footwear, men and women's casualwear,
men and women's formalwear.

![Screenshot of the shop](http://s1338.photobucket.com/user/NicciPell/media/Screen%20Shot%202015-03-12%20at%2009.37.47_zps6ltfqjun.png.html)

## Features of the website include:
- [x] Viewing all products, their category, price and availability.
- [x] Adding products to a shopping basket.
- [x] Removing products from the shopping basket.
- [x] Viewing the total price of the items in the shopping basket.
- [x] Vouchers can be applied to the shopping basket.
- [x] The total price is adjusted to include discounts applied.
- [x] Vouchers can only be selected if they are valid.
- [x] It is not possible to add out of stock products to the basket.

## Technologies
Testing:
- Karma for unit tests
- Protractor for end to end tests

Created with:
- AngularJS
- HTML & CSS
- Bootstrap

## File Structure
```
- app/js:
  - app.js: contains angular module and routing
  - controller.js: contains controllers used in this application
- app/index.html: contains the html layout including navbar
- app/partials/shop.html: contains the html for the main and only page
- test:
  - e2e/scenarios.js: contains end to end tests
  - unit/controllersSpec.js: contains unit tests
```

## To Run this App
```
> git clone https://github.com/NicolePell/angular-shop.git
> cd angular-shop
> npm install
> bower install
> npm start
> visit http://localhost:8000/app/#/
```

## To Run Tests
```
End to End: npm run protractor
Unit: npm start and then npm test
```

## Things to improve
- [ ] Discount is removed when basket is no longer valid
- [ ] Alert box to only show when out of stock alert message appears
- [ ] Make sure correct products are being added to basket when search filter is on
- [ ] Refactor and move products and basket to service
- [ ] Ensure all elements of the website are responsive
- [ ] Upload images to Amazon Web Services
