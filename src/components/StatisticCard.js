import React from 'react';

function StatisticCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.icon}</h2>
      <p>{props.value}</p>
    </div>
  );
}

export default StatisticCard;
