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
    fontSize: 16,
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
    // flex: 1,
    textAlign: 'center',
    fontSize: 48,
    margin: 20,
  },
};

export const About = () => (
  <div style={styles.wrapper}>
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
            Shields up! Rrrrred alert! For an android with no feelings, he sure managed to evoke them in others. This should be interesting. Worf, It's better than music. It's jazz. How long can two people talk about nothing? That might've been one of the shortest assignments in the history of Starfleet. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. You're going to be an interesting companion, Mr. Data. What's a knock-out like you doing in a computer-generated gin joint like this? A lot of things can change in twelve years, Admiral.
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
  </div>
);

export default Radium( About );

