import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    position: 'relative',
    zIndex: 1,
    padding: '6em 10% 10em',
    background: '#fff',
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

export const Masthead = () => (
  <section style={styles.container}>
    <div style={[ styles.diagonals, styles.diagonalTop ]} />

    <h2 style={styles.header}>Services</h2>

    <div style={styles.subheader}>
      What do you want to achieve?
    </div>

    <div style={[ styles.diagonals, styles.diagonalBottom ]} />
  </section>
);

export default Radium( Masthead );

