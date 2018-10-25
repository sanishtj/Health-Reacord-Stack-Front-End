import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PageShell = (Page, location) => props => (

  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={10000}>
      <Switch location={location}>
        <Page {...props} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>

);

export default PageShell;
