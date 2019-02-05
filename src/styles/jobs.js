import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
    }
    > section:last-child {
      position: relative;
      height: 24rem;
      flex-shrink: 1;
      > div {
        height: 100%;
      }
    }
    @media (max-width: 1314px) {
      > section:last-child {
        height: 27.4rem;
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
        height: 22rem;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        padding: 0;
      }
    }

    @media (min-width: 1024px) and (max-width: 1024px) {
      h2 {
        max-width: 14rem;
      }
      > section:last-child {
        justify-content: flex-end;
      }
    }

    @media (max-width: 991px) {
      > section:last-child {
        height: 100%;
        max-height: 22.4285rem;
        > div {
          width: 100%;
          max-width: 20rem;
        }
      }
    }

    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
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

    @media (max-width: 812px) and (orientation: landscape) {
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
        margin-bottom: 3rem;
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
        position: relative;
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
        margin-bottom: 3rem;
        max-height: 18.4444rem;
        max-width: 20.1428rem;
        @media (max-height: 490px) {
          margin-bottom: 2.4rem;
        }
        > div {
          max-width: none;
        }
      }
    }
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
      only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      margin: 0;
      height: 100%;
      padding-top: 1rem;
      > section:first-child {
        margin-bottom: 0;
      }
      > section:last-child {
        align-self: flex-end;
        margin-bottom: 2rem;
        > div {
          position: relative;
        }
      }
    }
  }
`;

export default styles;
