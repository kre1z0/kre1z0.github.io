import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 0;
      padding-right: 1rem;
    }
    > section:last-child {
      flex-shrink: 1;
    }
  }
  .rightSide {
    height: 23.1444rem;
  }
`;

export default styles;
