import React from 'react';
import { Route, Link } from 'react-router-dom';
import memberlistPage from '../authenticated/members/memberlistPage';
import memberdetailsPage from '../authenticated/members/memberdetailsPage';
import addmemberPage from '../authenticated/members/addmemberPage';
import updatememberPage from '../authenticated/members/updatememberPage';
import medicalhistorylistPage from '../authenticated/medicalhistory/medicalhistorylistPage';
import addmedicalhistoryPage from '../authenticated/medicalhistory/addmedicalhistoryPage';
import sharemedicalhistoryPage from '../authenticated/medicalhistory/sharemedicalhistoryPage';

const Container = () => (
  <div className="row">
    <div className="col">
      <Link to="/members">Members</Link>
      <Link to="/members/1">Member Details</Link>
      <Link to="/member/add">Add Member</Link>
      <Link to="/members/update/:memberid">Update Member</Link>
      <Link to="/medicalhistories/:memberid">Medical Histories</Link>
      <Link to="/medicalhistories/:memberid/add">Add Medical Histories</Link>
      <Link to="/medicalhistories/:memberid/share">
        Share Medical Histories
      </Link>
    </div>
    <div className="col-9">
      <Route exact path="/" component={memberlistPage} />
      <Route exact path="/members" component={memberlistPage} />
      <Route exact path="/members/:memberid" component={memberdetailsPage} />
      <Route exact path="/member/add" component={addmemberPage} />
      <Route exact path="/members/update/:memberid" component={updatememberPage} />
      <Route exact path="/medicalhistories/:memberid" component={medicalhistorylistPage} />
      <Route exact path="/medicalhistories/:memberid/add" component={addmedicalhistoryPage} />
      <Route exact path="/medicalhistories/:memberid/share" component={sharemedicalhistoryPage} />
    </div>
  </div>
);

export default Container;
