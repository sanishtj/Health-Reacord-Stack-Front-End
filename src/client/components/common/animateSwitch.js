import React from 'react';
import { Route, Switch } from 'react-router-dom';


const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  children,
}) => (
  <Route
    render={({ location }) => (
      <CustomSwitch location={location}>{children}</CustomSwitch>
    )}
  />
);

export default animateSwitch;
