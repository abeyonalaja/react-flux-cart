/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var AppActions = require('../actions/app-actions')

var AppPage= React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      layout: DefaultLayout
    };
  },

  handleClick(){
    console.log("grr")
    AppActions.addItem('This is the item');
  },

  render() {
    return (
      <h1 onClick={this.handleClick}>MY APP </h1>
    );
  }
});

module.exports = AppPage;

