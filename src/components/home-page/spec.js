import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import Home from './';

test( 'Home', t => {
  let expected, actual;

  const wrapper = shallow( <Home /> );
  expected = true;
  actual = wrapper.is( 'div' );

  t.ok( actual === expected, 'renders a div' );

  t.end();
});

