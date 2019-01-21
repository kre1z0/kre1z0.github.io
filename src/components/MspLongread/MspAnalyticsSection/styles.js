import styled from "astroturf";

const Block = styled("div")`
  top: 50%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  img {
    width: auto;
    height: 10rem;
    box-shadow: 0 0.8571rem 1.1428rem 0 rgba(10, 18, 33, 0.1);
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
    &:nth-child(odd) {
      margin-right: 1.4285rem;
    }
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const MspAnalyticsCardsRightSide = styled(Block)`
  right: -3.8571rem;
  transform: translate(100%, -50%);
  justify-content: flex-start;
  img {
    &:nth-child(even) {
      margin-left: 1.4285rem;
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
  @media (max-width: 440px) {
    flex-wrap: nowrap;
    top: auto;
    bottom: 0;
    right: auto;
    left: 50%;
    transform: translate(-50%, 50%);
    img {
      max-width: none;
      height: 7.5rem;
      &:first-child {
        margin-right: 1.4285rem;
        margin-bottom: 0;
      }
    }
  }
`;
