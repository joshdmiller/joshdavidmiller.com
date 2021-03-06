import React from 'react';
import test from 'tape';
import { StyleRoot } from 'radium';
import { shallow } from 'enzyme';

import Main from './';

test( 'Main', t => {
  let expected, actual;

  const wrapper = shallow( <Main><p className="test" /></Main> );
  expected = true;
  actual = wrapper.is( StyleRoot );

  t.ok( actual === expected, 'renders a StyleRoot' );

  expected = 1;
  actual = wrapper.find( 'p.test' ).length;

  t.equals( actual, expected, 'renders the children passed in' );

  t.end();
});

