import React from 'react';
import Radium from 'radium';

import Masthead from '../masthead';
import Footer from '../footer';
import Services from '../services';
import Jumbotron from '../jumbotron';
import About from '../about';

export const HomePage = () => {
  const styles = {
    container: {
      overflowX: 'hidden',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <Masthead id="top" />
      <Jumbotron id="headline" />
      <Services id="services" />
      <About id="whoami" />
      <Footer />
    </div>
  );
}

export default Radium( HomePage );
