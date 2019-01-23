import { css } from "astroturf";
import styled from "astroturf";

const styles = css`
  .yandex {
    background-image: url(../../img/maps/yandex/yandex.jpg);
  }
  .google {
    background-image: url(../../img/maps/google/google.jpg);
  }

  .gis {
    background-image: url(../../img/maps/2gis/2gis.jpg);
  }
`;

export const AdressLinkContainer = styled("section")`
  text-align: center;
`;

export const AdressLink = styled("a")`
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 4.5714rem;
  height: 4.5714rem;
  margin-bottom: 0.4rem;
`;

export const AdressLinkTitle = styled("h6")`
  font-size: 0.8571rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export default styles;