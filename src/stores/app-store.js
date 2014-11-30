var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../constants/ActionTypes');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _catalog = [
  {id:1, title: 'Widget #1', cost: 1},
  {id:2, title: 'Widget #2', cost: 2},
  {id:3, title: 'Widget #3', cost: 3},
  {id:4, title: 'Widget #4', cost: 4},
  {id:5, title: 'Widget #5', cost: 5}
];

var _cartItems = [];

function _removeItem(index) {
  _cartItems[index].qty += 1;
  _cartItems.splice(index, 1);
}

function _increaseItem(index) {
  _cartItems[index].qty += 1;
}

function _decreaseItem(index) {
  if(_cartItems[index].qty > 1){
    _cartItems[index].qty -= 1;
  } else {
    _removeitem(index);
  }
}

function addItem(item) {
  if (!item.inCart) {
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function(cartItem, i){
      if (cartItem.id == item.id) {
        _increaseItem(i)
      }
    });
  }
}

var AppStore = merge(EventEmitter.prototype, {
  emitChange:function(){
    // this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart:function() {
    return _cartItems;
  },

  getCatalog:function() {
    return _catalog;
  },

  dispatcherIndex:AppDispatcher.register(function(payload){
    // var action = payload.action;
    //
    // switch(action.actionType) {
    //   case AppActions.ADD_ITEM:
    //     _addItem(payload.action.item);
    //     break;
    //
    //   case AppActions.REMOVE_ITEM:
    //     _removeItem(payload.action.index);
    //     break;
    //
    //   case AppActions.INCREASE_ITEM:
    //     _increaseItem(payload.action.index);
    //     break;
    //
    //   case AppActions.DECREASE_ITEM:
    //     _decreaseItem(payload.action.index);
    //     break;
    // }
    // AppStore.emitChange();

    // return true;
  })
});



module.exports  = AppStore;
