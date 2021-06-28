import React from "react";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import {
  heatMapTheme,
  blackWhiteTheme,
  springTheme,
  medalTheme,
} from "../../utils/utils";

const ThemePicker = (props) => {
  return (
    <div className="themePicker">
      <h2>Theme</h2>
      <ThemeBtn
        label="panda"
        emoji="🐼"
        clicked={() => props.setTheme(blackWhiteTheme)}
        title="Black and white theme"
        subtitle="Range coloring"
        info="You define 2 colors for the extreme values, and the intermediate values are colored automatically."
      />
      <ThemeBtn
        label="medal"
        emoji="🏅"
        clicked={() => props.setTheme(medalTheme)}
        title="Gold-silver-bronze theme"
        subtitle="Threshold coloring"
        link="https://qlik.dev/libraries-and-tools/picassojs/color---threshold"
        info="You define different thresholds, and the values will be automatically colored depending on how close they are to the thresholds."
      />
      <ThemeBtn
        label="flower"
        emoji="🌸"
        clicked={() => props.setTheme(springTheme)}
        title="Spring theme"
        subtitle="Categorical coloring"
        link="https://qlik.dev/libraries-and-tools/picassojs/color---categorical"
        info="You define an array of colors. The chart will be painted with these colors, always following the same order."
      />
      <ThemeBtn
        label="thermometer"
        emoji="🌡️"
        clicked={() => props.setTheme(heatMapTheme)}
        title="Heatmap theme"
        subtitle="Sequential coloring"
        link="https://qlik.dev/libraries-and-tools/picassojs/color---sequential"
        info="You define an array of colors. The first colors in the array will be assigned to smaller values, and the last colors will be assigned to the maximum values in the chart."
      />
    </div>
  );
};

export default ThemePicker;
