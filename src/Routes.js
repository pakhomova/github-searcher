import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import MainPage from './containers/main-page';
import UserPage from './containers/user-page';

export default () => (
  <Switch>
    <Route exact path={routes.MAIN} component={MainPage} />
    <Route path={routes.USER} component={UserPage} />
  </Switch>
);
