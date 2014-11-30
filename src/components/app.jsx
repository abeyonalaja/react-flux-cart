/** @jsx React.DOM */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var AppActions = require('../actions/app-actions');
var Catalog = require('./Linky.jsx');
var Catalog2 = require('./Link.jsx');
// var AddToCart = require('./catalog/app-add-to-cart.js');

var AppPage= React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      layout: DefaultLayout
    };
  },


  render() {
    return (
      <div>
        <h1>Lets Shop</h1>
        <Catalog />
      </div>
    );
  }
});

module.exports = AppPage;

