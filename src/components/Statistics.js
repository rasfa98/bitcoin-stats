import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import StatisticCard from './StatisticCard';

class Statistics extends Component {
  state = {
    price: null,
    last_market: null,
    change_24_hours: null,
    market_cap: null
  };

  async componentDidMount() {
    const URL =
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR';

    const res = await axios.get(URL);

    const {
      PRICE,
      LASTMARKET,
      CHANGEPCT24HOUR,
      MKTCAP
    } = res.data.DISPLAY.BTC.EUR;

    this.setState({
      price: PRICE,
      last_market: LASTMARKET,
      change_24_hours: CHANGEPCT24HOUR,
      market_cap: MKTCAP
    });
  }

  render() {
    return (
      <div>
        <h1>Bitcoin</h1>

        <div className="container">
          <StatisticCard
            name="Price"
            icon="fas fa-euro-sign"
            value={this.state.price}
          />
          <StatisticCard
            name="Market cap"
            icon="fas fa-chart-pie"
            value={this.state.market_cap}
          />
          <StatisticCard
            name="Last market"
            icon="fas fa-store-alt"
            value={this.state.last_market}
          />
          <StatisticCard
            name="Change 24 hours"
            icon={classnames('fas', {
              'fa-arrow-circle-down': this.state.change_24_hours < 0,
              'fa-arrow-circle-up': this.state.change_24_hours > 0
            })}
            value={`% ${this.state.change_24_hours}`}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;
