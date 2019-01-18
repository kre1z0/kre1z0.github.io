import styled, { css } from "astroturf";

export const LongreadNavbarContainer = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 5.7142rem;
  will-change: transform;
  transition: background 200ms linear;
  &.withBg {
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
    background-color: #fff;
  }
  @media (max-width: 992px) {
    height: 4.7142rem;
  }
  @media (max-width: 576px) {
    height: 4rem;
  }
`;

const styles = css`
  .longreadCloseBtn {
    width: 1.1428571rem;
    height: 1.1428571rem;
  }
  .withBg {
    path {
      stroke: #262c37;
      opacity: 1;
    }
  }
`;

export default styles;
