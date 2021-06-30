export const rainbowTheme = {
  type: "categorical-color",
  range: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#2E2B5F", "#8B00FF"],
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
