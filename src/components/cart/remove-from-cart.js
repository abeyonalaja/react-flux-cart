
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
// var AppActions = require('../../actions/app-actions.js')
var AppActions = require('../../actions/app-actions.js')

var RemoveFromCart= React.createClass({

  handleClick(){
    AppActions.removeItem(this.props.index);
  },

  render() {
    return (
      <button onClick={this.handleClick}>x</button>
    );
  }
});

module.exports = RemoveFromCart;

