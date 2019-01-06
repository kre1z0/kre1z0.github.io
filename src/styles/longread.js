import styled, { css } from "astroturf";
import Scrollbar from "react-smooth-scrollbar";

export const LongreadScrollBar = styled(Scrollbar)`
  width: 100vw;
  height: 100vh;
  :global(.scroll-content) {
    will-change: transform;
  }
  :global(.scrollbar-track) {
    display: none !important;
  }
`;

export const LongreadHeader = styled("header")``;

const styles = css`
  .longreadCloseBtn {
    z-index: 4;
    top: 2.1428rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default styles;
