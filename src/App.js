import React from "react";
import "./App.css";

import MapData from "./MapData";
import SecMapD from "./SecMapD";
import PrintJson from "./PrintJson";

function App() {
  return (
    <div className="pDate">
      <h1>Weather Data</h1>
      <MapData />
      <SecMapD />

      <PrintJson />
    </div>
  );
}

export default App;
