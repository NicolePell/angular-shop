'use strict';

/* Services */

shoppingApp.factory("DataService", function() {
  var myShop = new shop();
  var myBasket = new shoppingBasket("My Angular Shop");
  return {
    shop: myShop,
    basket: myBasket
  };
});
