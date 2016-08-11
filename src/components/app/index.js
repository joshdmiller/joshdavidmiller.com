import React from 'react';
import { Router, browserHistory, createMemoryHistory } from 'react-router';

import routes from '../../routes';

export default () => {
  return (
    <Router history={browserHistory} children={routes} />
  );
}

