
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../../actions/app-actions.js')

var AddToCart= React.createClass({

  handleClick(){
    console.log('Add items')
    AppActions.addItem(this.props.item);
  },

  render() {
    return (
      <button onClick={this.handleClick}>Add To Cart</button>
    );
  }
});

module.exports = AddToCart;

