import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
    }
    > section:last-child {
      height: 24rem;
      flex-shrink: 1;
      > div {
        height: 100%;
      }
    }
    @media (max-width: 1199px) {
      justify-content: flex-start;
      > section:first-child {
        padding-right: 2rem;
        ul {
          margin-right: 0;
        }
      }
      > section:last-child {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        padding: 0;
      }
    }

    @media (max-width: 991px) {
      > section:last-child {
        max-height: 22.4285rem;
        > div {
          width: 100%;
          max-width: 22rem;
        }
      }
    }

    @media (max-width: 767px) {
      > section:first-child {
        h2 {
          font-size: 1.2857rem;
          margin-bottom: 1rem;
        }
        ul {
          &:first-child {
            margin-bottom: 1.8rem;
          }
          li {
            margin-bottom: 0.4rem;
            a {
              font-size: 0.8571rem;
            }
          }
        }
      }
    }

    @media (max-width: 767px) and (orientation: landscape) {
      justify-content: space-between;
      > section:last-child {
        height: calc(100% - 6rem);
        max-height: none;
        > div {
          align-self: center;
          max-height: 17.4rem;
          max-width: 17.1428rem;
        }
      }
    }
    @media (max-height: 390px) {
      > section:first-child {
        padding-bottom: 3rem;
      }
      > section:last-child {
        height: calc(100% - 3rem);
        align-self: flex-start;
        > div {
          max-height: none;
          max-width: 16.1428rem;
        }
      }
    }
    @media (max-height: 340px) {
      > section:first-child {
        h2 {
          font-size: 0.8571rem;
          margin-bottom: 0;
        }
        ul {
          &:first-child {
            margin-bottom: 1rem;
          }
          li {
            margin-bottom: 0;
            a {
              font-size: 0.7142rem;
            }
          }
        }
      }
      > section:last-child {
        > div {
          max-width: 18.1428rem;
        }
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      flex-direction: column;
      justify-content: space-between;
      > section:first-child {
        position: relative;
        width: calc(100% + 1.7142rem * 2);
        left: -1.7142rem;
        overflow-x: auto;
        align-self: flex-start;
        padding-right: 0;
        menu {
          margin: 0 1.7142rem 0 1.7142rem;
          display: flex;
          @media (max-height: 500px) {
            margin-top: 0;
          }
          > ul {
            h2 {
              white-space: nowrap;
              margin-bottom: 0.4rem;
            }
            li {
              margin-bottom: 0;
              a {
                white-space: nowrap;
              }
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
        width: 100%;
        flex-grow: 0;
        padding-bottom: 3rem;
        > div {
          max-width: none;
        }
      }
    }
  }
`;

export default styles;
