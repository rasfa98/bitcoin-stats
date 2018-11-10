import React from 'react';

function StatisticCard(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2 className="icon">
        <i className={props.icon} />
      </h2>
      <p>{props.value}</p>
    </div>
  );
}

export default StatisticCard;
