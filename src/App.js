import React, { Component } from 'react';
import './App.scss';

import Statistics from './components/Statistics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Statistics />
      </div>
    );
  }
}

export default App;
