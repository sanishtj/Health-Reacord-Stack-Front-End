import React from 'react';
import { Switch, Route } from 'react-router-dom';

import authenticatedmasterPage from './authenticated/authenticatedmasterPage';
import PrivateRoute from './common/PrivateRoute';
import unauthenticatedmasterPage from './unauthenticated/unauthenticatedmasterPage';

const App = () => (
  <Switch>
    <React.Fragment>
      <PrivateRoute path="/" component={authenticatedmasterPage} />
      <Route path="/login" component={unauthenticatedmasterPage} />
    </React.Fragment>
  </Switch>
);

export default App;
