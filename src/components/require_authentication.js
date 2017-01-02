import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // make the router object available on the Authentication class, not just an instance of it.
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render () {
      // console.log('Authenticated: ', this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}

// ------------- Initial / bare HOC -------------- \\

// import React, { Component } from 'react';
//
// export default function(ComposedComponent) {
//   class Authentication extends Component {
//     render () {
//       return <ComposedComponent {...this.props} />
//     }
//   }
//
//   return Authentication;
// }


// futher comments based on the above ^

// In some other location, we can call this Component

// import Authentication // This is the above HOC
// import Resources // this is the component we will wrap
//
// const ComposedComponent = Authentication(Resources);
//
// // in the render method
// <ComposedComponent resources={resourceList} />
