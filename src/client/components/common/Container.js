import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import memberlistPage from '../authenticated/members/memberlistPage';
import memberdetailsPage from '../authenticated/members/memberdetailsPage';
import addmemberPage from '../authenticated/members/addmemberPage';
import updatememberPage from '../authenticated/members/updatememberPage';
import medicalhistorylistPage from '../authenticated/medicalhistory/medicalhistorylistPage';
import addmedicalhistoryPage from '../authenticated/medicalhistory/addmedicalhistoryPage';
import sharemedicalhistoryPage from '../authenticated/medicalhistory/sharemedicalhistoryPage';
import Footer from './Footer';

const Container = () => (
  <div className="authenticated">
    <div className="row">
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        {/* <Link to="/members">Members</Link>
      <Link to="/members/1">Member Details</Link>
      <Link to="/member/add">Add Member</Link>
      <Link to="/members/update/1">Update Member</Link>
      <Link to="/medicalhistories/1">Medical Histories</Link>
      <Link to="/medicalhistories/1/add">Add Medical Histories</Link>
      <Link to="/medicalhistories/1/share">
        Share Medical Histories
      </Link> */}
        <aside className="left-nav">
          <nav vbleftnavigation="" className="menu-on">
            <ul>
              <li>
                <Link to="/members">
                  <i className="fa fa-tachometer" />
                  <span>Members</span>
                </Link>
              </li>
              <li>
                <Link to="/members/1">
                  <i className="fa fa-tachometer" />
                  <span>Member Details</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={10000}
              >
                <Switch location={location}>
                  <Route exact path="/" component={memberlistPage} />
                  <Route exact path="/members" component={memberlistPage} />
                  <Route
                    exact
                    path="/members/:memberid"
                    component={memberdetailsPage}
                  />
                  <Route exact path="/member/add" component={addmemberPage} />
                  <Route
                    exact
                    path="/members/update/:memberid"
                    component={updatememberPage}
                  />
                  <Route
                    exact
                    path="/medicalhistories/:memberid"
                    component={medicalhistorylistPage}
                  />
                  <Route
                    exact
                    path="/medicalhistories/:memberid/add"
                    component={addmedicalhistoryPage}
                  />
                  <Route
                    exact
                    path="/medicalhistories/:memberid/share"
                    component={sharemedicalhistoryPage}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </div>

    <Footer />
  </div>
);

export default Container;
