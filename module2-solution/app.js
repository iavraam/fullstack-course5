(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItems = this;
  buyItems.items = ShoppingListCheckOffService.getToBuyList();
  buyItems.markAsBought = function(itemIndex) {
    ShoppingListCheckOffService.addItemToBoughtList(buyItems.items[itemIndex].name, buyItems.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeItemFromToBuyList(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;
  boughtItems.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
    {name: "cookies", quantity: 10},
    {name: "beers", quantity: 5},
    {name: "diet cokes", quantity: 8},
    {name: "bags of chips", quantity: 10},
    {name: "bottles of water", quantity: 20},
    {name: "oranges", quantity: 20}
  ];
  var boughtList = [];

  service.addItemToBoughtList = function(itemName, itemQuantity) {
    boughtList.push({name: itemName, quantity: itemQuantity});
  };

  service.removeItemFromToBuyList = function(itemIndex) {
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyList = function() {
    return toBuyList;
  };

  service.getBoughtList = function() {
    return boughtList;
  };
}

})();
