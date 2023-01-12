import React from 'react';

function Dropdown ({ label, value, size }) {
  return (
    <>
      { size === 'large' ? (
        <div className="dropdown-container">
          <p className="dropdown-label">{label}</p>
          <div className="dropdown">
            <p className="dropdown-value">{value}</p>
            <span className="dropdown-caret"></span>
          </div>
        </div>
      ) : (
        <div className="dropdown-container dropdown-small">
          <p className="dropdown-label">{label}</p>
          <div className="dropdown">
            <p className="dropdown-value">{value}</p>
            <span className="dropdown-caret"></span>
          </div>
        </div>
      )}
    </>
  );
}

export default Dropdown;
