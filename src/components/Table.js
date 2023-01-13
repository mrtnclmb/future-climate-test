import React, { useState } from 'react';
import Searchbox from './Searchbox';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table(props) {
  const [tableData, setTableData] = useState(props.data);

  const columns = [
   { label: "Asset name", accessor: "asset_name" },
   { label: "Combined", accessor: "combined" },
   { label: "Extreme temperatures", accessor: "extreme_temperatures" },
   { label: "Drought", accessor: "drought" },
   { label: "Wildfires", accessor: "wildfires" },
   { label: "Extreme precipitation", accessor: "extreme_precipitation" },
   { label: "Fluvial flooding", accessor: "fluvial_flooding" },
   { label: "Coastal flooding", accessor: "coastal_flooding" },
  ];

  const dataPlaceholder = {
    "asset_name": "Loading...",
    "combined": "Loading...",
    "extreme_temperatures": "Loading...",
    "drought": "Loading...",
    "wildfires": "Loading...",
    "extreme_precipitation": "Loading...",
    "fluvial_flooding": "Loading...",
    "coastal_flooding": "Loading..."
  }

  return (
    <div className="table-container">
      <div className="searchbox-container">
        <Searchbox />
      </div>
      <table id="assets-table">
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData || dataPlaceholder} />
      </table>
    </div>
  );
}

export default Table;
