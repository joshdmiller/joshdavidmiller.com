import React from 'react';

import Masthead from '../masthead';
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

    return (
      <div>
        <NavigationTrigger isOpen={navIsOpen} onClick={::this._toggleNav} />
        <Navigation />

        <Masthead />

        { children }
      </div>
    );
  }

  _toggleNav () {
    this.setState({
      navIsOpen: ! this.state.navIsOpen,
    });
  }
}

export default Main;
