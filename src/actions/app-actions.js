var ActionTypes = require('../constants/ActionTypes');
var AppDispatcher = require('../AppDispatcher');

var AppActions = {
  addItem:function(item){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.ADD_ITEM,
      item:item
    });
  },
  
  removeItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.REMOVE_ITEM,
      index:index
    });
  },
  
  decreaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.DECREASE_ITEM,
      index:index
    });
  },

  increaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.INCREASE_ITEM,
      index:index
    });
  }
}

module.exports = AppActions;
