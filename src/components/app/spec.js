import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import App from './';
import { Router } from 'react-router';

test( 'App', t => {
  let expected, actual;

  const wrapper = shallow( <App /> );
  expected = true;
  actual = wrapper.is( Router );

  t.equals( actual, expected, 'renders Router component' );

  t.end();
});

