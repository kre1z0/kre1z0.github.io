import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
      @media (max-width: 1024px) {
        a,
        h2 {
          white-space: nowrap;
        }
      }
      @media (max-width: 1000px) {
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
      @media (max-height: 360px) {
        width: 14rem;
        h2 {
          white-space: normal;
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
      @media (max-width: 1000px) {
        justify-content: center;
        flex-grow: 1;
        display: flex;
        height: auto;
        > div {
          width: 20rem;
          height: 21.2142rem;
        }
      }
      @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin-bottom: 3.4rem;
        > div {
          width: 19.4285rem;
          height: 18rem;
        }
      }
      @media (max-height: 440px) {
        width: 100%;
        height: auto;
        margin-bottom: 3.4rem;
        > div {
          width: 19.4285rem;
          height: 18rem;
        }
      }
      @media (max-height: 360px) {
        margin-bottom: 0;
        > div {
          width: 100%;
          height: calc(100vh - 4rem);
          height: calc(var(--vh, 1vh) * 100 - 4rem);
        }
      }
    }
    @media (max-width: 480px) {
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
    @media (max-height: 360px) {
      margin: 2rem auto 0 auto;
      width: 100%;
      height: calc(100% - 2rem);
      overflow: hidden;
      > section:first-child {
        padding-right: 2rem;
        menu {
          h2 {
            margin-bottom: 1rem;
          }
          ul {
            &:first-child {
              margin-bottom: 1.4571rem;
            }
            li {
              margin-bottom: 0.4rem;
            }
          }
        }
      }
    }
  }
`;

export default styles;
