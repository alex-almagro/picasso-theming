import React, { useState } from "react";
import { blackWhiteTheme } from "../Themes/themes";
import BarChart from "../Charts/BarChart/BarChart";
import ThemePicker from "../Themes/ThemePicker/ThemePicker";
import "./Layout.scss";
import LinearChart from "../Charts/LinearChart/LinearChart";
import FormatPicker from "../Formatting/FormatPicker/FormatPicker";

const Layout = (props) => {
  const [chartTheme, setChartTheme] = useState(blackWhiteTheme);
  const [dateFormat, setDateFormat] = useState(null);
  const [currencyFormat, setCurrencyFormat] = useState(null);

  return (
    <div className="wrapper">
      <h1>Themes &#x26; formatting</h1>
      <div className="themeWrapper">
        <h2>Themes</h2>
        <BarChart theme={chartTheme} />
        <ThemePicker onSetTheme={setChartTheme} />
      </div>
      <div className="formatWrapper">
        <h2>Formatting</h2>
        <LinearChart currencyFormat={currencyFormat} dateFormat={dateFormat} />
        <FormatPicker
          onSetDateFormat={setDateFormat}
          onSetCurrencyFormat={setCurrencyFormat}
        />
      </div>
    </div>
  );
};

export default Layout;
