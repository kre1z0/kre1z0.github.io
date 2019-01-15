import styled from "astroturf";

export const BulletsContainer = styled("div")`
  font-size: 0.8571rem;
  width: 100%;
  display: none;
  left: 50%;
  transform: translate(-50%, calc(100% + 1rem));
  position: absolute;
  bottom: 0;
  color: rgba(38, 44, 55, 0.35);
  @media (max-width: 1000px) {
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 576px) {
    font-size: 0.7142rem;
  }
`;
