import React from 'react';
import { StyleRoot } from 'radium';

import Navigation from '../navigation';
import NavigationTrigger from '../navigation-trigger';

class Main extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = {
      navIsOpen: false,
    };
  }

  render () {
    const { children } = this.props;
    const { navIsOpen } = this.state;

    const styles = {
      content: {
        position: 'relative',
        zIndex: 2,
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#fff',
        backfaceVisibility: 'hidden',
        transitionProperty: 'transform',
        transitionDuration: '0.7s',
        transitionTimingFunction: 'cubic-bezier(0.91, 0.01, 0.6, 0.99)',
      },

      container: {
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
      },
    };

    if ( navIsOpen ) {
      styles.content = {
        ...styles.content,
        transform: 'translateX(100%)',
      };
    }

    return (
      <StyleRoot style={styles.container}>
        <NavigationTrigger isOpen={navIsOpen} onClick={::this._toggleNav} />
        <Navigation isOpen={navIsOpen} />

        <div style={styles.content}>
          { children }
        </div>
      </StyleRoot>
    );
  }

  _toggleNav () {
    this.setState({
      navIsOpen: ! this.state.navIsOpen,
    });
  }
}

export default Main;
