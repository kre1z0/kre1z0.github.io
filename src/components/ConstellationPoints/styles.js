import styled from "astroturf";

export const ConstellationPointsContainer = styled("div")`
  position: absolute;
  width: 50vw;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  @media (max-width: 1400px) {
    width: 40vw;
  }
  @media (max-width: 1024px) {
    width: 34vw;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: 400%;
    transform: translate(0, calc(-100% - 2rem));
  }
`;

export const Point = styled("div")`
  position: absolute;
  background-color: #212224;
  width: 0.8571rem;
  height: 0.8571rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.7142rem rgba(33, 34, 36, 0.25);
  transition-property: background-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.2, 1, 0.6, 1);
  &:nth-child(1) {
    top: 50%;
    right: 0;
    transform: translate(calc(-50% - 1.8rem), -50%);
    @media (max-width: 414px) {
      top: auto;
      right: auto;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
  }
  &:nth-child(2) {
    top: 8%;
    left: 76%;
  }
  &:nth-child(3) {
    top: 32%;
    left: 40%;
  }
  &:nth-child(4) {
    top: 83%;
    left: 75%;
    @media (max-width: 414px) {
      top: 59%;
      left: 82%;
    }
  }
  &:nth-child(5) {
    top: 89%;
    left: 30%;
    @media (max-width: 414px) {
      top: 61%;
      left: 4%;
    }
  }
  &.isActive {
    background-color: #90c53d;
    box-shadow: 0 0 0 0.7142rem rgba(144, 197, 61, 0.25);
  }
`;
