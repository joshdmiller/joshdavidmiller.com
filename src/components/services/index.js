import React from 'react';
import Radium from 'radium';

import Container from '../container';

const styles = {
  header: {
    margin: '10px 0',
    fontSize: 48,
    fontWeight: 500,
    textAlign: 'center',
  },

  subheader: {
    fontSize: 24,
    fontWeight: 300,
    textAlign: 'center',
    color: '#989da0',
  },
};

export const Services = () => (
  <Container>
    <h2 style={styles.header}>
      What do I do?
    </h2>

    <div style={styles.subheader}>
      I help launch and grow startups. Are you ready?
    </div>
  </Container>
);

export default Radium( Services );

