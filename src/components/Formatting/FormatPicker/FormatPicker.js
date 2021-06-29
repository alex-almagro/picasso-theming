import React from "react";
import {
  yearMonthFormat,
  commaFormat,
  monthYearFormat,
  dayMonthYearFormat,
  lettersFormat,
} from "../formats";
import "./FormatPicker.scss";

const FormatPicker = (props) => {
  return (
    <div>
      <div className="formatPicker">
        <h3>Select a format for the dates:</h3>
        <button onClick={() => props.onSetDateFormat(yearMonthFormat)}>
          2021-01
        </button>
        <button onClick={() => props.onSetDateFormat(monthYearFormat)}>
          January 2021
        </button>
        <button onClick={() => props.onSetDateFormat(dayMonthYearFormat)}>
          01/01/2021
        </button>
      </div>
      <div className="formatPicker">
        <h3>Select a format for the currency:</h3>
        <button onClick={() => props.onSetCurrencyFormat(commaFormat)}>
          -$100,000
        </button>
        <button onClick={() => props.onSetCurrencyFormat(lettersFormat)}>
          -$100k
        </button>
      </div>
    </div>
  );
};

export default FormatPicker;
