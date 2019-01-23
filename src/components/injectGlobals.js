import { css } from "astroturf";

const setVhProperty = () => {
  if (typeof window !== "object") {
    return;
  }

  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  const vh = viewportHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const injectGlobals = () => {
  setVhProperty();

  return css`
    @import url("../assets/normalize.scss");
    @import url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=cyrillic");
    html,
    body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      font-family: "Montserrat", Tahoma, sans-serif;
      color: #262c37;
      overflow: hidden;
      max-width: 100vw;
    }
    img {
      outline: none;
    }
  `;
};
