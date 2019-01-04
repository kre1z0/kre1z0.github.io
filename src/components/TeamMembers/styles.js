import styled from "astroturf";

export const TeamMembersContainer = styled("div")`
  position: relative;
  margin-left: auto;
  width: calc(21.4285rem * 2 + 2.1428rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  min-height: 26.7857rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms linear;
  @media (max-width: 1024px) {
    width: calc(20rem * 2 + 2.1428rem);
  }
  &.isVisible {
    pointer-events: auto;
    opacity: 1;
  }
  > article {
    &:first-child {
      margin-right: 2.1428rem;
    }
  }
  &.oneItem {
    align-items: center;
    > article {
      margin-right: 0;
    }
  }
`;

export const NoVacancyDescription = styled("p")`
  font-size: 0.8571rem;
  font-weight: 500;
  @media only screen and (max-device-height: 440px) {
    br {
      display: none;
    }
  }
  @media only screen and (max-device-height: 360px) {
    br {
      display: block;
    }
  }
`;

export const PhotoContainer = styled("div")`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 21.4285rem;
  line-height: normal;
  @media (max-width: 1024px) {
    max-width: 20rem;
  }
  &:first-child {
    margin-right: 2.1428rem;
  }
  > img {
    max-width: none;
    width: auto;
    height: 100%;
  }
  @media (max-width: 768px) {
    will-change: opacity, transform;
    border-radius: 0.1428rem;
    box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
    &:first-child {
      margin-right: 0;
    }
    > img {
      height: 21.2142rem;
      @media only screen and (max-device-width: 480px) {
        height: 18rem;
      }
      @media only screen and (max-device-height: 440px) {
        height: 18rem;
      }
    }
  }
`;
