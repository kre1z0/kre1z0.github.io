import styled from "astroturf";

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