import { css } from "astroturf";

const styles = css`
  .portfolioContainer {
    > section:last-child {
      width: 100%;
      max-width: 42.1428rem;
      max-height: 51.1428rem;
      height: calc(100% - 4rem);
      > div {
        width: 100%;
        height: 100%;
        > div {
          width: 100%;
          height: 100%;
        }
      }
      @media all and (max-height: 777px), (max-width: 992px) {
        max-width: 32.1428rem;
        max-height: 33.7857rem;
      }
      @media all and (max-height: 600px), (max-width: 768px) {
        max-width: 26.2857rem;
        max-height: 33.7857rem;
      }
    }
  }
`;

export default styles;
