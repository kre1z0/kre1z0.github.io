import styled from "astroturf";

const Block = styled("div")`
  top: 50%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  img {
    opacity: 0;
    width: auto;
    height: 10rem;
    box-shadow: 0 0.8571rem 1.1428rem 0 rgba(10, 18, 33, 0.1);
    transition: transform 200ms ease-in, opacity 200ms ease-in;
    &:first-child {
      margin-bottom: 1.4285rem;
    }
  }
`;

export const MspAnalyticsCardsLeftSide = styled(Block)`
  left: -3.8571rem;
  transform: translate(-100%, -50%);
  justify-content: flex-end;
  img {
    transform: translateX(20%);
    &:nth-child(odd) {
      margin-right: 1.4285rem;
    }
  }
  @media (max-width: 650px) {
    display: none;
  }
  &.isVisible {
    img {
      opacity: 1;
      transform: translateX(0);
      &:nth-child(3) {
        transition-delay: 400ms;
      }
      &:nth-child(4) {
        transition-delay: 600ms;
      }
      &:nth-child(1) {
        transition-delay: 800ms;
      }
    }
  }
`;

export const MspAnalyticsCardsRightSide = styled(Block)`
  right: -3.8571rem;
  transform: translate(100%, -50%);
  justify-content: flex-start;
  img {
    transform: translateX(-20%);
    &:nth-child(even) {
      margin-left: 1.4285rem;
    }
    @media (max-width: 650px) {
      transform: translateY(-40%);
    }
  }
  @media (max-width: 650px) {
    right: -3rem;
    img {
      &:nth-child(even) {
        display: none;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    flex-wrap: nowrap;
    top: auto;
    bottom: 0;
    right: auto;
    left: 50%;
    transform: translate(-50%, calc(100% + 1.7142rem));
    img {
      transform: translateX(-20%);
      max-width: none;
      height: 7.5rem;
      &:first-child {
        margin-right: 1.4285rem;
        margin-bottom: 0;
      }
    }
  }
  &.isVisible {
    img {
      opacity: 1;
      transform: translateX(0);
      &:nth-child(1) {
        z-index: 1;
      }
      &:nth-child(4) {
        transition-delay: 400ms;
      }
      &:nth-child(3) {
        transition-delay: 600ms;
      }
      &:nth-child(2) {
        transition-delay: 800ms;
      }
    }
  }
`;
