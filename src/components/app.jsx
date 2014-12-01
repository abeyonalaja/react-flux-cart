/** @jsx React.DOM */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var AppActions = require('../actions/app-actions');
var Catalog = require('./catalog/app-catalog.js');
var Cart = require('./cart/app-cart.js');

var AppPage= React.createClass({
  getDefaultProps() {
    return {
      // title: 'React.js Starter Kit',
      // layout: DefaultLayout
    };
  },


  render() {
    return (
      <div>
        <h1>Lets Shop</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </div>
    );
  }
});

module.exports = AppPage;

