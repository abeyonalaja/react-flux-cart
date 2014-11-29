

/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../../actions/app-actions')

var Increase= React.createClass({

  handleClick(){
    AppActions.increase({this.props.index});
  },

  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }
});

module.exports = Increase;

