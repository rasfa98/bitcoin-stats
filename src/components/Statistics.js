import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import StatisticCard from './StatisticCard';

class Statistics extends Component {
  state = {
    symbol: null,
    price: null,
    last_market: null,
    change_24_hours: null,
    change_day: null,
    market_cap: null
  };

  async componentDidMount() {
    const URL =
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR';

    const res = await axios.get(URL);

    const {
      FROMSYMBOL,
      PRICE,
      LASTMARKET,
      CHANGEPCT24HOUR,
      CHANGEPCTDAY,
      MKTCAP
    } = res.data.DISPLAY.BTC.EUR;

    this.setState({
      symbol: FROMSYMBOL,
      price: PRICE,
      last_market: LASTMARKET,
      change_24_hours: CHANGEPCT24HOUR,
      change_day: CHANGEPCTDAY,
      market_cap: MKTCAP
    });
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>
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
          icon="fas fa-shopping-cart"
          value={this.state.last_market}
        />
        <StatisticCard
          name="Change 24 hours"
          icon={classnames('fas', {
            'fa-caret-down': this.state.change_24_hours < 0,
            'fa-caret-up': this.state.change_24_hours > 0
          })}
          value={this.state.change_24_hours}
        />
        <StatisticCard
          name="Change day"
          icon={classnames('fas', {
            'fa-caret-down': this.state.change_day < 0,
            'fa-caret-up': this.state.change_day > 0
          })}
          value={this.state.change_day}
        />
      </div>
    );
  }
}

export default Statistics;
