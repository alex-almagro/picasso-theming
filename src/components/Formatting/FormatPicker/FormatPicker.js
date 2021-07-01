import React from "react";
import "./FormatPicker.scss";

const FormatPicker = (props) => {
  const dateBtnArr = ["2021-01", "January 2021", "01/01/2021"];
  const currencyBtnArr = ["-$100,000", "-$100k"];
  return (
    <div>
      <div className="formatPicker">
        <h3>Select a format for the dates:</h3>
        {dateBtnArr.map((dB, i) => (
          <button
            key={i}
            onClick={() => props.onSetDateFormat(i)}
            disabled={props.selectedDateFormat === i}
          >
            {dB}
          </button>
        ))}
      </div>
      <div className="formatPicker">
        <h3>Select a format for the currency:</h3>
        {currencyBtnArr.map((dB, i) => (
          <button
            key={i}
            onClick={() => props.onSetCurrencyFormat(i)}
            disabled={props.selectedCurrencyFormat === i}
          >
            {dB}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormatPicker;
