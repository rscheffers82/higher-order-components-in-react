import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className="home">
        <h3>Explore how higher components work.</h3>
        <p>This application shows in a very simplistic way how higher order functions / components can be used. </p>
        <p>The resources page is a simply display component that is given authenticatie functionality by wrapping it into a higher order component. The component is only displayed when a user is logged in.</p>
        <p><strong>Click the resource page, then click on login and try again...</strong></p>
        <p><img src="./images/higher-order-component.jpg" /></p>
        <p>The authentication higher order component can be used with any other component that needs authentication functionality.</p>
      </div>
    );
  }
}
