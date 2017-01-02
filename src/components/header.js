import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  authButton() {
    if ( this.props.authenticated ) {
      return <button onClick={() => this.props.authenticate(false)}>Logout</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Login</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link>{this.authButton()}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

// the below returned object (from our reducer) will show up in the header component as props

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(Header);
