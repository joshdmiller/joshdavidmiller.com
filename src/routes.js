import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/main';
import HomePage from './components/home-page';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
  </Route>
);

