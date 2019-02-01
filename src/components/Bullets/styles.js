import styled from "astroturf";

export const BulletsContainer = styled("div")`
  display: none;
  @media (max-width: 991px) {
    font-weight: 600;
    padding: 0 1rem;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 0.8571rem;
    width: 100%;
    display: flex;
    left: 50%;
    transform: translate(-50%, calc(100% + 1rem));
    position: absolute;
    bottom: 0;
    color: rgba(38, 44, 55, 0.35);
  }
  @media (max-width: 767px) {
    font-size: 0.7142rem;
  }
  @media (max-width: 767px) and (orientation: landscape) and (max-height: 320px) {
    transform: translate(-50%, calc(100% + 0.2rem));
  }
  @media (max-width: 767px) and (orientation: portrait) and (max-height: 490px) {
    transform: translate(-50%, calc(100% + 0.5rem));
  }
`;
