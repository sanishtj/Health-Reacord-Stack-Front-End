import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import loginPage from './loginPage';
import registerPage from './registerPage';
import forgotpasswordPage from './forgotpasswordPage';
import Footer from '../common/Footer';

const UnAuthenticatedContainer = () => (
  <div className="row">
    <div className="col-12">
      <Route
        render={({ location }) => (
          <div>
            <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={10000}>
              <Switch location={location}>
                <Route exact path="/" component={loginPage} />
                <Route exact path="/login" component={loginPage} />
                <Route exact path="/register" component={loginPage} />
                <Route
                  exact
                  path="/forgotpassword"
                  component={loginPage}
                />
              </Switch>

            </CSSTransition>
          </TransitionGroup>
            
          </div>
        )}
      />
    </div>
  </div>
);

export default UnAuthenticatedContainer;
