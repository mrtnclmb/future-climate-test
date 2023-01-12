import React from 'react';
import Dropdown from './Dropdown';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">

        <div className="main-dropdown-container header-column">
          <img className="header-icon" src="img/home-icon.png" alt="home-icon" />
          <Dropdown
            label="WSP"
            value="Sustainable capital"
            size="large"
          />
        </div>

        <div className="view-settings-container header-column">
          <Dropdown
            label="Current view"
            value="Compare hazards"
            size="large"
          />
          <Dropdown
            label="Period"
            value="2030"
            size="small"
          />
          <Dropdown
            label="Scenario"
            value="Business as usual"
            size="small"
          />
          <Dropdown
            label="Asset category"
            value="All"
            size="small"
          />
        </div>
        <div className="account-dropdown-container header-column">
          <img className="header-icon" src="img/account-icon.png" alt="account-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
