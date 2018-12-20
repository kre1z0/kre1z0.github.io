import React from "react";
import styled from "astroturf";

import mobileMsp1 from "../../img/portfolio/mobileMsp/mobile-1.png";
import mobileMsp2 from "../../img/portfolio/mobileMsp/mobile-2.png";
import mobileMsp3 from "../../img/portfolio/mobileMsp/mobile-3.png";

export const MspMobileScreenshots = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  top: calc(4.4285rem - 1.1428rem);
  left: calc(-1.1428rem - 8.2142rem);
  position: absolute;
  > img {
    position: relative;
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
      left: -5.3571rem;
    }
    &:nth-child(3) {
      z-index: 1;
      left: -11.5rem;
    }
  }
`;

export const MspMobileScreenshotsBlock = props => {
  return (
    <MspMobileScreenshots {...props}>
      <img src={mobileMsp1} alt="img-1" />
      <img src={mobileMsp2} alt="img-2" />
      <img src={mobileMsp3} alt="img-3" />
    </MspMobileScreenshots>
  );
};
