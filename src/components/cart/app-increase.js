

/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../../actions/app-actions.js')

var Increase= React.createClass({

  handleClick(){
    AppActions.increaseItem(this.props.index);
  },

  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }
});

module.exports = Increase;

