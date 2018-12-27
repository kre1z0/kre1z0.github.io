import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 0;
      padding-right: 1rem;
    }
    > section:last-child {
      height: 24rem;
      flex-shrink: 1;
      > div {
        height: 100%;
      }
    }
  }
`;

export default styles;
