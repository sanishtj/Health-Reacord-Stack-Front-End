import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (typeof localStorage !== 'undefined' && localStorage.getItem('user') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    ))
    }
  />
);

export default PrivateRoute;
