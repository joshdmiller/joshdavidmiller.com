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

const appointments = [
  {
    name: 'Say Hello',
    url: 'https://calendly.com/joshdmiller/hello',
    description: [
      "Just want to say a quick hello? Hit me up - I'd love to connect and hear about what you're",
      "working on and how I might be able to help.",
    ].join( "\n" ),
  },
  {
    name: 'Coaching Session (1 hr)',
    url: 'https://calendly.com/joshdmiller/coaching-1-hr',
    description: [
      "Need some guidance on your startup or product? Let's spend an hour talking about",
      "how you can get your product off the ground.",
    ].join( " \n" ),
  },
  {
    name: 'Coaching Session (2 hr)',
    url: 'https://calendly.com/joshdmiller/coaching-2-hr',
    description: [
      "Sometimes an hour just isn't enough time to get to the proverbial root of things.",
    ].join( "\n" ),
  },
];

export const Navigation = ({
  isOpen = false,
  toggle = () => null,
}) => {
  const InlineLink = ({ ...props }) => <Link {...props} onClick={toggle} />

  const styles = {
    container: {
      position: 'fixed',
      zIndex: 1,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: '#6699CC',
      visibility: 'hidden',
      transition: 'visibility 0s 0.7s',
    },

    inner: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
      padding: '40px 5% 40px calc( 5% + 80px )',
      transform: 'translateZ(0) translateX(-50%)',
      backfaceVisibility: 'hidden',
      transitionProperty: 'transform',
      transitionDuration: '0.7s',
      transitionTimingFunction: 'cubic-bezier(0.86, 0.01, 0.77, 0.78)',
      color: '#33597F',

      [mediaLG]: {
        padding: '62px 0',
      },

      [mediaGtMD]: {
        flexDirection: 'row',
      },
    },

    column: {
      flex: 1,
      margin: '0 10px',
    },

    apptList: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 60,
    },

    appt: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #77AADD',
      color: '#33597F',

      ':hover': {
        color: '#9EC0E1',
      },
    },

    apptLast: {
      borderBottom: 'none',
    },

    apptDetail: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      marginRight: 15,
    },

    apptName: {
      fontFamily: 'Quicksand',
      fontSize: 18,
      margin: '0 0 20px',
    },

    apptDescription: {
      margin: 0,
    },

    apptIcon: {
      fontSize: 36,
      width: 48,
      color: '#ffffff',
    },

    iconList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: '100%',
      padding: 0,
      marginBottom: 60,

      [mediaGtMD]: {
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    },

    icon: {
      textAlign: 'center',
      fontSize: 36,
      margin: '15px 20px 15px 0',
      color: '#33597F',

      ':hover': {
        color: '#9EC0E1',
      },

      [mediaGtMD]: {
        margin: 15,
      },
    },

    header: {
      fontFamily: 'Quicksand',
      color: '#9EC0E1',
      textTransform: 'uppercase',
      marginTop: 0,
    },

    linkList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 60,
    },

    link: {
      fontFamily: 'Quicksand',
      width: '100%',
      height: 48,
      lineHeight: '48px',
      color: '#33597F',
      fontWeight: '700',
      fontSize: 18,

      ':hover': {
        color: '#9EC0E1',
      },
    },
  };

  if ( isOpen ) {
    styles.container = {
      ...styles.container,
      visibility: 'visible',
      transition: 'visibility 0s 0s',
    };

    styles.inner = {
      ...styles.inner,
      transform: 'translateX(0)',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'cubic-bezier(0.82, 0.01, 0.77, 0.78)',
    };
  }

  return (
    <section style={styles.container}>
      <Container style={styles.inner}>
        <div style={styles.column}>
          <h3 style={styles.header}>About Me</h3>

          <div style={styles.linkList}>
            <InlineLink to="/#top" style={styles.link}>
              Home
            </InlineLink>

            <InlineLink to="/#whoami" style={styles.link}>
              Who am I?
            </InlineLink>

            <InlineLink to="/#services" style={styles.link}>
              Services
            </InlineLink>
          </div>

          <h3 style={styles.header}>Learn</h3>

          <div style={styles.linkList}>
            <Link to="/startingthoughts" style={styles.link}>
              Startups
            </Link>

            <Link to="/codecamp" style={styles.link}>
              Code Camp
            </Link>
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.header}>Social Media</h3>

          <div style={styles.iconList}>
            <Link style={styles.icon} to="https://twitter.com/joshdmiller" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://linkedin.com/in/joshdmiller" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://plus.google.com/+JoshDavidMiller" target="_blank">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://youtube.com" target="_blank">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://facebook.com/000.joshdmiller" target="_blank">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://stackoverflow.com/" target="_blank">
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            </Link>
            <Link style={styles.icon} to="https://github.com/joshdmiller" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </div>

          <h3 style={styles.header}>Book an Appointment</h3>

          <div style={styles.apptList}>
            { appointments.map( ( appt, idx ) =>
              <Link
                key={appt.url}
                style={[ styles.appt, appointments.length - 1 === idx && styles.apptLast ]}
                to={appt.url}
                target="_blank"
              >
                <div style={styles.apptDetail}>
                  <h4 style={styles.apptName}>{appt.name}</h4>
                  <p style={styles.apptDescription}>{appt.description}</p>
                </div>

                <div style={styles.apptArrow}>
                  <i className="fa fa-chevron-right" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Radium( Navigation );

