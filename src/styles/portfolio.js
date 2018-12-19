import { css } from "astroturf";

const styles = css`
  .portfolioContainer {
    > section:last-child {
      width: 100%;
      max-width: 42.1428rem;
      max-height: 51.1428rem;
      height: 100%;
      > div {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default styles;
