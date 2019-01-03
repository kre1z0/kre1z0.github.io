import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
      @media (max-width: 1024px) {
        a {
          white-space: nowrap;
        }
      }
      @media (max-width: 910px) {
        padding-right: 0;
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
      @media (max-width: 1316px) {
        height: 28.8571rem;
      }
      @media (max-width: 1024px) {
        height: 22.8571rem;
      }
      @media (max-width: 768px) {
        justify-content: center;
        flex-grow: 1;
        display: flex;
        height: auto;
        > div {
          width: 20rem;
          height: 21.2142rem;
        }
      }
      @media only screen and (max-device-width: 480px) {
        height: 24rem;
      }
    }
    @media only screen and (max-device-width: 480px) {
      flex-direction: column;
      > section:first-child {
        position: relative;
        width: calc(100% + 1.7142rem * 2);
        left: -1.7142rem;
        overflow-x: auto;
        align-self: flex-start;
        menu {
          margin: 0.6rem 1.7142rem 0 1.7142rem;
          display: flex;
          @media (max-height: 500px) {
            margin-top: 0;
          }
          > ul {
            h2 {
              margin-bottom: 0.4rem;
            }
            a {
              white-space: nowrap;
            }
            &:first-child {
              margin-bottom: 0;
              margin-right: 2.8571rem;
            }
            &:last-child {
              padding-right: 1.7142rem;
            }
          }
        }
      }
      > section:last-child {
        flex-grow: 0;
      }
    }
  }
`;

export default styles;
