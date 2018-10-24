import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import authenticatedmasterPage from './authenticated/authenticatedmasterPage';
import PrivateRoute from './common/PrivateRoute';
import unauthenticatedmasterPage from './unauthenticated/unauthenticatedmasterPage';


const App = () => (
  <Router>
    <div>
      <PrivateRoute path="/" component={authenticatedmasterPage} />
      <Route path="/login" component={unauthenticatedmasterPage} />
    </div>
  </Router>
);


export default App;
