import styled from "astroturf";

export const TaglineAwardsContainer = styled("div")`
  width: 100%;
  height: 9rem;
  background-color: #323232;
  padding: 1.1428rem;
  margin-bottom: 5.2857rem;
`;

export const TaglineAwardsBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #de923e;
  color: #fff;
`;

export const TaglineAwardsLeftBlock = styled("div")`
  display: flex;
  padding-left: 1.7142rem;
`;

export const TaglineAwardsLeftText = styled("div")`
  padding-left: 0.7142rem;
  display: flex;
  flex-direction: column;
  > span {
    &:first-child {
      font-size: 1.1428rem;
      color: #de923e;
      text-transform: uppercase;
      font-weight: 600;
    }
    &:last-child {
      color: #d6d6d6;
      font-size: 0.8571rem;
    }
  }
`;

export const TaglineAwardsCenterBlock = styled("div")`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  > span {
    line-height: normal;
    &:first-child {
      padding-bottom: 0.7142rem;
    }
  }
`;

export const TaglineAwardsRightBlock = styled("div")`
  position: relative;
  width: 11.1428rem;
  height: 100%;
  transform: translateY(calc(50% + 0.2rem));
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:first-child {
      left: 0;
      z-index: 1;
    }
    &:last-child {
      left: 0;
      transform: translate(50%, -50%);
    }
  }
`;
