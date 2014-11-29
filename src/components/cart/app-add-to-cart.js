
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../actions/app-actions')

var AddToCart= React.createClass({

  handleClick(){
    AppActions.addItem({this.props.item});
  },

  render() {
    return (
      <button onClick={this.handleClick}>Add To Cart</button>
    );
  }
});

module.exports = AddToCart;
