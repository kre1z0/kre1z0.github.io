import styled, { css } from "astroturf";

export const LongreadContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
`;

export const LongreadHeader = styled("header")``;

const styles = css`
  .longreadCloseBtn {
    top: 2.1428rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default styles;
