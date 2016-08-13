import React from 'react';
import Radium from 'radium';

import Masthead from '../masthead';
import Footer from '../footer';
import Services from '../services';
import Jumbotron from '../jumbotron';

export const HomePage = () => {
  const styles = {
    container: {
      overflowX: 'hidden',
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <Masthead />
      <Jumbotron />
      <Services />

      <div style={{minHeight:1000}}></div>

      <Footer />
    </div>
  );
}

export default Radium( HomePage );
