import styled from "astroturf";

import { Button } from "../../components/Buttons/Button";

export const Container = styled("div")`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  &:hover {
    > div:first-child {
      top: -1.1428rem;
      width: calc(100% + 1.1428rem);
      height: calc(100% + 1.1428rem * 2);
    }
  }
`;

export const Background = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 100ms ease-out;
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
  margin-top: auto;
  z-index: 1;
  padding: 0 3.5714rem 3.5714rem 3.5714rem;
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
  width: 4rem;
  height: 4rem;
  transition: background-color 100ms ease;
  background-size: 34% 34%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #262c37;
  background-image: url("../../img/arrow.svg");
  &:hover {
    background-color: #90c53d;
  }
`;

export const PrevBtn = styled(ControlBtn)`
  margin-right: 0.5rem;
`;

export const NextBtn = styled(ControlBtn)`
  transform: rotate(180deg);
`;

export const Screenshot = styled("img")`
  align-self: flex-end;
  border-radius: 0.1428rem;
  margin-top: 14%;
  max-width: none;
  width: calc(100% + 4.2857rem);
  height: auto;
  transform: translateX(-3.5714rem);
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
`;
