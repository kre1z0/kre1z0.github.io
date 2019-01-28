import styled, { css } from "astroturf";

export const ParallaxContainer = styled("div")`
  position: relative;
`;

export const IconsParallaxContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  svg {
    opacity: 0;
    will-change: opacity;
    transition: opacity 200ms ease-in;
  }
`;

const styles = css`
  svg.isVisible {
    opacity: 1;
  }
`;

export default styles;
