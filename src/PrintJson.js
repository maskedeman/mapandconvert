import React from "react";

import "./App.css";
import Convert from "./Convert";
import dummyData from "./dummy_data.json";
import dumData2 from "./dummy_data2.json";

const PrintJson = () => {
  return (
    <div className="container">
      <div className="left">
        <h6>dummy_data</h6>
        <pre
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dummyData, null, 2),
          }}
        />
      </div>
      <div className="right">
        <h6>dummy_data2</h6>
        <pre
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dumData2, null, 2),
          }}
        />
      </div>

      <h3>To</h3>

      <div className="btn">
        {" "}
        <Convert />
      </div>
    </div>
  );
};
export default PrintJson;
