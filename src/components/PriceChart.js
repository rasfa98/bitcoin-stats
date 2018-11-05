import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class PriceChart extends Component {
  state = {
    chartData: null
  };

  componentDidMount() {
    // TODO: Fetch historical data.
  }

  render() {
    return <Bar data={this.state.chartData} />;
  }
}

export default PriceChart;
