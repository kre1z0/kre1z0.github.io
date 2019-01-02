import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
      @media (max-width: 910px) {
        padding-right: 2rem;
      }
      @media (max-width: 768px) {
        width: 16rem;
        padding-right: 0;
        h2 {
          white-space: nowrap;
        }
        ul {
          padding-right: 0;
          margin-right: 0;
        }
      }
    }
    > section:last-child {
      height: 24rem;
      flex-shrink: 1;
      > div {
        height: 100%;
      }
      @media (max-width: 768px) {
        justify-content: center;
        flex-grow: 1;
        display: flex;
        > div {
          width: 20rem;
          height: 21.2142rem;
        }
      }
    }
  }
`;

export default styles;
