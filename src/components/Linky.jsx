/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../stores/app-store.js');
// var AddToCart = require('./catalog/app-add-to-cart.js');

function getCatalog() {
  return {items: AppStore.getCatalog()}
}

var Catalog =
  React.createClass({

    render: function() {

      return <div>grr</div>
    }
  });

module.exports = Catalog;

