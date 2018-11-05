import React, { Component } from 'react';
import axios from 'axios';

import StatisticCard from './StatisticCard';

class Statistics extends Component {
  state = {
    symbol: null,
    price: null,
    total_volume_24_hours: null,
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
      TOTALVOLUME24HTO,
      LASTMARKET,
      CHANGEPCT24HOUR,
      CHANGEPCTDAY,
      MKTCAP
    } = res.data.DISPLAY.BTC.EUR;

    this.setState({
      symbol: FROMSYMBOL,
      price: PRICE,
      total_volume_24_hours: TOTALVOLUME24HTO,
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
        <StatisticCard name="Price" icon="" value={this.state.price} />
        <StatisticCard
          name="Total volume 24 hours"
          icon=""
          value={this.state.total_volume_24_hours}
        />
        <StatisticCard
          name="Last market"
          icon=""
          value={this.state.last_market}
        />
        <StatisticCard
          name="Change 24 hours"
          icon=""
          value={this.state.change_24_hours}
        />
        <StatisticCard
          name="Change day"
          icon=""
          value={this.state.change_day}
        />
        <StatisticCard
          name="Market cap"
          icon=""
          value={this.state.market_cap}
        />
      </div>
    );
  }
}

export default Statistics;
