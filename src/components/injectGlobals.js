import { css } from "astroturf";

export const injectGlobals = () => {
  return css`
    @import url("../assets/normalize.scss");
    @import url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=cyrillic");
    html,
    body {
      width: 100%;
      height: 100%;
      font-size: 14px;
      font-family: "Montserrat", Tahoma, sans-serif;
      color: #262c37;
      overflow: hidden;
    }
    :global(.scroll-content) {
      height: 100vh;
      will-change: transform;
    }
    :global(.scrollbar-track-y) {
      display: none !important;
    }
    :global(.scrollbar-track-x) {
      display: none !important;
    }
  `;
};
