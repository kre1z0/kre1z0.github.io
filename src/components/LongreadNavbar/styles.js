import styled, { css } from "astroturf";

export const LongreadNavbarContainer = styled("nav")`
  z-index: 5;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 5.7142rem;
  will-change: transform;
  transition: background 200ms linear;
  &.lightNavy {
    a {
      color: rgba(24, 62, 107, 0.5);
      svg {
        path {
          stroke: rgba(24, 62, 107, 0.5);
          fill: rgba(24, 62, 107, 0.5);
        }
      }
    }
  }
  a {
    padding: 0.4rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: rgba(255, 255, 255, 0.5);
    transition: color 200ms linear;
    font-weight: 600;
    text-decoration: none;
    svg {
      width: 100%;
      height: 100%;
      max-width: 1.1428rem;
      max-height: 1.1428rem;
      path {
        transition: all 200ms linear;
        stroke: rgba(255, 255, 255, 0.5);
        fill: rgba(255, 255, 255, 0.5);
        opacity: 1;
      }
    }
    @media (hover: hover) {
      &:hover {
        color: #183e6b;
        svg {
          path {
            opacity: 1;
            fill: #183e6b;
            stroke: #183e6b;
          }
        }
      }
    }
  }

  &.fixed {
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
    background-color: #fff;
    a {
      color: #262c37;
      svg path {
        stroke: #262c37;
        fill: #262c37;
      }
      @media (hover: hover) {
        &:hover {
          color: #90c53d;
          svg {
            path {
              fill: #90c53d;
              stroke: #90c53d;
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    height: 4.7142rem;
  }

  @media (max-width: 767px) {
    height: 3.2857rem;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    a {
      font-size: 0.8571rem;
    }
  }
  @media (max-width: 767px) {
    height: 4rem;
    a {
      svg {
        max-width: 0.8rem;
        max-height: 0.8rem;
      }
    }
  }
`;

const styles = css`
  .longreadCloseBtn {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  a.arrowBtn {
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  .leftArrowBtn {
    left: 3.4rem;
    svg {
      margin-right: 0.6rem;
    }
  }
  .rightArrowBtn {
    right: 3.4rem;
    svg {
      margin-left: 0.6rem;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 992px) {
    .leftArrowBtn {
      left: 1.8rem;
    }
    .rightArrowBtn {
      right: 1.8rem;
    }
  }

  @media (max-width: 767px) {
    .leftArrowBtn {
      svg {
      }
    }
    .rightArrowBtn {
      svg {
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    a.arrowBtn {
      font-size: 0;
    }
    .leftArrowBtn {
      svg {
        margin-right: 0;
      }
    }
    .rightArrowBtn {
      svg {
        margin-left: 0;
      }
    }
  }
`;

export default styles;
