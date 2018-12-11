// cross-browser
export const getElementWidthAndHeight = element => {
  const box = element.getBoundingClientRect();
  const width = box.right - box.left;
  const height = box.bottom - box.top;

  return {
    width,
    height,
  };
};
