import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AuthPage,
  HomePage,
  MembersPage,
  NewsPage,
  TeachersPage,
  NotFound
} from './pages';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
        <Switch>   
          <Route exact path="/" component={HomePage} />
          <Route exact path="/members" component={MembersPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/teachers" component={TeachersPage} />
          <Route component={NotFound} />
        </Switch>
    );
  }
  return (
    <div className="inner">
    <Switch>
      <Route exact path="/" component={(AuthPage)} />
      <Redirect to="/" />
    </Switch>
    </div>
  );
}