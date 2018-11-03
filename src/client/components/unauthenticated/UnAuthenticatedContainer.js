import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import loginPage from './loginPage';
import registerPage from './registerPage';
import forgotpasswordPage from './forgotpasswordPage';

const UnAuthenticatedContainer = () => (
  <div className="row">
    <div className="col-12">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={10000}>
              <Switch location={location}>
                <Route exact path="/login" component={loginPage} />
                <Route exact path="/register" component={registerPage} />
                <Route
                  exact
                  path="/forgotpassword"
                  component={forgotpasswordPage}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  </div>
);

export default UnAuthenticatedContainer;
