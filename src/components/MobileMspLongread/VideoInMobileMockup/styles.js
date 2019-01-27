import styled from "astroturf";

export const Container = styled("div")`
  position: relative;
  width: 423px;
  height: 816px;
  max-height: 94vh;
  max-height: calc(var(--vh, 1vh) * 93.5);
  //padding: 2.5714rem 2.5714rem 6.1428rem 4.7857rem;
  margin-right: 8rem;
  background-color: green;
  > div {
  }
  video {
    top: 0;
    right: calc(100vh / 27);
    position: absolute;
    //z-index: -1;
    max-height: calc(80vh);
  }
`;

export const MockUp = styled("img")`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  //background-image: url(../../../img/portfolio/mobileMsp/mockUp-test.png);
  //background-repeat: no-repeat;
  //background-position: center;
  //background-size: contain;
  z-index: 8;
`;
