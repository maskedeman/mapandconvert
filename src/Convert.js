import React from "react";
import dummyData from "./dummy_data.json";

const convertData = () => {
  const convertedData = {};
  dummyData.forEach((item) => {
    item.data.forEach((dataItem) => {
      if (!convertedData[dataItem.time]) {
        convertedData[dataItem.time] = {};
      }

      convertedData[dataItem.time][item.name] = dataItem.value;
    });
  });

  //console.log(convertedData);
  // Download the converted data as JSON file
  const json = JSON.stringify(convertedData, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "dummy_data_2.json";
  link.click();
};

const Convert = () => {
  return (
    <div>
      <button onClick={convertData}>Convert Data and Download</button>
    </div>
  );
};

export default Convert;
