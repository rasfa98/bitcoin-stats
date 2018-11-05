import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class PriceChart extends Component {
  state = {
    chartData: null
  };

  async componentDidMount() {
    const URL =
      'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=EUR&limit=7';

    const res = await axios.get(URL);
    const data = this.mapHistoricalData(res.data.Data);
    const chartData = this.getChartData(data.max, data.formatedDates);

    this.setState({ chartData: chartData });
  }

  mapHistoricalData(data) {
    const max = data.map(x => x.high);
    const dates = data.map(x => x.time);

    const formatedDates = [];

    dates.forEach(x => {
      const date = new Date(x * 1000);
      formatedDates.push(date);
    });

    return { max: max, formatedDates: formatedDates };
  }

  getChartData = (data, labels) => {
    return {
      labels: labels,
      datasets: [
        {
          label: 'Price change',
          data: data
        }
      ]
    };
  };

  render() {
    return <Line data={this.state.chartData} />;
  }
}

export default PriceChart;
