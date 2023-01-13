import React from 'react';

function Searchbox() {
  return (
    <div className="searchbox">
      <div className="search-icon"></div>
      <input className="search-input" type="text" id="search-input" name="name" minlength="3" size="10" placeholder="Find by name" />
    </div>
  );
}

export default Searchbox;
