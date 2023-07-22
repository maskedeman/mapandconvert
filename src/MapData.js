import React from "react";
import "./App.css";
import dumData from "./dummy_data.json";

const MapData = () => {
  const parameters = dumData.map((item) => item.name);
  const timestamps = dumData[0].data.map((item) => item.time);

  return (
    <table>
      <thead>
        <tr>
          <th>Parameters</th>
          {timestamps.map((timestamp) => (
            <th key={timestamp}>{timestamp}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dumData.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            {item.data.map((dataItem) => (
              <td key={dataItem.time}>{dataItem.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapData;
