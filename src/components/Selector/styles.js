import styled from "astroturf";

export const SelectorContainer = styled("div")`
  display: inline-flex;
`;

export const SelectorItem = styled("div")`
  white-space: nowrap;
  cursor: pointer;
  margin-right: 1.4285rem;
  padding: 0.4rem 1rem;
  font-weight: 500;
  display: flex;
  background-color: rgba(56, 123, 199, 0.1);
  color: #387bc7;
  border-radius: 0.2857rem;
  transition: background-color 200ms linear, color 200ms linear;
  &.isActive {
    cursor: default;
    color: #fff;
    background-color: #387bc7;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.8571rem;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    margin-right: 0.7142rem;
    font-size: 0.7142rem;
  }
`;
