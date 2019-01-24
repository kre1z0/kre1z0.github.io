// cross-browser
export const getElementWidthAndHeight = element => {
  if (!element) {
    return {
      width: 0,
      height: 0,
    };
  }

  const box = element.getBoundingClientRect();
  const width = box.right - box.left;
  const height = box.bottom - box.top;

  return {
    width,
    height,
  };
};

export const isElementInViewport = ({ el, offsetY = 0, offsetTop = 0 }) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();

  return (
    top + offsetY - offsetTop >= 0 &&
    left >= 0 &&
    bottom - offsetY <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


export const setVhProperty = () => {
  if (typeof window !== "object") {
    return;
  }

  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  const vh = viewportHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};