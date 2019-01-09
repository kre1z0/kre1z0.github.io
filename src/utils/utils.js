export const getPixelRatioPropName = () => {
  const ratio = window.devicePixelRatio;
  if (ratio >= 3) {
    return "x3";
  } else if (ratio >= 2) {
    return "x2";
  } else {
    return "x1";
  }
};