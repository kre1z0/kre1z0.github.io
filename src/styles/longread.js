import styled, { css } from "astroturf";

export const LongreadHeader = styled("header")``;

const styles = css`
  .longreadCloseBtn {
    z-index: 4;
    top: 2.1428rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 992px) {
      top: 1.7142rem;
    }
    @media (max-width: 576px) {
      top: 1.1428rem;
    }
  }
  .scrollbar {
    width: 100vw;
    height: 100vh;
  }
`;

export default styles;
