import styled from "astroturf";

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  margin-bottom: 1.44rem;
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    line-height: 1.5;
  }
  &.big {
    font-size: 1.2857rem;
    line-height: 1.33;
    margin-bottom: 2rem;
    @media (max-width: 1199px) {
      font-size: 1.1428rem;
      line-height: 1.5;
    }
    @media (max-width: 991px) {
      font-size: 1rem;
      line-height: 1.43;
      margin-bottom: 1.64rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 0.8571rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
  &.withoutMargin {
    margin: 0;
  }
`;
