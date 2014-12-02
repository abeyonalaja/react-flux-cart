

/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../../actions/app-actions')

var Decrease= React.createClass({

  handleClick(){
    AppActions.decreaseItem(this.props.index);
  },

  render() {
    return (
      <button onClick={this.handleClick}>-</button>
    );
  }
});

module.exports = Decrease;

