import styled from "astroturf";

export const BulletsContainer = styled("div")`
  width: 100%;
  display: none;
  left: 50%;
  transform: translate(-50%, calc(100% + 1rem));
  position: absolute;
  bottom: 0;
  @media (max-width: 768px) {
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Bullet = styled("div")`
  flex-shrink: 0;
  background-color: rgba(38, 44, 55, 0.25);
  transition: background-color 100ms linear;
  width: 0.4285rem;
  height: 0.4285rem;
  border-radius: 50%;
  margin: 0 0.4285rem 0.4285rem 0;
  &:last-child {
    margin-right: 0;
  }
  &.isActive {
    background-color: rgba(38, 44, 55, 0.75);
  }
`;
