import React from 'react';
import Radium from 'radium';

import {
  mediaSM,
  mediaMD,
  mediaLG,
} from '../../styles/breakpoints';
import Container from '../container';

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    background: '#fff',
    marginBottom: 60,
  },

  container: {
    position: 'relative',
    top: -75,
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

  item: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 15,
    padding: 30,
    height: 325,
    color: '#FFFFFF',
  },

  events: {
    backgroundColor: '#FF5252',
  },

  startups: {
    backgroundColor: '#4CAF50',
  },

  code: {
    backgroundColor: '#2196F3',
  },

  itemHeader: {
    margin: 0,
    padding: 0,
    fontFamily: 'Quicksand',
    fontWeight: 700,
  },

  diagonals: {
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    left: '-25%',
    zIndex: -1,
    width: '150%',
    height: '75%',
    backgroundColor: 'inherit',
    transform: 'rotate(-2deg)',
    transformOrigin: '0 0',
  },

  diagonalTop: {
    height: '50%',
    backgroundColor: '#6699CC',
    transform: 'rotate(-3deg)',
    transformOrigin: '3% 0',
  },

  diagonalBottom: {
  },
};

export const Jumbotron = () => (
  <section style={styles.wrapper}>
    <div style={[ styles.diagonals, styles.diagonalTop ]} />
    <div style={[ styles.diagonals, styles.diagonalBottom ]} />

    <Container style={styles.container}>
      <div style={[ styles.item, styles.events ]}>
        <h3 style={styles.itemHeader}>Upcoming Events</h3>
        <div style={{flex: 1}} />
      </div>

      <div style={[ styles.item, styles.startups ]}>
        <h3 style={styles.itemHeader}>Starting Thoughts</h3>
        <div style={{flex: 1}} />
      </div>

      <div style={[ styles.item, styles.code ]}>
        <h3 style={styles.itemHeader}>Code Camp</h3>
        <div style={{flex: 1}} />
      </div>
    </Container>
  </section>
);

export default Radium( Jumbotron );

