export const getMonths = () => [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const springTheme = () => ({
  type: "categorical-color",
  range: ["#D1EE1E", "#8EDCE6", "#947BD3", "#F0A7A0", "#F26CA7"],
});

export const blackWhiteTheme = () => ({
  type: "color",
  range: ["lightgray", "black"],
});

export const heatMapTheme = () => ({
  type: "sequential-color",
  range: [
    "#5555B7",
    "#2DF0F0",
    "#9CFF83",
    "#FBFF27",
    "#FF8C27",
    "#F24640",
    "#982826",
  ],
});

export const medalTheme = () => ({
  type: "threshold-color",
  domain: [3000, 5000, 8000],
  range: ["#cd7f32", "#c0c0c0", "#ffd700"],
});