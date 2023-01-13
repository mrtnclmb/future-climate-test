import React from 'react';

const dot = (color) => {
  return (
    <span className="dot" style={{ backgroundColor: color}}>
    </span>
  );
}

function TableBody({ tableData, columns }) {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }, index) => {
              return (
                <td key={accessor}>
                  { index === 0 ? (data[accessor] || "——")
                    : <span className="dot" style={{ backgroundColor: 'green'}}></span>
                  }
                </td>
              )
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
