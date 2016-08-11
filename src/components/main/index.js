import React from 'react';

import Masthead from '../masthead';

const Main = ({ children }) => (
  <div>
    <Masthead />
    { children }
  </div>
);

export default Main;
