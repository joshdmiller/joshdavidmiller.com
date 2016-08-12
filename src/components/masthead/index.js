import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    minHeight: 500,
    backgroundColor: '#33597F',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '200px 5%',

    '@media (min-width: 768px)': {
      padding: '250px 10%',
    },
  },

  header: {
    fontFamily: 'Quicksand',
    fontSize: '3em',
    textAlign: 'center',
  },
};

export const Masthead = () => (
  <section style={styles.container}>
    <h1 style={styles.header}>Josh David Miller</h1>
  </section>
);

export default Radium( Masthead );

