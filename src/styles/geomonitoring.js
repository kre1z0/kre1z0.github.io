import styled, { css } from "astroturf";

export const GeomonitoringContainer = styled("div")`
  h1 {
    margin-bottom: 3.4rem;
  }
  @media (max-width: 991px) {
    h1 {
      margin-bottom: 2.2rem;
    }
  }
  @media (max-width: 767px) {
    h1 {
      margin-bottom: 1.4rem;
    }
  }
`;

export const Screenshot = styled("img")`
  margin: 7.4rem 0 5.2857rem 0;
  box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15);
  @media (max-width: 1199px) {
    max-width: none;
    margin: 5rem 0 4.4rem -4.5714rem;
    width: calc(100% + 4.5714rem * 2);
  }
  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
    margin: 4rem 0;
    box-shadow: 0 1.7142rem 1.7142rem 0 rgba(10, 18, 33, 0.15);
  }
  @media (max-width: 767px) and (orientation: landscape) {
    margin: 2rem 0;
    box-shadow: 0 1.1428rem 1.1428rem 0 rgba(10, 18, 33, 0.15);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    max-width: none;
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.15);
    width: 100vw;
    margin: 1rem 0 1.4rem -1.4285rem;
  }
`;

export const Footer = styled("footer")`
  background-color: rgba(38, 44, 55, 0.1);
  padding: 5.2857rem 0;
  text-align: center;
  h3 {
    max-width: 44rem;
    margin: 0 auto;
  }
  @media (max-width: 1199px) {
    padding: 4.4rem 0;
    h3 {
      max-width: 38rem;
      font-size: 1.4285rem;
    }
  }
  @media (max-width: 991px) {
    h3 {
      font-size: 1.2857rem;
    }
  }
  @media (max-width: 767px) and (orientation: landscape) {
    padding: 2.2857rem 0;
    h3 {
      max-width: 28rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 1.7142rem 2.8rem;
    h3 {
      max-width: none;
      font-size: 0.8571rem;
    }
  }
`;

const styles = css`
  .headerRightSide {
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      flex-shrink: 1;
      flex-grow: 1;
    }
  }
  .headerLeftSide {
    padding-right: 1rem;
    max-width: 34rem;
    p {
      display: block;
      margin-bottom: 0;
    }
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      p {
        margin-bottom: 2rem;
      }
    }
  }
  .firstExperienceSection {
    background-color: #64c76c;
    color: #fff;
    img {
      margin-top: 3.4rem;
      margin-bottom: 0;
    }
    @media (max-width: 1199px) {
      img {
        margin-top: 2.4rem;
      }
    }
  }
  .whatIsHeDoing {
    background-color: #ebf1f9;
    font-style: italic;
  }
  .telegramBtn {
    right: 3.4285rem;
    bottom: 3.4285rem;
    position: absolute;
    background-color: #90c53d;
    @media (max-width: 1199px) {
      right: 2.2857rem;
      bottom: 2.2857rem;
    }
    @media (max-width: 991px) {
      width: 2.2857rem;
      height: 2.2857rem;
      right: 1.1428rem;
      bottom: 1.1428rem;
      svg {
        width: 1.1rem;
        height: 1rem;
      }
    }
    @media (max-width: 767px) {
      width: 1.7142rem;
      height: 1.7142rem;
      svg {
        width: 1rem;
        height: 0.8rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      right: 0.6rem;
      bottom: 0.6rem;
    }
  }
`;

export default styles;
