import React from 'react';

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    minHeight: 500,
    backgroundColor: '#33597F',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  header: {
    fontFamily: 'Quicksand',
    fontSize: '3em',
    textAlign: 'center',
  },
};

export default () => (
  <section style={styles.container}>
    <h1 style={styles.header}>Josh David Miller</h1>
  </section>
);

