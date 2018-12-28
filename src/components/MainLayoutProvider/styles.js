import styled from "astroturf";
// https://github.com/idiotWu/react-smooth-scrollbar
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBar = styled(Scrollbar)`
  width: 100%;
  height: 100%;
  :global(.scroll-content) {
    width: 100%;
    height: 100%;
    will-change: transform;
    > div {
      width: 100%;
      height: 100%;
      > div {
        width: 100%;
        height: 100%;
      }
    }
  }
  :global(.scrollbar-track) {
    display: none !important;
  }
  &.disableHover {
    * {
      pointer-events: none;
    }
  }
`;
