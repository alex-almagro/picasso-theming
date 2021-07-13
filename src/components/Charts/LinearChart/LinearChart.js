// Adapted from: https://observablehq.com/@miralemd/picasso-js-bar-chart?collection=@miralemd/picasso-js

import React, { useEffect, useState } from "react";
import picasso from "picasso.js";

const LinearChart = (props) => {
  // We add the customized format using 'props.currencyFormat' and 'props.dateFormat'

  // we use state to generate random data only once and store it
  const [data, setData] = useState(null);

  // define the data for the chart
  const getData = () => {
    const arr = [["Year", "Sales"]];
    let sales = 0.5;
    let currentDate = new Date();
    for (let i = 0; i < 500; i++) {
      currentDate.setDate(currentDate.getDate() + 1);
      sales = sales - 2 + 4 * Math.random();
      arr.push([currentDate.valueOf(), 10000 + sales * 10000]);
    }
    return [
      {
        type: "matrix",
        data: arr,
      },
    ];
  };

  // define the settings for the chart
  const getSettings = () => ({
    scales: {
      y: {
        data: { field: "Sales" },
        invert: true,
        expand: 0.2,
      },
      t: {
        data: {
          extract: { field: "Year" },
        },
      },
    },
    components: [
      {
        type: "axis",
        dock: "left",
        scale: "y",
        formatter: props.currencyFormat,
      },
      {
        type: "axis",
        dock: "bottom",
        scale: "t",
        formatter: props.dateFormat,
      },
      {
        key: "lines",
        type: "line",
        data: {
          extract: {
            field: "Year",
            props: {
              v: { field: "Sales" },
            },
          },
        },
        settings: {
          coordinates: {
            major: { scale: "t" },
            minor: { scale: "y", ref: "v" },
          },
          layers: {
            line: {},
          },
        },
      },
    ],
  });

  // adding a style is optional
  const style = {
    "$font-size": "14px",
    "$font-size--l": "18px",
    "$font-family": "Noto Sans JP",
  };

  //render the bar chart
  const renderChart = () => {
    picasso({ style }).chart({
      element: document.querySelector("#linearchart"),
      data: data,
      settings: getSettings(),
    });
  };

  useEffect(() => {
    setData(getData());
  }, []);
  useEffect(() => {
    if (data) {
      renderChart();
    }
  }, [props.currencyFormat, props.dateFormat, data]);

  return <div id="linearchart"></div>;
};

export default LinearChart;
