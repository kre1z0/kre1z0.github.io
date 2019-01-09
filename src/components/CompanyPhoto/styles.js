import styled from "astroturf";

export const CompanyPhotoContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: calc(100vw / 5 * 3);
    background: rgba(38, 44, 55, 0.7);
    @media (max-width: 768px) {
      height: calc(100vw / 4 * 3);
    }
    @media (max-width: 440px) {
      height: calc(100vw / 2 * 3);
    }
  }
`;

export const CompanyHeader = styled("header")`
  max-width: 114.2857rem;
  z-index: 1;
  top: calc(100vw / 5 * 2);
  left: calc(100vw / 5 / 2);
  transform: translateY(calc(-50%));
  position: absolute;
  color: #fff;
  > h1 {
    font-size: 4.5714rem;
    line-height: 100%;
    margin: 0 0 2.4571rem 0;
    @media (max-width: 992px) {
      font-size: 3.4285rem;
      margin: 0 0 2rem 0;
    }
    @media (max-width: 768px) {
      font-size: 2.5714rem;
    }
    @media (max-width: 576px) {
      font-size: 2.2857rem;
      margin: 0 0 1.4571rem 0;
    }
    @media (max-width: 440px) {
      font-size: 1.7142rem;
    }
  }
  @media (max-width: 768px) {
    top: calc(100vw / 4 * 2);
    left: calc(100vw / 4 / 2);
  }
  @media (max-width: 440px) {
    top: calc(100vw / 2 * 2);
    left: 1.7142rem;
    h1 {
      margin: 0;
    }
    hr {
      width: 8rem;
    }
  }
`;

export const CompanyPhotoBlock = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: calc(100vw / 5);
  height: calc(100vw / 5);
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  @media (max-width: 768px) {
    width: calc(100vw / 4);
    height: calc(100vw / 4);
  }
  @media (max-width: 440px) {
    width: calc(100vw / 2);
    height: calc(100vw / 2);
  }
`;
