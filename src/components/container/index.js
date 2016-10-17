import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (min-width: 750px)': {
      width: 750,
    },

    '@media (min-width: 970px)': {
      width: 970,
    },

    '@media (min-width: 1170px)': {
      width: 1170,
    },
  },
};

export const Container = ({ style = {}, ...props }) => (
  <div style={[ styles.container, style ]} {...props} />
);

export default Radium( Container );

