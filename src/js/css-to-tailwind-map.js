module.exports = function cssToJsMap(variableName, addContrast) {
  if (!variableName.startsWith("--")) {
    throw Error(`variableName (${variableName}) should start with --`);
  }

  var variants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  var colorMap = {};
  variants.forEach((variant) => {
    colorMap[`${variant}`] = `var(${variableName}-${variant})`;
    if (addContrast) {
      colorMap[
        `${variant}-contrast`
      ] = `var(${variableName}-${variant}-contrast)`;
    }
  });
  return colorMap;
};
