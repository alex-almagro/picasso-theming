import React from "react";
import "./ThemeBtn.scss";

const ThemeBtn = (props) => {
  return (
    <div className="themeBtn">
      <div className="themeBtnHeader">
        <button onClick={props.clicked}>
          <span role="img" aria-label={props.label}>
            {props.emoji}
          </span>
        </button>
        <div className="titleWrapper">
          <h4>{props.title}</h4>
          <p>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.subtitle}
            </a>
          </p>
        </div>
      </div>
      <p className="themeBtnInfo">{props.info}</p>
    </div>
  );
};

export default ThemeBtn;
