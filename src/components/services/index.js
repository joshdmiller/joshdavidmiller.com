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
        Could someone survive inside a transporter buffer for 75 years? The Federation's gone; the
        Borg is everywhere!
      </Box>
      <Box title="Product Development" icon="tasks">
        Well, that's certainly good to know. The unexpected is our normal routine. Mr. Worf, you do
        remember how to fire phasers? How long can two people talk about nothing?
      </Box>
      <Box title="Developer Training" icon="code">
        Wait a minute - you've been declared dead. You can't give orders around here. Well, I'll say
        this for him - he's sure of himself.
      </Box>
    </Container>
  </section>
);

export default Radium( Services );

