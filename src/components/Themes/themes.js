export const springTheme = {
  type: "categorical-color",
  range: ["#D1EE1E", "#8EDCE6", "#947BD3", "#F0A7A0", "#F26CA7"],
};

export const blackWhiteTheme = {
  type: "color",
  range: ["lightgray", "black"],
};

export const heatMapTheme = {
  type: "sequential-color",
  range: ["lightskyblue", "springgreen", "yellow", "orange", "red", "darkred"],
};

// bronze: 0-3000, silver: 3000-6000, gold: >6000
export const medalTheme = {
  type: "threshold-color",
  domain: [3000, 6000],
  range: ["#cd7f32", "#c0c0c0", "#ffd700"],
};
