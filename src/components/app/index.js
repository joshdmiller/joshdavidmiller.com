import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import zenscroll from 'zenscroll';

import routes from '../../routes';

let timeoutId;

if ( global.window ) {
  browserHistory.listen( ({ action, hash }) => {
    window.clearTimeout( timeoutId );

    if ( hash === 'POP' ) {
      return;
    }

    if ( hash ) {
      let el = document.querySelector( hash );
      let scroller = zenscroll.createScroller( document.getElementById( 'scroller' ) );
      if ( el ) {
        timeoutId = window.setTimeout( () => scroller.to( el ), 1000 );
        return;
      }
    }

    window.scrollTo( 0, 0 );
  });
}

export default () => {
  return (
    <Router
      history={browserHistory}
      children={routes}
    />
  );
}

