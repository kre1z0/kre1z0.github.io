import styled, { css } from "astroturf";

import { Title as H2, Text } from "../../components/Atoms/Atoms";
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
  @media (min-width: 769px) {
    &.hovered {
      top: -1.1428rem;
      width: calc(100% + 1.1428rem);
      height: calc(100% + 1.1428rem * 2);
      @media all and (max-height: 777px), (max-width: 992px) {
        top: -0.9rem;
        width: calc(100% + 0.9rem);
        height: calc(100% + 0.9em * 2);
      }
    }
  }
`;

export const Title = styled(H2)`
  font-weight: 600;
  margin-bottom: 0.84rem;
`;

export const Description = styled(Text)`
  color: #fff;
  @media all and (max-height: 600px) {
    max-height: 5.4rem;
    overflow: hidden;
  }
`;

export const Content = styled("div")`
  z-index: 1;
  padding: 0 3.5714rem 3.5714rem 3.5714rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  @media all and (max-height: 777px), (max-width: 992px) {
    padding: 0 2.1428rem 2.1428rem 2.1428rem;
  }
`;

export const ControlBlock = styled("div")`
  z-index: 2;
  position: absolute;
  height: 4rem;
  right: 0;
  bottom: -1rem;
  transform: translate(1.1428rem, 1.1428rem);
  @media all and (max-height: 777px), (max-width: 992px) {
    bottom: -2rem;
  }
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

  @media (hover: hover) {
    &:hover {
      background-color: #90c53d;
    }
  }

  &.disabled {
    background-color: #262c37;
    cursor: default;
    &:after {
      opacity: 0.25;
    }
  }
  @media all and (max-height: 777px), (max-width: 992px) {
    width: 2.8571rem;
    height: 2.8571rem;
  }
  @media all and (max-height: 600px), (max-width: 768px) {
    display: none;
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
  margin-top: 7.1428rem;
  width: 46.4285rem;
  height: auto;
  max-width: none;
  right: 3.125rem;
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
  @media all and (max-height: 777px), (max-width: 992px) {
    margin-top: 2.1428rem;
    width: 37.1428rem;
    right: 2.1428rem;
  }
  @media all and (max-height: 600px), (max-width: 768px) {
    margin-top: 5.2857rem;
    right: 2.8571rem;
    width: 26.2857rem;
  }
`;

export const BulletsContainer = styled("div")`
  display: none;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: -1.4285rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bullet = styled("div")`
  background-color: rgba(38, 44, 55, 0.25);
  transition: background-color 100ms linear;
  width: 0.4285rem;
  height: 0.4285rem;
  border-radius: 50%;
  margin-right: 0.4285rem;
  &:last-child {
    margin-right: 0;
  }
  &.isActive {
    background-color: rgba(38, 44, 55, 0.75);
  }
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
