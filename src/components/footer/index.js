import React from 'react';
import Radium from 'radium';

import Link from '../link';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
    backgroundColor: '#33597F',
    color: '#FFFFFF',
  },

  headline: {
    marginBottom: 30,
    fontFamily: 'Quicksand',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '1.75em',
  },

  cta: {
    borderRadius: '2em',
    backgroundColor: '#C4756F',
    padding: '0.5em 1.25em',
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

  copyright: {
    textAlign: 'center',
    padding: 15,
    lineHeight: 1.5,
  },
};

export const Footer = () => (
  <footer style={styles.container}>
    <div style={styles.contact}>
      <div style={styles.headline}>
        Interested in working together?
      </div>
      
      <a style={styles.cta} href="#">Let's Get Started</a>
    </div>

    <div style={styles.copyright}>
      &copy; Josh David Miller

      <br />

      Content under&nbsp;
      <Link to="http://creativecommons.org/licenses/by-sa/4.0/">
        Creative Commons SA-BY
      </Link>

      <br />

      Source is on&nbsp;
      <Link to="https://github.com/joshdmiller/joshdavidmiller.com">
        Github
      </Link>
    </div>
  </footer>
);

export default Radium( Footer );

