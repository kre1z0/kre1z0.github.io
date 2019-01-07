import styled from "astroturf";
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBarContainer = styled(Scrollbar)`
  :global(.scroll-content) {
    will-change: transform;
  }
  :global(.scrollbar-track) {
    display: none !important;
  }
`;
