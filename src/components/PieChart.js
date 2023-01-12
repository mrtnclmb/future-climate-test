import React from 'react';

function PieChart({ label, data, hidden }) {
  /* TO-DO: Implement percentage from data prop */
  return (
    <div className={`pie-chart-container ${hidden && 'not-visible'}`}>
      <div className="chart-visibility-toggle">
        <img src="img/eye-icon.png" className="visibility-toggle-icon" alt="Visibility toggle icon" />
        <p className="visibility-toggle-label">{label}</p>
      </div>
      <div className="pie-chart-content-container">
        <figure className="pie-chart-figure">
          <svg className="pie-chart" viewBox="0 0 63.6619772368 63.6619772368">
            <circle className="pie1" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
            <circle className="pie2" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
            <circle className="pie3" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
            <circle className="pie4" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
          </svg>
        </figure>
        <div className="pie-chart-labels-container">
          <p className="pie-chart-label">{`${data.high}% High`}</p>
          <p className="pie-chart-label">{`${data.medium}% Medium`}</p>
          <p className="pie-chart-label">{`${data.moderate}% Moderate`}</p>
        </div>
      </div>
    </div>
  )
}

export default PieChart;
