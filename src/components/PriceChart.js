import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class PriceChart extends Component {
  state = {
    chartData: null,
    chartOptions: null
  };

  async componentDidMount() {
    const URL =
      'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=EUR&limit=30';

    const res = await axios.get(URL);
    const data = res.data.Data.map(x => x.high);

    const chartData = this.getChartData(data);
    const chartOptions = this.getChartOptions();

    this.setState({ chartData: chartData, chartOptions: chartOptions });
  }

  getChartData = data => {
    return {
      labels: Array(data.length),
      datasets: [
        {
          label: 'Price change',
          data: data
        }
      ]
    };
  };

  getChartOptions() {
    return {
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function(tooltipItem, chartData) {
            return '€ ' + tooltipItem.yLabel;
          }
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value, index, values) {
                return '€ ' + value;
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Price change 30 days</h1>
        <Line data={this.state.chartData} options={this.state.chartOptions} />
      </div>
    );
  }
}

export default PriceChart;
