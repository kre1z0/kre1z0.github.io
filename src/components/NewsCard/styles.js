import styled from "astroturf";
import { Blank } from "../Blank/Blank";

export const AboutCardContainer = styled(Blank)`
  will-change: transform, opacity;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  @media (max-height: 344px) {
    padding: 1rem;
  }
  &.disableTransition {
    transition: none;
  }
`;

export const Title = styled("h4")`
  font-size: 1.2857rem;
  color: #90c53d;
  font-weight: 600;
  margin-bottom: 0.8rem;
  @media (max-width: 991px) {
    font-size: 1.1428rem;
    margin-bottom: 0.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape), only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    margin-bottom: 0.2rem;
  }
`;

export const Date = styled("span")`
  line-height: normal;
  font-weight: 500;
  color: rgba(38, 44, 55, 0.25);
  @media (max-width: 991px) {
    font-size: 0.8571rem;
  }
`;

export const Description = styled("p")`
  margin: 1.74rem 0;
  @media (max-width: 991px) {
    font-size: 0.8571rem;
    margin: 0.8rem 0;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.7142rem;
    line-height: 1.4;
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape), only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    margin: 0.4rem 0;
  }
`;

export const Read = styled("a")`
  cursor: pointer;
  color: #90c53d;
`;

export const Logo = styled("img")`
  margin-top: auto;
  width: auto;
  height: 1.4285rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 1rem;
  }
`;
