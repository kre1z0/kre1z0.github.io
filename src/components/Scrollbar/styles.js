import styled from "astroturf";
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBarContainer = styled(Scrollbar)`
  width: 100vw;
  height: 100vh;
  :global(.scroll-content) {
    will-change: transform;
  }
  :global(.scrollbar-track) {
    display: none !important;
  }
`;