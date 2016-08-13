import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 500,
    backgroundColor: '#33597F',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 0px',

    '@media (min-width: 1170px)': {
      paddingBottom: 240,
    },
  },

  header: {
    margin: '0px 0px 20px',
    fontFamily: 'Quicksand',
    fontSize: '3em',
    textAlign: 'center',
  },

  headline: {
    marginBottom: 60,
    fontFamily: 'Quicksand',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '1.75em',
  },

  cta: {
    borderRadius: '2em',
    backgroundColor: '#C4756F',
    padding: '0.5em 0.75em',
    minWidth: 250,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontSize: '1.5em',
    color: '#FFF',
    textDecoration: 'none',
    transition: 'background-color 250ms',

    ':hover': {
      backgroundColor: '#D4857F',
    },
  },
};

export const Masthead = () => (
  <section style={styles.container}>
    <h1 style={styles.header}>Josh David Miller</h1>

    <div style={styles.headline}>
      product manager, speaker, adviser, entrepreneur
    </div>

    <a style={styles.cta} href="#">Get in Touch</a>
  </section>
);

export default Radium( Masthead );

