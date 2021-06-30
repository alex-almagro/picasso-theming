import React from "react";
import "./ThemePicker.scss";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const ThemePicker = (props) => {
  const buttonArr = [
    {
      label: "panda",
      emoji: "🐼",
      title: "Black and white theme",
      subtitle: "Range coloring",
      info: "You define 2 colors for the extreme values, and the intermediate values are colored automatically.",
    },
    {
      label: "medal",
      emoji: "🏅",
      title: "Gold-silver-bronze theme",
      subtitle: "Threshold coloring",
      link: "https://qlik.dev/libraries-and-tools/picassojs/color---threshold",
      info: "You define different thresholds, and the values will be automatically colored depending on the slot they belong to. In this case, the values below 3000 will be 'bronze', the values between 3000 and 6000 will be 'silver' and the rest will be 'gold'.",
    },
    {
      label: "rainbow",
      emoji: "🌈",
      title: "Rainbow theme",
      subtitle: "Categorical coloring",
      link: "https://qlik.dev/libraries-and-tools/picassojs/color---categorical",
      info: "You define an array of colors. The chart will be painted with these colors, always following the same order.",
    },
    {
      label: "thermometer",
      emoji: "🌡️",
      title: "Heatmap theme",
      subtitle: "Sequential coloring",
      link: "https://qlik.dev/libraries-and-tools/picassojs/color---sequential",
      info: "You define an array of colors. The first colors in the array will be assigned to smaller values, and the last colors will be assigned to the maximum values in the chart.",
    },
  ];

  return (
    <div className="themePicker">
      <h3>Select a theme for the chart:</h3>
      {buttonArr.map((btn, i) => (
        <ThemeBtn
          key={i}
          label={btn.label}
          emoji={btn.emoji}
          clicked={() => props.onSetTheme(i)}
          title={btn.title}
          subtitle={btn.subtitle}
          info={btn.info}
          link={btn.link}
          isDisabled={props.selectedTheme === i}
        />
      ))}
    </div>
  );
};

export default ThemePicker;
