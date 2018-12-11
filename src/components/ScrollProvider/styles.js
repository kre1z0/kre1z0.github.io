import styled from "astroturf";
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBar = styled(Scrollbar)`
  &.disableHover {
    * {
      pointer-events: none !important;
    }
  }
`;
