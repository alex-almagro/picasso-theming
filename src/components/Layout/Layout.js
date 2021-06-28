import React, { useState } from "react";
import { blackWhiteTheme } from "../../utils/utils";
import BarChart from "../BarChart/BarChart";
import ThemePicker from "../ThemePicker/ThemePicker";
import "./Layout.scss";

const Layout = (props) => {
  const [chartTheme, setChartTheme] = useState(blackWhiteTheme);
  return (
    <div className="wrapper">
      <h1>Theming &#x26; formatting</h1>
      <div className="chartWrapper">
        <BarChart theme={chartTheme} />
      </div>
      <ThemePicker setTheme={setChartTheme}/>
    </div>
  );
};

export default Layout;
