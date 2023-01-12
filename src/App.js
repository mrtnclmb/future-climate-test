import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content-container">
        <div className="main-content">
          <p className="main-content-title">Exposure risk by hazard for <strong>2030, Business as usual</strong></p>
          <p className="main-content-description">40 models, 25 km spatial resolution, 587 numerical simulations, 6 climate variables, 5 ancillary datasets, 30 TB processed data</p>
          <div className="pie-charts-container">
            <PieChart
              label="Combined"
              data={{high: 20, medium: 20, moderate: 60}}
            />
            <PieChart
              label="Drought risk"
              data={{high: 40, medium: 20, moderate: 40}}
            />
            <PieChart
              label="Extreme Temperatures"
              data={{high: 10, medium: 40, moderate: 50}}
            />
            <PieChart
            label="Extreme Precipitation"
            data={{high: 50, medium: 40, moderate: 10}}
            />
          </div>

          <div className="pie-charts-container">
            <PieChart
              label="Combined"
              data={{high: 20, medium: 20, moderate: 60}}
              hidden
            />
            <PieChart
              label="Drought risk"
              data={{high: 40, medium: 20, moderate: 40}}
            />
            <PieChart
              label="Extreme Temperatures"
              data={{high: 10, medium: 40, moderate: 50}}
            />
            <PieChart
            label="Extreme Precipitation"
            data={{high: 50, medium: 40, moderate: 10}}
            />
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
}

export default App;
