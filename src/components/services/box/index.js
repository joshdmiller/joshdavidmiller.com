import React from 'react';
import Radium from 'radium';
import tapOrClick from 'react-tap-or-click';
import {
  mediaSM,
  mediaMD,
  mediaLG,
} from '../../../styles/breakpoints';

const styles = {
  wrapper: {
    flex: 1,
    margin: '20px 15px',

    [mediaMD]: {
      margin: '80px 15px',
    },

    [mediaLG]: {
      margin: '80px 15px',
    },
  },

  container: {
    width: '100%',
    height: 320,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    textAlign: 'center',
    transition: 'all 300ms ease',
  },

  containerHover: {
    borderColor: '#6699CC',
    transition: 'all 300ms ease',
  },

  header: {
    position: 'relative',
    top: 80,
    margin: '10px 0',
    padding: 0,
    fontFamily: 'Quicksand',
    fontWeight: 700,
    transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  headerHover: {
    top: -30,
  },

  icon: {
    position: 'relative',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    top: 100,
    width: 60,
    height: 60,
    fontSize: 36,
    textAlign: 'center',
    transition: 'all 300ms ease',
  },

  iconHover: {
    top: -30,
    color: '#6699CC',
  },

  description: {
    width: '85%',
    margin: '0 auto',
    opacity: 0,
    transform: 'scale(0)',
    transition: 'all 600ms cubic-bezier( 0.68, 0.55, 0.265, 1.55 )',
    fontFamily: 'Quicksand',
  },

  descriptionHover: {
    opacity: 1,
    transform: 'scale(1)',
  },
};

class Box extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = { hover: false };
  }

  render () {
    const { hover } = this.state;
    const {
      title,
      icon,
      children,
    } = this.props;

    return (
      <div
        style={styles.wrapper}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        {...tapOrClick( () => this.setState({ hover: ! hover }) )}
      >
        <div style={[ styles.container, hover && styles.containerHover ]}>
          <i className={`fa fa-${icon}`} style={[ styles.icon, hover && styles.iconHover ]} />
          <h3 style={[ styles.header, hover && styles.headerHover ]}>
            {title}
          </h3>
          <p style={[ styles.description, hover && styles.descriptionHover ]}>
            { children }
          </p>
        </div>
      </div>
    );
  }
}

export default Radium( Box );


