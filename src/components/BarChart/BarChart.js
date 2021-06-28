// Adapted from: https://observablehq.com/@miralemd/picasso-js-bar-chart?collection=@miralemd/picasso-js

import React, { useEffect } from "react";
import picasso from "picasso.js";
import { getMonths } from "../../utils/utils";

const BarChart = (props) => {
  // Here we are adding the customized theme, depending on the props
  const customizedTheme = { ...props.theme, data: { field: "Sales" } };

  const getData = () => {
    const arr = [["Month", "Sales"]];
    const months = getMonths();
    for (let m = 0; m < months.length; m++) {
      arr.push([months[m], parseFloat((Math.random() * 10000).toFixed(0))]);
    }
    return [
      {
        type: "matrix",
        data: arr,
      },
    ];
  };

  const getSettings = () => ({
    scales: {
      y: {
        data: { field: "Sales" },
        invert: true,
        include: [0],
      },
      c: customizedTheme,
      t: { data: { extract: { field: "Month" } }, padding: 0.3 },
    },
    components: [
      {
        type: "axis",
        dock: "left",
        scale: "y",
      },
      {
        type: "axis",
        dock: "bottom",
        scale: "t",
      },
      {
        key: "bars",
        type: "box",
        data: {
          extract: {
            field: "Month",
            props: {
              start: 0,
              end: { field: "Sales" },
            },
          },
        },
        settings: {
          major: { scale: "t" },
          minor: { scale: "y" },
          box: {
            fill: { scale: "c", ref: "end" },
          },
        },
      },
    ],
  });

  const renderChart = () => {
    picasso.chart({
      element: document.querySelector("#barchart"),
      data: getData(),
      settings: getSettings(),
    });
  };

  useEffect(renderChart, [props.theme]);

  return (
    <div id="barchart" style={{height: 'inherit', border: '1px solid red'}}></div>
  );
};

export default BarChart;
