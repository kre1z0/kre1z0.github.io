import styled from "astroturf";

export const CompanyPhotoContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(38, 44, 55, 0.7);
  }
`;

export const CompanyHeader = styled("header")`
  max-width: 114.2857rem;
  z-index: 1;
  top: calc(100vh / 3 * 2);
  left: calc(100vw / 5 / 2);
  transform: translateY(calc(-50%));
  position: absolute;
  color: #fff;
  > h1 {
    line-height: 100%;
    margin: 0 0 2.4571rem 0;
    @media (max-width: 1024px) {
      margin: 0 0 2rem 0;
    }
    @media (max-width: 576px) {
      margin: 0 0 1.4571rem 0;
    }
  }
`;

export const CompanyPhotoBlock = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: calc(100% / 5);
  height: calc(100% / 3);
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  @media (max-width: 1000px) {
    width: calc(100% / 4);
  }
  @media (max-width: 440px) {
    width: calc(100% / 2);
  }
`;
