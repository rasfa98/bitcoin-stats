import React, { Component } from 'react';

class Statistics extends Component {
  state = {
    symbol: null,
    price: null,
    volume: null,
    high_day: null,
    low_day: null,
    last_market: null,
    change_24_hours: null,
    change_day: null,
    market_cap: null
  };

  componentDidMount() {
    // TODO: Fetch bitcoin data.
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>
      </div>
    );
  }
}

export default Statistics;
