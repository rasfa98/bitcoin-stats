import React, { Component } from 'react';
import axios from 'axios';

class Statistics extends Component {
  state = {
    symbol: null,
    price: null,
    total_volume_24_hours: null,
    high_day: null,
    low_day: null,
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
      TOTALVOLUME24H,
      HIGHDAY,
      LOWDAY,
      LASTMARKET,
      CHANGEPCT24HOUR,
      CHANGEPCTDAY,
      MKTCAP
    } = res.data.DISPLAY.BTC.EUR;

    this.setState({
      symbol: FROMSYMBOL,
      price: PRICE,
      total_volume_24_hours: TOTALVOLUME24H,
      high_day: HIGHDAY,
      low_day: LOWDAY,
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
      </div>
    );
  }
}

export default Statistics;
