import React from 'react';
import Radium from 'radium';
import { Link as RouterLink } from 'react-router';

const A = Radium( RouterLink );

const styles = {
  a: {
    color: '#6699CC',
    textDecoration: 'none',
    transition: 'color 200ms',

    ':hover': {
      color: '#33597F',
    },
  },
};

export const Link = ({ style = {}, ...props }) => (
  <A style={{ ...styles.a, ...style }} {...props} />
);

export default Radium( Link );

