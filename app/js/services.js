'use strict';

/* Services */
angular.module('shoppingApp.services', ['ngCookies']).
  factory('simpleCart', ['$cookieStore', function(cookies) {
    var cart = {

      itemsCookies = '',

      init: function(itemsCookie) {
        this.itemsCookies = itemsCookie;
      },

      addItem: function(item, quantity) {
        
      }
    }
  }])
});
