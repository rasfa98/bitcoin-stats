import React, { Component } from 'react';
import './App.scss';

import Statistics from './components/Statistics';
import PriceChart from './components/PriceChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Statistics />
        <PriceChart />
      </div>
    );
  }
}

export default App;
