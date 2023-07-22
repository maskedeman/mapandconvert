import React from "react";
import "./App.css";
import dumData2 from "./dummy_data2.json";

const SecMapD = () => {
  const tableData = Object.entries(dumData2);
  const headers = Object.keys(tableData[0][1]);

  return (
    <>
      <h1> To</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(([time, values]) => (
            <tr key={time}>
              <td>{time}</td>
              {headers.map((header) => (
                <td key={header}>{values[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SecMapD;
