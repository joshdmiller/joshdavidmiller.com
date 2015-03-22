import React from 'react'
import Toolbar from '../toolbar'

export default class MainView extends React.Component {
  render () {
    return (
      <md-content data-flex>
        <Toolbar />
        <md-content data-flex>
          <h1>Hello, world!</h1>
        </md-content>
      </md-content>
    );
  }
}

