import React from 'react';
import { AppRegistry } from 'react-native';

import TheApp from './App';

class App extends React.Component {
  render() {
    return (
      <TheApp />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });