import React from 'react';
import Radium from 'radium';

import {
  mediaSM,
  mediaMD,
  mediaLG,
} from '../../styles/breakpoints';
import Container from '../container';
import Box from './box';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },

  headerContainer: {
    marginBottom: 30,
  },

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

  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [mediaSM]: {
      top: -100,
    },

    [mediaMD]: {
      top: -100,
      flexDirection: 'row',
    },

    [mediaLG]: {
      top: -160,
      flexDirection: 'row',
    },
  },
};

const Services = ({ id }) => (
  <section style={styles.wrapper} id={id}>
    <Container style={styles.headerContainer}>
      <h2 style={styles.header}>
        What do I do?
      </h2>

      <div style={styles.subheader}>
        I help launch and grow startups. Are you ready?
      </div>
    </Container>

    <Container style={styles.boxContainer}>
      <Box title="Startup Coaching" icon="graduation-cap">
        I help make ideas marketable, guiding founders through the difficult terrain
        of the early startup roadmap: discovering customers, finding product-market fit, and
        identifying the minimum viable product.
      </Box>
      <Box title="Product Strategy" icon="tasks">
        I work with startups of all sizes to conceptualize, prioritize, develop, and market new
        products and features, with an intense focus on rigorous hypothesis testing and delightful
        user experience.
      </Box>
      <Box title="Developer Training" icon="code">
        Working with young coders to bridge the gap between hobby and profession is one of my
        passions. Focusing on pig picture concepts and best practices, I teach aspiring developers
        how to think about the engineering process.
      </Box>
    </Container>
  </section>
);

export default Radium( Services );

