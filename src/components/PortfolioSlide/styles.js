import styled, { css } from "astroturf";

import { Button } from "../../components/Buttons/Button";

export const Container = styled("div")`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Background = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  will-change: top, background-color;
  transition: all 200ms ease;
  &.hovered {
    top: -1.1428rem;
    width: calc(100% + 1.1428rem);
    height: calc(100% + 1.1428rem * 2);
  }
`;

export const Title = styled("h2")`
  font-weight: 600;
  font-size: 1.2857rem;
`;

export const Description = styled("p")`
  font-size: 1.1428rem;
  margin: 0;
`;

export const Content = styled("div")`
  z-index: 1;
  padding: 0 3.5714rem 3.5714rem 3.5714rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ControlBlock = styled("div")`
  z-index: 2;
  position: absolute;
  height: 4rem;
  right: 0;
  bottom: 0;
  transform: translate(1.1428rem, 1.1428rem);
`;

const ControlBtn = styled(Button)`
  position: relative;
  width: 4rem;
  height: 4rem;
  transition: all 100ms ease;
  background-color: #262c37;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-size: 34% 34%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../../img/arrow.svg");
  }
  &:hover {
    background-color: #90c53d;
  }
  &.disabled {
    background-color: #262c37;
    cursor: default;
    &:after {
      opacity: 0.25;
    }
  }
`;

export const PrevBtn = styled(ControlBtn)`
  margin-right: 0.5rem;
`;

export const NextBtn = styled(ControlBtn)`
  &:after {
    transform: rotate(180deg);
  }
`;

export const Screenshot = styled("img")`
  position: absolute;
  border-radius: 0.1428rem;
  margin-top: 14%;
  max-width: none;
  right: 3.125rem;
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
`;

export const transition = css`
  .entered {
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-property: transform, opacity;
  }
`;

export const slideUp = css`
  .entering {
    pointer-events: none;
    transform: translateY(40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(-40%);
  }
`;

export const slideDown = css`
  .entering {
    pointer-events: none;
    transform: translateY(-40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(40%);
  }
`;

export const slideLeft = css`
  .entering {
    pointer-events: none;
    transform: translateX(20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(-20%);
  }
`;

export const slideRight = css`
  .entering {
    pointer-events: none;
    transform: translateX(-20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(20%);
  }
`;
