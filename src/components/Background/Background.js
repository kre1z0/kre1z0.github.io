import styled from "astroturf";

export const Background = styled("div")`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  svg {
    position: absolute;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
