import React from 'react';
import Radium from 'radium';

import {
  mediaSM,
  mediaMD,
  mediaLG,
  mediaGtMD,
} from '../../styles/breakpoints';
import Container from '../container';
import Link from '../link';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#A1C3E5',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    [mediaGtMD]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      // marginTop: 20,
      marginBottom: 20,
    },
  },

  photo: {
    flex: 1,
    padding: 30,
  },

  image: {
    borderRadius: '50%',
    maxWidth: '100%',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    padding: 30,
    fontSize: 18,
    lineHeight: 1.4,
    textAlign: 'center',

    [mediaGtMD]: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  },

  header: {
    margin: 0,
    fontSize: 48,
    fontWeight: 500,
  },

  triangle: {
    width: '100%',
    marginBottom: 20,
  },

  trianglePath1: {
    fill: '#fff',
    stroke: '#fff',
  },

  trianglePath2: {
    fill: '#6699CC',
    stroke: '#6699CC',
  },

  iconList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: '0 30px 30px',
  },

  icon: {
    textAlign: 'center',
    fontSize: 48,
    margin: 20,
  },
};

export const About = ({ id }) => (
  <section style={styles.wrapper} id={id}>
    <svg
      style={ styles.triangle }
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path style={ styles.trianglePath1 } d="M0 0 L50 100 L100 0 Z" />
      <path style={ styles.trianglePath2 } d="M50 100 L100 40 L100 0 Z" />
    </svg>

    <Container style={styles.container}>
        <div style={styles.photo}>
          <img
            style={styles.image}
            src="https://en.gravatar.com/userimage/33917473/300bc2f5d402a5a4f99a7a25d3ab9267.jpg?size=600"
            alt="Photo of Josh David Miller"
          />
        </div>

        <div style={styles.body}>
          <h2 style={styles.header}>
            Who am I?
          </h2>

          <p>
            I help early-stage startups launch winning products. Leveraging a background in managing
            multi-million-dollar marketing analytics initiatives and a passion for science, I have
            helped dozens of startup achieve product-market fit by focusing on hypothesis testing,
            measurement, and rapid iteration.  I believe creating memorable, delightful user
            experience is paramount. I also believe creating great products means embracing failure.
            If one has never had a bad idea, how would she know if she had a good one? Oh, and I
            only use my powers for good. 
          </p>
        </div>
    </Container>

    <Container style={styles.container}>
      <div style={styles.iconList}>
        <Link style={styles.icon} to="https://twitter.com/joshdmiller">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://linkedin.com/in/joshdmiller">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://plus.google.com/+JoshDavidMiller">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://youtube.com">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://facebook.com/000.joshdmiller">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://stackoverflow.com/">
          <i className="fa fa-stack-overflow" aria-hidden="true"></i>
        </Link>
        <Link style={styles.icon} to="https://github.com/joshdmiller">
          <i className="fa fa-github" aria-hidden="true"></i>
        </Link>
      </div>
    </Container>
  </section>
);

export default Radium( About );

