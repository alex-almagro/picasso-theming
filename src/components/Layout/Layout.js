import React, { useState } from "react";
import BarChart from "../Charts/BarChart/BarChart";
import ThemePicker from "../Themes/ThemePicker/ThemePicker";
import "./Layout.scss";
import LinearChart from "../Charts/LinearChart/LinearChart";
import FormatPicker from "../Formatting/FormatPicker/FormatPicker";
import {
  blackWhiteTheme,
  heatMapTheme,
  medalTheme,
  springTheme,
} from "../Themes/themes";
import {
  commaFormat,
  dayMonthYearFormat,
  lettersFormat,
  monthYearFormat,
  yearMonthFormat,
} from "../Formatting/formats";

const Layout = (props) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [dateFormatIndex, setDateFormatIndex] = useState(0);
  const [currencyFormatIndex, setCurrencyFormatIndex] = useState(0);

  const themesArr = [blackWhiteTheme, medalTheme, springTheme, heatMapTheme];
  const dateFormatArr = [yearMonthFormat, monthYearFormat, dayMonthYearFormat];
  const currencyFormatArr = [commaFormat, lettersFormat];

  return (
    <div className="wrapper">
      <h1>Themes &#x26; formatting</h1>
      <div className="themeWrapper">
        <h2>Themes</h2>
        <BarChart theme={themesArr[themeIndex]} />
        <ThemePicker onSetTheme={setThemeIndex} selectedTheme={themeIndex} />
      </div>
      <div className="formatWrapper">
        <h2>Formatting</h2>
        <LinearChart
          currencyFormat={currencyFormatArr[currencyFormatIndex]}
          dateFormat={dateFormatArr[dateFormatIndex]}
        />
        <FormatPicker
          selectedDateFormat={dateFormatIndex}
          onSetDateFormat={setDateFormatIndex}
          selectedCurrencyFormat={currencyFormatIndex}
          onSetCurrencyFormat={setCurrencyFormatIndex}
        />
      </div>
    </div>
  );
};

export default Layout;
